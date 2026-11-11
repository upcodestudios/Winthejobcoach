import type { APIRoute } from "astro";
import { SITE_LIVE, SITE_ORIGIN, SITEMAP_PATHS } from "../data/site";

export const GET: APIRoute = () => {
  const urls = SITEMAP_PATHS.map((p) => `  <url><loc>${SITE_ORIGIN}${p === "/" ? "/" : p}</loc></url>`).join("\n");
  const note = SITE_LIVE ? "" : "<!-- Pre-launch: every page is noindex. This file is not submitted anywhere yet. -->\n";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n${note}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=300" } });
};
