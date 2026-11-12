import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { r as SITE_ORIGIN, t as SITEMAP_PATHS } from "./site_BEY61Tp3.mjs";
// src/pages/sitemap.xml.ts
var sitemap_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Pre-launch: every page is noindex. This file is not submitted anywhere yet. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SITEMAP_PATHS.map((p) => `  <url><loc>${SITE_ORIGIN}${p === "/" ? "/" : p}</loc></url>`).join("\n")}\n</urlset>\n`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=300"
	} });
};
// \0virtual:astro:page:src/pages/sitemap.xml@_@ts
var page = () => sitemap_xml_exports;
export { page };
