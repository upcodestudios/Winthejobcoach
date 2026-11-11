// Win The Job's own account surface: profile + upcoming sessions + plan credits left, on
// useMember plus the validated /api/account/dashboard endpoint (see that file for why the
// credits/sessions reads are server-side and elevated, never client-side).
import { useEffect, useState } from "react";
import { useMember } from "../../hooks/members/useMember";

interface DashboardCredit {
  poolId: string;
  displayName: string;
  available: number | null;
}

interface DashboardSession {
  id: string;
  title: string;
  startDate: string | null;
  endDate: string | null;
  location: string;
  status: string;
}

interface DashboardResponse {
  activePlans: { orders: { id: string; planId: string; endDate: string | null; status: string }[]; credits: DashboardCredit[] };
  upcomingSessions: DashboardSession[];
}

const dateLabel = (iso: string | null): string => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  } catch {
    return iso;
  }
};

export default function AccountDashboard() {
  const { member, loggedIn, loading: memberLoading, logout } = useMember();
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loggedIn) return;
    let cancelled = false;
    fetch("/api/account/dashboard")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load your account details.");
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json as DashboardResponse);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load your plans and sessions right now.");
      });
    return () => {
      cancelled = true;
    };
  }, [loggedIn]);

  if (memberLoading) {
    return (
      <div className="mx-auto max-w-2xl" aria-busy="true">
        <div className="h-40 animate-pulse rounded-lg bg-secondary" />
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-md rounded-lg border border-border p-8 text-center">
        <p className="text-sm text-muted-foreground">This page is for members.</p>
        <a
          href={`/login?returnTo=${encodeURIComponent("/account")}`}
          className="mt-6 inline-block rounded-control bg-primary px-5 py-2 text-sm font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
        >
          Log in / Sign up
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex items-center justify-between gap-4 rounded-lg border border-border p-6">
        <div className="flex items-center gap-4">
          {member?.photoUrl ? (
            <img src={member.photoUrl} alt="" className="h-14 w-14 rounded-full object-cover" />
          ) : (
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-semibold">
              {(member?.displayName ?? "M").slice(0, 1).toUpperCase()}
            </span>
          )}
          <div>
            <p className="text-lg font-semibold text-foreground">{member?.displayName ?? "Member"}</p>
            {member?.loginEmail && <p className="text-sm text-muted-foreground">{member.loginEmail}</p>}
          </div>
        </div>
        <button
          type="button"
          onClick={() => void logout()}
          className="rounded-control border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Log out
        </button>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Your packages &amp; credits left</h2>
        {data === null ? (
          <div className="h-20 animate-pulse rounded-lg bg-secondary" aria-busy="true" />
        ) : data.activePlans.credits.length === 0 ? (
          <p className="rounded-lg border border-border p-6 text-sm text-muted-foreground">
            No active packages yet. <a href="/services" className="underline">See packages</a>.
          </p>
        ) : (
          <ul className="space-y-3">
            {data.activePlans.credits.map((c) => (
              <li key={c.poolId} className="flex items-center justify-between rounded-lg border border-border p-4">
                <span className="text-sm font-medium text-foreground">{c.displayName}</span>
                <span className="text-sm text-muted-foreground">
                  {c.available != null ? `${c.available} credit${c.available === 1 ? "" : "s"} left` : "—"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Upcoming sessions</h2>
        {data === null ? (
          <div className="h-20 animate-pulse rounded-lg bg-secondary" aria-busy="true" />
        ) : data.upcomingSessions.length === 0 ? (
          <p className="rounded-lg border border-border p-6 text-sm text-muted-foreground">
            Nothing booked yet. <a href="/book" className="underline">Book a session</a>.
          </p>
        ) : (
          <ul className="space-y-3">
            {data.upcomingSessions.map((s) => (
              <li key={s.id} className="rounded-lg border border-border p-4 text-sm">
                <p className="font-medium text-foreground">{s.title}</p>
                <p className="mt-1 text-muted-foreground">
                  {dateLabel(s.startDate)}
                  {s.location ? ` · ${s.location}` : ""}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
