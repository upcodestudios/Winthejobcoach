import { defineMiddleware } from "astro:middleware";

// The Wix runtime injects its own site-level SEO tags (marked wix-seo-tag="true": title, canonical,
// og:*, twitter:*) just before </head> on every page. Every page here already writes its own
// unique title, description, canonical and Open Graph tags (SiteLayout.astro), so the injected
// copies would be duplicates that disagree. Drop them; everything else Wix injects stays.
const WIX_DUPLICATE_TAGS = /<title wix-seo-tag="true">[\s\S]*?<\/title>|<(?:link|meta) wix-seo-tag="true"[^>]*(?:rel="canonical"|property="og:|name="twitter:|name="description")[^>]*>/g;

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get("Content-Type")?.startsWith("text/html")) return response;
  const html = await response.text();
  const cleaned = html.includes('wix-seo-tag="true"') ? html.replace(WIX_DUPLICATE_TAGS, "") : html;
  return new Response(cleaned, { status: response.status, statusText: response.statusText, headers: response.headers });
});
