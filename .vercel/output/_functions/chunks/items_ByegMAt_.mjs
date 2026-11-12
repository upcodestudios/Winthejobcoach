import { n as imgRatio, o as wixModule, r as imgSrc } from "./media_CxrwP6gK.mjs";
import { items } from "@wix/data";
// src/wix/cms/items-core.ts
/** The width every IMAGE field is resolved at — one URL per item, large enough for a detail page. */
var IMAGE_WIDTH = 1200;
/** REST spells DATE/DATETIME fields as `{ "$date": "<iso>" }`; the SDK decodes them into Date objects. */
function isDateWrapper(v) {
	if (!v || typeof v !== "object" || Array.isArray(v)) return false;
	const keys = Object.keys(v);
	return keys.length === 1 && keys[0] === "$date" && typeof v.$date === "string";
}
/**
* The size an IMAGE field resolves at: IMAGE_WIDTH wide, at the image's own aspect when the
* `wix:image://` id carries `#originWidth/#originHeight` (a fill at another aspect would crop it),
* IMAGE_WIDTH × IMAGE_HEIGHT otherwise. The resolved URL carries the size (`/w_1200,h_800/`), so
* media.ts `imgRatio(url)` reads the aspect back for srcsets.
*/
function imageSize(ratio) {
	return {
		width: IMAGE_WIDTH,
		height: ratio ? Math.round(IMAGE_WIDTH * ratio) : 900
	};
}
/**
* Raw → DTO value: dates become ISO strings (Date objects aren't serializable as island props;
* `{ $date }` wrappers aren't dates at all), IMAGE fields holding a `wix:image://` identifier
* become https URLs a browser can load. Recursive — included reference items too.
*/
function toValue(v, media) {
	if (v instanceof Date) return v.toISOString();
	if (isDateWrapper(v)) {
		const t = new Date(v.$date);
		return Number.isNaN(t.getTime()) ? v.$date : t.toISOString();
	}
	if (typeof v === "string" && v.startsWith("wix:image://")) {
		const { width, height } = imageSize(media.imgRatio(v));
		return media.imgSrc(v, width, height);
	}
	if (Array.isArray(v)) return v.map((x) => toValue(x, media));
	if (v && typeof v === "object") {
		const out = {};
		for (const [k, val] of Object.entries(v)) out[k] = toValue(val, media);
		return out;
	}
	return v;
}
var toItem = (raw, media) => toValue(raw, media);
/**
* An undefined comparand silently changes what a query matches (every row, or none) with no
* server error — the classic "my items shows everyone's items" bug. Throw at the call site;
* omit the filter entirely when you don't hold a value yet. A `between` needs its two bounds.
*/
function assertFilterValue(f) {
	if (f.op === "isEmpty" || f.op === "isNotEmpty") return;
	if (f.value === void 0) throw new Error(`cms: filter on "${f.field}" (${f.op}) has an undefined value — pass a real value or omit the filter.`);
	if (f.op === "between" && !(Array.isArray(f.value) && f.value.length === 2)) throw new Error(`cms: filter on "${f.field}" (between) takes [start, end].`);
}
/** The validated `[start, end]` of a between filter — start inclusive, end exclusive on both transports. */
function betweenRange(f) {
	assertFilterValue(f);
	const [start, end] = f.value;
	return [start, end];
}
// src/wix/cms/items.ts
var items$1 = wixModule(items);
var media = {
	imgSrc,
	imgRatio
};
/** The query builder with every predicate applied — one place for the op → builder mapping (query, count, distinct). */
function withFilters(collectionId, filters) {
	let q = items$1.query(collectionId);
	for (const f of filters) {
		assertFilterValue(f);
		const v = f.value;
		switch (f.op) {
			case "eq":
				q = q.eq(f.field, v);
				break;
			case "ne":
				q = q.ne(f.field, v);
				break;
			case "gt":
				q = q.gt(f.field, v);
				break;
			case "ge":
				q = q.ge(f.field, v);
				break;
			case "lt":
				q = q.lt(f.field, v);
				break;
			case "le":
				q = q.le(f.field, v);
				break;
			case "contains":
				q = q.contains(f.field, v);
				break;
			case "startsWith":
				q = q.startsWith(f.field, v);
				break;
			case "endsWith":
				q = q.endsWith(f.field, v);
				break;
			case "in":
				q = q.hasSome(f.field, v);
				break;
			case "hasSome":
				q = q.hasSome(f.field, v);
				break;
			case "hasAll":
				q = q.hasAll(f.field, v);
				break;
			case "between": {
				const [start, end] = betweenRange(f);
				q = q.between(f.field, start, end);
				break;
			}
			case "isEmpty":
				q = q.isEmpty(f.field);
				break;
			case "isNotEmpty": q = q.isNotEmpty(f.field);
		}
	}
	return q;
}
/**
* Query one page of a collection. An empty result on a PUBLIC collection is a seed
* permissions bug (read must be "ANYONE"), not a query bug — never reach for auth.elevate.
*/
async function queryItems(collectionId, query = {}) {
	const { filters = [], sort = [], limit = 20, skip = 0, include = [], withTotal = false } = query;
	let q = withFilters(collectionId, filters);
	for (const s of sort) q = s.direction === "desc" ? q.descending(s.field) : q.ascending(s.field);
	if (include.length) q = q.include(...include);
	const res = await q.limit(limit).skip(skip).find(withTotal ? { returnTotalCount: true } : void 0);
	return {
		items: (res.items ?? []).map((r) => toItem(r, media)),
		hasNext: res.hasNext(),
		total: res.totalCount ?? null
	};
}
/**
* Fetch the first item whose `field` equals `value` — slug-style routing (Wix Data has no
* native get-by-slug). Null when not found → render a not-found state, never invent an item.
*/
async function getItemBy(collectionId, field, value, { include = [] } = {}) {
	return (await queryItems(collectionId, {
		filters: [{
			field,
			op: "eq",
			value
		}],
		limit: 1,
		include
	})).items[0] ?? null;
}
export { queryItems as n, getItemBy as t };
