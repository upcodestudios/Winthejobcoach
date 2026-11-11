// Win The Job's own plan detail surface — built fresh on PlanDetail, with the shipped
// SubscribeButton right under the price block. Does not overwrite the shipped PlanDetailView.
import SubscribeButton from "./SubscribeButton";
import { imgAttrs } from "../../wix/media";
import { PLAN_IMAGE_RATIO } from "../../wix/pricing-plans/plans-core";
import type { PlanDetail } from "../../wix/pricing-plans/types";

export default function PlanPitch({ plan }: { plan: PlanDetail }) {
  return (
    <div>
      {plan.imageUrl && (
        <div className="mb-6 aspect-[16/9] max-h-[40vh] overflow-hidden rounded-xl bg-secondary">
          <img {...imgAttrs(plan.imageUrl, "(min-width: 768px) 672px, 100vw", PLAN_IMAGE_RATIO)} alt={plan.name} className="h-full w-full object-cover" />
        </div>
      )}
      <p>
        <span className="text-3xl font-semibold text-foreground">{plan.price}</span>
        {plan.billing && <span className="ml-2 text-base text-muted-foreground">{plan.billing}</span>}
        {plan.duration && <span className="ml-2 text-base text-muted-foreground">· valid {plan.duration}</span>}
      </p>
      {plan.fees.map((fee) => (
        <p key={fee.name} className="mt-1 text-sm text-muted-foreground">
          + {fee.amount} {fee.name}
        </p>
      ))}
      {plan.freeTrialDays != null && (
        <p className="mt-1 text-sm text-muted-foreground">{plan.freeTrialDays}-day free trial</p>
      )}

      <div className="mt-6">
        <SubscribeButton
          plan={plan}
          className="rounded-control bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {plan.buyable && !plan.free ? `Buy Package · ${plan.price}` : undefined}
        </SubscribeButton>
      </div>

      {plan.perks.length > 0 && (
        <ul className="mt-8 space-y-2 text-sm text-foreground">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">✓</span>
              {perk}
            </li>
          ))}
        </ul>
      )}

      {plan.termsAndConditions && (
        <p className="mt-8 whitespace-pre-wrap text-xs text-muted-foreground">{plan.termsAndConditions}</p>
      )}

      <p className="mt-6 text-xs text-muted-foreground">
        Already bought this package? Your sessions and credits left are on your{" "}
        <a href="/account" className="underline">account page</a>. See the{" "}
        <a href="/booking-policy" className="underline">booking &amp; cancellation policy</a> before you buy.
      </p>
    </div>
  );
}
