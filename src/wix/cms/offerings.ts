// Offerings collection reads — the nine service/package pages' marketing copy, editable by
// Nick in Wix Content Manager. Fields: slug, name, tagline, intro, includes, bestFor, kind,
// wixName, format, next, metaDescription, order. SSR only; the collection is public-read.
// `wixName` is the join key packageCards.ts and the service/plan pages use to match a live Wix
// Bookings service or Pricing Plan by name — if it drifts from the Wix-side name, price lookups
// go quietly blank (the existing fallback pattern), not an error.
import { queryItems, getItemBy } from "./items";

export type OfferingKind = "service" | "plan" | "info";

export interface Offering {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  includes: string[];
  bestFor: string;
  kind: OfferingKind;
  wixName?: string;
  format: string;
  next: string[];
  metaDescription: string;
}

const str = (v: unknown) => (typeof v === "string" ? v : "");
const arr = (v: unknown) => (Array.isArray(v) ? v.filter((s): s is string => typeof s === "string") : []);
const kind = (v: unknown): OfferingKind => (v === "service" || v === "plan" || v === "info" ? v : "info");

function toOffering(i: Record<string, unknown>): Offering {
  return {
    slug: str(i.slug),
    name: str(i.name),
    tagline: str(i.tagline),
    intro: str(i.intro),
    includes: arr(i.includes),
    bestFor: str(i.bestFor),
    kind: kind(i.kind),
    wixName: str(i.wixName) || undefined,
    format: str(i.format),
    next: arr(i.next),
    metaDescription: str(i.metaDescription),
  };
}

export async function fetchOfferings(): Promise<Offering[]> {
  try {
    const page = await queryItems("Offerings", { sort: [{ field: "order", direction: "asc" }], limit: 20 });
    return page.items.map(toOffering);
  } catch {
    // An unguarded SSR throw truncates the response; pages render without offering copy.
    return [];
  }
}

export async function fetchOfferingBySlug(slug: string): Promise<Offering | null> {
  try {
    const item = await getItemBy("Offerings", "slug", slug);
    return item ? toOffering(item) : null;
  } catch {
    return null;
  }
}
