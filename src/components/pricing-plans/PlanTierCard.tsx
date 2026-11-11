// Win The Job's own plan card — built fresh on usePlans' PlanSummary contract, with the shipped
// SubscribeButton as the card's last row. Does not overwrite the shipped PlansView/PlanCard
// reference.
import SubscribeButton from "./SubscribeButton";
import { usePlans } from "../../hooks/pricing-plans/usePlans";
import type { PlanSummary } from "../../wix/pricing-plans/types";

export function PlanTierCard({ plan }: { plan: PlanSummary }) {
  return (
    <div className="flex min-w-0 flex-col rounded-lg border border-border bg-background p-6">
      <p className="min-w-0 break-words text-lg font-semibold text-foreground">{plan.name}</p>
      {plan.description && <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>}
      <p className="mt-4">
        <span className="text-2xl font-semibold text-foreground">{plan.price}</span>
        {plan.billing && <span className="ml-1 text-sm text-muted-foreground">{plan.billing}</span>}
        {plan.duration && <span className="ml-1 text-sm text-muted-foreground">· valid {plan.duration}</span>}
      </p>
      {plan.fees.map((fee) => (
        <p key={fee.name} className="mt-1 text-xs text-muted-foreground">
          + {fee.amount} {fee.name}
        </p>
      ))}
      {plan.freeTrialDays != null && (
        <p className="mt-1 text-xs text-muted-foreground">{plan.freeTrialDays}-day free trial</p>
      )}
      {plan.perks.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm text-foreground">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">✓</span>
              {perk}
            </li>
          ))}
        </ul>
      )}
      <a href={`/plans/${plan.slug}`} className="mt-4 text-sm font-medium text-primary no-underline hover:underline">
        Details
      </a>
      <div className="mt-auto pt-5">
        <SubscribeButton plan={plan} assignedText={null} className="w-full rounded-control bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50" />
      </div>
    </div>
  );
}

export default function PricingGrid({ initialPlans }: { initialPlans?: PlanSummary[] }) {
  const { plans, error } = usePlans({ initialPlans });

  return (
    <div>
      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}
      {plans === null ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="h-72 animate-pulse rounded-lg bg-secondary" />
          ))}
        </div>
      ) : plans.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">No packages yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <PlanTierCard key={p.id} plan={p} />
          ))}
        </div>
      )}
    </div>
  );
}
