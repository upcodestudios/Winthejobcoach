// Shared data for the four coaching-package hover cards (home page + /services). Price is read
// live from Wix at request time — nothing typed in here. The three packages that used to carry a
// personal photo of Nick now each use a different corporate stock photo (Nick's call, 2026-11-04
// — same batch as the internal-page headers), matching the photo already used on that package's
// own page header (headerPhotos.ts's offeringHeaderPhoto) so the card and the page it links to
// stay consistent. The skyline shot has no person in it and stays.
import { fetchOfferings } from "./offerings";
import { fetchServices } from "../wix/bookings/services";
import { fetchPlans } from "../wix/pricing-plans/plans";
import type { PackageCardData } from "../components/site/PackageCards";
import resumeReviewImg from "../assets/photos/header-resume-review-960.webp";
import dealHandshakeImg from "../assets/photos/header-deal-handshake-960.webp";
import sternReviewImg from "../assets/photos/header-stern-review-960.webp";
import packageImg4 from "../assets/photos/nick-freedom-tower-960.webp";

export const packageSlugs = ["interview-ready", "interview-accelerator", "win-the-job-intensive", "executive-interview-coaching"];

const packageImages = [resumeReviewImg, dealHandshakeImg, sternReviewImg, packageImg4];
const packagePositions = ["center 35%", "center 35%", "70% 25%", "center"];

export async function fetchPackageCards(): Promise<PackageCardData[]> {
  const prices: Record<string, string> = {};
  const offerings = await fetchOfferings();
  const bySlug = Object.fromEntries(offerings.map((o) => [o.slug, o]));
  try {
    const [svc, plans] = await Promise.all([fetchServices({ limit: 50 }), fetchPlans()]);
    for (const s of svc.items) prices[s.name] = s.price;
    for (const p of plans) prices[p.name] = p.price;
  } catch {
    // An unguarded SSR throw truncates the response mid-stream; cards render without a price.
  }
  return packageSlugs.map((slug, i) => ({
    name: bySlug[slug]?.name ?? "",
    slug,
    tagline: bySlug[slug]?.tagline ?? "",
    price: prices[bySlug[slug]?.wixName ?? ""] ?? "",
    imageSrc: packageImages[i].src,
    imagePosition: packagePositions[i],
  }));
}
