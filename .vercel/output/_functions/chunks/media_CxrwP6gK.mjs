import { media } from "@wix/sdk";
import { fetchWithAuth } from "@wix/sdk/context";
var client = null;
/**
* Bind an SDK module to this app's auth. Usage (identical in both modes):
*   import { productsV3 } from "@wix/stores";
*   const products = wixModule(productsV3);
*   await products.queryProducts(...)
*/
function wixModule(module) {
	return client ? client.use(module) : module;
}
/**
* An authenticated fetch of a Wix REST endpoint under the SAME auth as the SDK modules (ambient
* on managed Astro, the shared client elsewhere) — for the few APIs whose generated SDK module is
* too heavy to bundle (the Forms schema module alone is 15 MB: server-side it pushes a Wix
* deploy past its size limit, client-side every visitor downloads it). Same visitor identity,
* same token, no second mint. `path` is the wixapis.com path; returns the raw Response.
*/
function wixFetch(path, init) {
	const url = path.startsWith("http") ? path : `https://www.wixapis.com${path}`;
	return client ? client.fetchWithAuth(url, init) : fetchWithAuth(url, init);
}
/**
* The shared data client's manual-mode auth strategy, or null under ambient auth. The
* Members vertical deliberately owns a separate explicit client for its custom in-app login;
* app code reads that session through the members hooks instead.
*/
function wixAuth() {
	return client ? client.auth : null;
}
// src/wix/media.ts
/** A bare Wix media file id (`e6a89e_06cf…~mv2.png`): what REST-shaped media objects carry as `url` and `id`. */
var BARE_FILE_ID = /^[\w-]+~mv2\.[a-z0-9]+$/i;
function rawOf(value) {
	if (!value) return "";
	if (typeof value === "string") return value;
	if (value.image != null && typeof value.image === "object") return rawOf(value.image);
	return (typeof value.image === "string" ? value.image : null) ?? value.url ?? value.id ?? "";
}
/** Resolve any Wix media value to a browser-loadable URL ("" when absent). */
function imgSrc(value, width = 600, height = 600) {
	const v = rawOf(value);
	if (!v) return "";
	if (v.startsWith("wix:image://")) return media.getScaledToFillImageUrl(v, width, height, {});
	const file = BARE_FILE_ID.test(v) ? v : v.match(/^https:\/\/static\.wixstatic\.com\/media\/([^/?#]+)/)?.[1];
	if (file) return `https://static.wixstatic.com/media/${file}/v1/fill/w_${width},h_${height},al_c,q_90/${file}`;
	return v;
}
/**
* Responsive candidates for `srcset`: the same image at several widths through Wix's scaler, so a
* card never downloads a hero-sized file. Pair with `sizes`:
*   <img src={imgSrc(m, 640, 640)} srcSet={imgSrcSet(m)} sizes="(min-width: 1024px) 25vw, 50vw"
*        width={640} height={640} loading="lazy" alt={…} />
* Accepts every form an image reaches you in: a raw `wix:image://` id, an ALREADY-RESOLVED Wix URL
* (what the DTOs carry — `imageUrl`, `gallery[]`; its `/v1/fill/w_…,h_…` segment is rewritten per
* width), or any other https URL (returned as the single candidate). `ratio` is height/width
* (1 = square). "" only when there is no image at all — still set `src` as well.
*/
function imgSrcSet(value, widths = [
	320,
	480,
	640,
	960
], ratio = 1) {
	const raw = rawOf(value);
	if (!raw) return "";
	if (raw.startsWith("wix:image://") || BARE_FILE_ID.test(raw)) return widths.map((w) => `${imgSrc(value, w, Math.round(w * ratio))} ${w}w`).join(", ");
	const FILL = /\/v1\/fill\/w_\d+,h_\d+/;
	if (/static\.wixstatic\.com\//.test(raw) && FILL.test(raw)) return widths.map((w) => `${raw.replace(FILL, `/v1/fill/w_${w},h_${Math.round(w * ratio)}`)} ${w}w`).join(", ");
	return raw;
}
/**
* Everything an <img> needs for one Wix image, so a tile can never ship `srcSet` without `src`:
*   <img {...imgAttrs(p.imageUrl, "(min-width: 1024px) 25vw, 50vw")} alt={p.name} />
* `sizes` is the width the image renders at (a CSS length or media-query list); `ratio` is
* height/width. Returns an empty object when there is no image — render your placeholder then.
*/
function imgAttrs(value, sizes, ratio = 1) {
	const src = imgSrc(value, 640, Math.round(640 * ratio));
	if (!src) return {};
	return {
		src,
		srcSet: imgSrcSet(value, void 0, ratio),
		sizes,
		loading: "lazy",
		decoding: "async"
	};
}
/**
* Height/width of a Wix image when the value carries its size: a raw
* `wix:image://…#originWidth=W&originHeight=H` id (the natural size) or a resolved `/v1/fill/w_W,h_H/`
* URL (the size it was scaled to). null when neither is present. Pass it as `ratio` to keep a
* srcset at the image's own aspect instead of the square default:
*   <img {...imgAttrs(item.photo, "33vw", imgRatio(item.photo) ?? 1)} alt={…} />
*/
function imgRatio(value) {
	const v = rawOf(value);
	if (typeof v !== "string" || !v) return null;
	const size = v.startsWith("wix:image://") ? [v.match(/[#&]originWidth=(\d+)/)?.[1], v.match(/[#&]originHeight=(\d+)/)?.[1]] : v.match(/\/v1\/fill\/w_(\d+),h_(\d+)/)?.slice(1) ?? [];
	const w = Number(size[0]);
	const h = Number(size[1]);
	return w > 0 && h > 0 ? h / w : null;
}
export { wixFetch as a, wixAuth as i, imgRatio as n, wixModule as o, imgSrc as r, imgAttrs as t };
