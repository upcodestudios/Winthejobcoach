// Copy for the nine service pages now lives in the Wix "Offerings" CMS collection, editable by
// Nick in his Wix dashboard, read live via src/wix/cms/offerings.ts. No prices live here: the
// page reads price and length from Wix Bookings / Pricing Plans at request time.
export { type Offering, type OfferingKind, fetchOfferings, fetchOfferingBySlug } from "../wix/cms/offerings";
