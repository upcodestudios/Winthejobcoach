// Validated server endpoint for the account page's "upcoming sessions and credits left".
//
// Why this exists (CUSTOM_OPERATIONS.md option 2 — a privileged operation): the member-permitted
// Member List Orders call (orders.memberListOrders, ambient, same as plan-access.ts) gives the
// member's own active plan orders, but the numeric credit balance behind a Wix Pricing Plans
// Benefit Programs pool (Query Pools / Get Balance) needs BENEFIT_PROGRAMS read scope, which is an
// app-level permission, not a member-callable one — so it is read here with auth.elevate(), never
// in the browser. Likewise "my upcoming bookings" (Query Extended Bookings) needs a Bookings read
// scope that is app-level, not member-callable.
//
// What keeps this safe: every elevated call is filtered to the CALLER'S OWN identity, read
// server-side from the ambient member session (fetchCurrentMember()) — never from a client-
// supplied id. No input is accepted from the request at all (GET, no body). An anonymous caller
// gets 401 before anything is elevated.
import type { APIRoute } from "astro";
import { auth } from "@wix/essentials";
import { orders as ordersModule } from "@wix/pricing-plans";
import { pools as poolsModule, balances as balancesModule } from "@wix/benefit-programs";
import { extendedBookings as extendedBookingsModule } from "@wix/bookings";
import { fetchCurrentMember } from "../../../wix/members/members";
import { wixModule } from "../../../wix/sdk";

const PRICING_PLANS_NAMESPACE = "@wix/pricing-plans";

const orders = wixModule(ordersModule);
const elevatedQueryPools = auth.elevate(poolsModule.queryPools);
const elevatedGetBalance = auth.elevate(balancesModule.getBalance);
const elevatedQueryExtendedBookings = auth.elevate(extendedBookingsModule.queryExtendedBookings);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export const GET: APIRoute = async () => {
  const member = await fetchCurrentMember();
  if (!member) return json({ error: "Log in to see your account." }, 401);

  const [ordersResult, poolsResult, bookingsResult] = await Promise.allSettled([
    orders.memberListOrders({ orderStatuses: ["ACTIVE"] } as any),
    elevatedQueryPools({
      filter: { "beneficiary.memberId": member.id, namespace: PRICING_PLANS_NAMESPACE } as any,
      cursorPaging: { limit: 20 },
    } as any),
    elevatedQueryExtendedBookings(
      {
        filter: {
          "contactDetails.contactId": member.contactId,
          status: "CONFIRMED",
          startDate: { $gte: new Date().toISOString() },
        },
        sort: [{ fieldName: "startDate", order: "ASC" }],
        cursorPaging: { limit: 20 },
      } as any,
      {},
    ),
  ]);

  const activeOrders =
    ordersResult.status === "fulfilled" ? ((ordersResult.value as any)?.orders ?? []) : [];

  const poolList = poolsResult.status === "fulfilled" ? ((poolsResult.value as any)?.pools ?? []) : [];
  const plans = await Promise.all(
    poolList.map(async (p: any) => {
      let available: number | null = null;
      try {
        const bal = await elevatedGetBalance(p._id);
        available = bal?.amount?.available != null ? Number(bal.amount.available) : null;
      } catch {
        available = null;
      }
      return { poolId: p._id as string, displayName: (p.displayName as string) || "Plan credits", available };
    }),
  );

  const upcomingSessions =
    bookingsResult.status === "fulfilled"
      ? ((bookingsResult.value as any)?.extendedBookings ?? []).map((eb: any) => {
          const b = eb.booking ?? eb;
          return {
            id: b._id ?? b.id,
            title: b.bookedEntity?.title ?? b.bookedEntity?.slot?.serviceId ?? "Session",
            startDate: b.startDate ?? null,
            endDate: b.endDate ?? null,
            location: b.bookedEntity?.slot?.location?.name ?? b.bookedEntity?.schedule?.location?.name ?? "",
            status: b.status,
          };
        })
      : [];

  return json({
    member: { displayName: member.displayName, loginEmail: member.loginEmail, memberSince: member.memberSince },
    activePlans: {
      orders: activeOrders.map((o: any) => ({ id: o._id ?? o.id, planId: o.planId, endDate: o.endDate ?? null, status: o.status })),
      credits: plans,
    },
    upcomingSessions,
  });
};
