import { t as getItemBy } from "./items_ByegMAt_.mjs";
// src/wix/cms/pageContent.ts
var str = (v, fallback) => typeof v === "string" && v.trim() !== "" ? v : fallback;
var steps = (v, fallback) => {
	if (!Array.isArray(v) || v.length === 0) return fallback;
	const cleaned = v.filter((s) => !!s && typeof s === "object" && typeof s.title === "string" && typeof s.body === "string");
	return cleaned.length > 0 ? cleaned : fallback;
};
var list = (v, fallback) => {
	if (!Array.isArray(v)) return fallback;
	const cleaned = v.filter((s) => typeof s === "string");
	return cleaned.length > 0 ? cleaned : fallback;
};
/**
* Merge a `PageContent` item over the page's own hardcoded defaults. Only the keys present in
* `defaults` are read, and each one is typed by its default's shape (string, string[], or
* StepItem[]) — the defaults double as the schema. A failed SSR read, a missing item, or an empty
* field each resolve to the default, not an empty value.
*/
async function fetchPageContent(pageId, defaults) {
	let item = null;
	try {
		item = await getItemBy("PageContent", "pageId", pageId);
	} catch {}
	if (!item) return defaults;
	const result = {};
	for (const key of Object.keys(defaults)) {
		const fallback = defaults[key];
		const raw = item[key];
		if (typeof fallback === "string") result[key] = str(raw, fallback);
		else if (Array.isArray(fallback) && fallback.length > 0 && typeof fallback[0] === "object" && fallback[0] !== null && "title" in fallback[0]) result[key] = steps(raw, fallback);
		else if (Array.isArray(fallback)) result[key] = list(raw, fallback);
		else result[key] = fallback;
	}
	return result;
}
export { fetchPageContent as t };
