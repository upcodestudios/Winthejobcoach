// Win The Job's own services listing on useServices — built fresh, new name (does not overwrite
// the shipped ServicesView reference).
import type { ComponentType } from "react";
import { useServices } from "../../hooks/bookings/useServices";
import { OTHER_LOCATIONS_ID } from "../../wix/bookings/services-store";
import { BookingServiceCard, type BookingServiceCardProps, type LinkLikeProps } from "./BookingServiceCard";
import type { BookingCategory, LocationOption, ServiceSummary } from "../../wix/bookings/types";

export interface BookingCatalogProps {
  initialServices?: ServiceSummary[];
  initialHasMore?: boolean;
  initialCategories?: BookingCategory[];
  initialLocations?: { locations: LocationOption[]; hasOtherLocations: boolean };
  initialCategoryId?: string | null;
  initialLocationId?: string | null;
  emptyMessage?: string;
  serviceHref?: BookingServiceCardProps["serviceHref"];
  LinkComponent?: ComponentType<LinkLikeProps>;
}

const pill = (active: boolean) =>
  `rounded-control border px-4 py-1.5 text-sm font-medium transition-colors ${
    active ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:bg-secondary"
  }`;

export default function BookingCatalog({
  initialServices,
  initialHasMore,
  initialCategories,
  initialLocations,
  initialCategoryId,
  initialLocationId,
  emptyMessage = "No services yet — check back soon.",
  serviceHref,
  LinkComponent,
}: BookingCatalogProps) {
  const {
    services,
    categories,
    locations,
    hasOtherLocations,
    activeCategoryId,
    setActiveCategoryId,
    activeLocationId,
    setActiveLocationId,
    hasMore,
    loadingMore,
    loadMore,
    error,
  } = useServices({ initialServices, initialHasMore, initialCategories, initialLocations, initialCategoryId, initialLocationId });

  const locationOptions = locations.length + (hasOtherLocations ? 1 : 0);

  return (
    <div>
      {categories.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Categories">
          <button type="button" className={pill(activeCategoryId === null)} onClick={() => setActiveCategoryId(null)}>
            All
          </button>
          {categories.map((c) => (
            <button key={c.id} type="button" className={pill(activeCategoryId === c.id)} onClick={() => setActiveCategoryId(c.id)}>
              {c.name}
            </button>
          ))}
        </div>
      )}
      {locationOptions > 1 && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Locations">
          <button type="button" className={pill(activeLocationId === null)} onClick={() => setActiveLocationId(null)}>
            All locations
          </button>
          {locations.map((l) => (
            <button key={l.id} type="button" className={pill(activeLocationId === l.id)} onClick={() => setActiveLocationId(l.id)}>
              {l.name}
            </button>
          ))}
          {hasOtherLocations && (
            <button type="button" className={pill(activeLocationId === OTHER_LOCATIONS_ID)} onClick={() => setActiveLocationId(OTHER_LOCATIONS_ID)}>
              Other locations
            </button>
          )}
        </div>
      )}
      {error && <p className="mb-4 text-sm text-destructive">{error}</p>}
      {services === null ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>
              <div className="aspect-[4/3] animate-pulse rounded-lg bg-secondary" />
              <div className="mt-3 h-3.5 w-2/3 animate-pulse rounded bg-secondary" />
            </div>
          ))}
        </div>
      ) : services.length === 0 ? (
        <p className="py-16 text-center text-muted-foreground">{emptyMessage}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <BookingServiceCard key={s.id} service={s} serviceHref={serviceHref} LinkComponent={LinkComponent} />
            ))}
          </div>
          {hasMore && (
            <div className="mt-10 text-center">
              <button
                type="button"
                disabled={loadingMore}
                onClick={() => void loadMore()}
                className="rounded-control border border-border px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary disabled:opacity-50"
              >
                {loadingMore ? "Loading…" : "Load more"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
