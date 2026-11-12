import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { i as wixAuth, o as wixModule, r as imgSrc } from "./media_CxrwP6gK.mjs";
import { auth } from "@wix/essentials";
import { orders } from "@wix/pricing-plans";
import { balances, pools } from "@wix/benefit-programs";
import { extendedBookings } from "@wix/bookings";
import { members } from "@wix/members";
wixAuth();
/** The members module under the app's auth, either mode. */
var membersApi = wixModule(members);
// src/wix/members/members-core.ts
var MEMBER_FIELDSETS = ["FULL"];
/** The member's id on either transport; "" when the raw object isn't a member. */
var memberId = (raw) => raw?._id ?? raw?.id ?? "";
/**
* Raw member → CurrentMember. displayName is the first non-empty of nickname, "first last", the
* login email's local part, "Member". photoUrl is "" without a profile photo. memberSince is the
* creation date as "YYYY-MM-DD" ("" when unknown).
*/
function toCurrentMember(raw, imgSrc) {
	const nickname = raw.profile?.nickname ?? "";
	const firstName = raw.contact?.firstName ?? "";
	const lastName = raw.contact?.lastName ?? "";
	const loginEmail = raw.loginEmail ?? "";
	const fullName = [firstName, lastName].filter(Boolean).join(" ");
	const created = raw._createdDate ?? raw.createdDate;
	return {
		id: memberId(raw),
		loginEmail,
		displayName: nickname || fullName || loginEmail.split("@")[0] || "Member",
		firstName,
		lastName,
		nickname,
		photoUrl: imgSrc(raw.profile?.photo, 200, 200),
		contactId: raw.contactId ?? "",
		memberSince: created ? new Date(created).toISOString().slice(0, 10) : ""
	};
}
// src/wix/members/members.ts
/**
* The current member, or null for an anonymous visitor — and null for a LOGGED-IN member
* when the Members Area app isn't installed (setup, not a code bug; the seed installs it).
* Never throws: anonymous is a normal state for the client-side custom-login gate.
* The SDK export is getCurrentMember — the REST name "Get My Member" does not exist on
* the module; getMyMember(...) throws `is not a function`, and only once a real member
* loads the page.
*/
async function fetchCurrentMember() {
	try {
		const raw = (await membersApi.getCurrentMember({ fieldsets: [...MEMBER_FIELDSETS] })).member;
		return raw && memberId(raw) ? toCurrentMember(raw, imgSrc) : null;
	} catch {
		return null;
	}
}
// src/pages/api/account/dashboard.ts
var dashboard_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var PRICING_PLANS_NAMESPACE = "@wix/pricing-plans";
var orders$1 = wixModule(orders);
var elevatedQueryPools = auth.elevate(pools.queryPools);
var elevatedGetBalance = auth.elevate(balances.getBalance);
var elevatedQueryExtendedBookings = auth.elevate(extendedBookings.queryExtendedBookings);
var json = (body, status = 200) => new Response(JSON.stringify(body), {
	status,
	headers: { "Content-Type": "application/json" }
});
var GET = async () => {
	const member = await fetchCurrentMember();
	if (!member) return json({ error: "Log in to see your account." }, 401);
	const [ordersResult, poolsResult, bookingsResult] = await Promise.allSettled([
		orders$1.memberListOrders({ orderStatuses: ["ACTIVE"] }),
		elevatedQueryPools({
			filter: {
				"beneficiary.memberId": member.id,
				namespace: PRICING_PLANS_NAMESPACE
			},
			cursorPaging: { limit: 20 }
		}),
		elevatedQueryExtendedBookings({
			filter: {
				"contactDetails.contactId": member.contactId,
				status: "CONFIRMED",
				startDate: { $gte: (/* @__PURE__ */ new Date()).toISOString() }
			},
			sort: [{
				fieldName: "startDate",
				order: "ASC"
			}],
			cursorPaging: { limit: 20 }
		}, {})
	]);
	const activeOrders = ordersResult.status === "fulfilled" ? ordersResult.value?.orders ?? [] : [];
	const poolList = poolsResult.status === "fulfilled" ? poolsResult.value?.pools ?? [] : [];
	const plans = await Promise.all(poolList.map(async (p) => {
		let available = null;
		try {
			const bal = await elevatedGetBalance(p._id);
			available = bal?.amount?.available != null ? Number(bal.amount.available) : null;
		} catch {
			available = null;
		}
		return {
			poolId: p._id,
			displayName: p.displayName || "Plan credits",
			available
		};
	}));
	const upcomingSessions = bookingsResult.status === "fulfilled" ? (bookingsResult.value?.extendedBookings ?? []).map((eb) => {
		const b = eb.booking ?? eb;
		return {
			id: b._id ?? b.id,
			title: b.bookedEntity?.title ?? b.bookedEntity?.slot?.serviceId ?? "Session",
			startDate: b.startDate ?? null,
			endDate: b.endDate ?? null,
			location: b.bookedEntity?.slot?.location?.name ?? b.bookedEntity?.schedule?.location?.name ?? "",
			status: b.status
		};
	}) : [];
	return json({
		member: {
			displayName: member.displayName,
			loginEmail: member.loginEmail,
			memberSince: member.memberSince
		},
		activePlans: {
			orders: activeOrders.map((o) => ({
				id: o._id ?? o.id,
				planId: o.planId,
				endDate: o.endDate ?? null,
				status: o.status
			})),
			credits: plans
		},
		upcomingSessions
	});
};
// \0virtual:astro:page:src/pages/api/account/dashboard@_@ts
var page = () => dashboard_exports;
export { page };
