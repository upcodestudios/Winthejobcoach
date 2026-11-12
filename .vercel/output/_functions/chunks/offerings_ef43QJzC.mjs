import { n as queryItems, t as getItemBy } from "./items_ByegMAt_.mjs";
// src/wix/cms/offerings.ts
var str = (v) => typeof v === "string" ? v : "";
var arr = (v) => Array.isArray(v) ? v.filter((s) => typeof s === "string") : [];
var kind = (v) => v === "service" || v === "plan" || v === "info" ? v : "info";
function toOffering(i) {
	return {
		slug: str(i.slug),
		name: str(i.name),
		tagline: str(i.tagline),
		intro: str(i.intro),
		includes: arr(i.includes),
		bestFor: str(i.bestFor),
		kind: kind(i.kind),
		wixName: str(i.wixName) || void 0,
		format: str(i.format),
		next: arr(i.next),
		metaDescription: str(i.metaDescription)
	};
}
async function fetchOfferings() {
	try {
		return (await queryItems("Offerings", {
			sort: [{
				field: "order",
				direction: "asc"
			}],
			limit: 20
		})).items.map(toOffering);
	} catch {
		return [];
	}
}
async function fetchOfferingBySlug(slug) {
	try {
		const item = await getItemBy("Offerings", "slug", slug);
		return item ? toOffering(item) : null;
	} catch {
		return null;
	}
}
export { fetchOfferings as n, fetchOfferingBySlug as t };
