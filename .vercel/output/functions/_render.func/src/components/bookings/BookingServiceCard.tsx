// Win The Job's own service tile — branded on the @theme tokens. Built fresh on useServices'
// ServiceSummary contract; does not overwrite the shipped ServicesView/ServiceCard reference.
import type { ComponentType, ReactNode } from "react";
import type { ServiceSummary, Weekday } from "../../wix/bookings/types";

export interface LinkLikeProps {
  href: string;
  className?: string;
  children?: ReactNode;
}

const PlainLink = ({ href, className, children }: LinkLikeProps) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const DAY_SHORT: Record<Weekday, string> = {
  MONDAY: "Mon",
  TUESDAY: "Tue",
  WEDNESDAY: "Wed",
  THURSDAY: "Thu",
  FRIDAY: "Fri",
  SATURDAY: "Sat",
  SUNDAY: "Sun",
};

/**
 * True when the service can be booked both by Zoom and at the Fort Lee office — Wix's own
 * location data can't express this (a dual-format service still carries only the business
 * location, per Session 2's BUILD_LOG), so the format choice is read from `conferencing` + a
 * business location together. Until Nick connects Zoom after the transfer (Session 7), Wix
 * stores `conferencing: false` on every service regardless of intent (also logged in Session 2),
 * so the slug fallback below keeps the choice visible today for the three services the plan's
 * "Bookings setup" table marks Zoom-or-office; drop the fallback once conferencing is live.
 */
const DUAL_FORMAT_SLUGS_UNTIL_ZOOM_CONNECTED = new Set([
  "interview-ready",
  "coaching-session",
  "executive-coaching-session",
]);

export function isDualFormat(service: ServiceSummary): boolean {
  if (service.conferencing && service.locations.some((l) => l.type === "BUSINESS")) return true;
  return DUAL_FORMAT_SLUGS_UNTIL_ZOOM_CONNECTED.has(service.slug) && service.locations.some((l) => l.type === "BUSINESS");
}

export function BookingPriceLine({ service }: { service: ServiceSummary }) {
  // rateType NO_FEE + hasPricingPlans is how this build's plan-credit-only services (Coaching
  // Session, Executive Coaching Session, Mock Interview) read from Wix — "Free" would mislead a
  // visitor into thinking there's nothing to pay, when a package purchase is required.
  if (service.rateType === "NO_FEE" && service.hasPricingPlans) {
    return <span className="text-foreground">Plan credit only</span>;
  }
  if (!service.price) return null;
  return (
    <span className="text-foreground">
      {service.priceFrom ? "From " : ""}
      {service.price}
      {service.basePrice && <s className="ml-1 text-muted-foreground">{service.basePrice}</s>}
      {service.discountName && <span className="ml-1 text-xs text-muted-foreground">{service.discountName}</span>}
    </span>
  );
}

export interface BookingServiceCardProps {
  service: ServiceSummary;
  serviceHref?: (slug: string) => string;
  LinkComponent?: ComponentType<LinkLikeProps>;
}

export function BookingServiceCard({
  service,
  serviceHref = (slug) => `/services/${slug}`,
  LinkComponent = PlainLink,
}: BookingServiceCardProps) {
  const dual = isDualFormat(service);
  return (
    <LinkComponent href={serviceHref(service.slug)} className="group block no-underline">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
        {service.imageUrl ? (
          <img
            src={service.imageUrl}
            alt={service.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            {service.name}
          </div>
        )}
        <span className="absolute left-3 top-3 flex flex-wrap gap-1">
          {dual ? (
            <span className="rounded-control bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              Zoom or office
            </span>
          ) : service.conferencing ? (
            <span className="rounded-control bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              Online
            </span>
          ) : null}
        </span>
      </div>
      <p className="mt-3 text-sm font-semibold text-foreground">{service.name}</p>
      {service.tagLine && <p className="mt-0.5 text-xs text-muted-foreground">{service.tagLine}</p>}
      <p className="mt-1 text-sm text-muted-foreground">
        {service.durationLabel ? `${service.durationLabel} · ` : ""}
        <BookingPriceLine service={service} />
      </p>
      {service.offeredDays.length > 0 && (
        <p className="mt-0.5 text-xs text-muted-foreground">{service.offeredDays.map((d) => DAY_SHORT[d]).join(", ")}</p>
      )}
    </LinkComponent>
  );
}

export default BookingServiceCard;
