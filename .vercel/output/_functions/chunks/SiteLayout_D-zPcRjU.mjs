import { c as renderSlot, d as renderTemplate, i as renderComponent, m as addAttribute, p as renderHead, x as unescapeHTML } from "./server_DBXwFo01.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
import { t as createImageAsset } from "./image-asset_9P4BGFA9.mjs";
import { n as SITE_NAME, r as SITE_ORIGIN } from "./site_BEY61Tp3.mjs";
// src/assets/brand/logo-white.webp
var logo_white_default = createImageAsset({
	"src": "/_astro/logo-white.DJpvN-d1.webp",
	"width": 3342,
	"height": 1837,
	"format": "webp"
}, "/workspace/src/assets/brand/logo-white.webp", false);
// node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url
var inter_latin_wght_normal_default = "/_astro/inter-latin-wght-normal.Dx4kXJAl.woff2";
// src/assets/brand/og-logo-1200.png
var og_logo_1200_default = createImageAsset({
	"src": "/_astro/og-logo-1200.BbV3RrDZ.png",
	"width": 1200,
	"height": 630,
	"format": "png"
}, "/workspace/src/assets/brand/og-logo-1200.png", false);
// src/layouts/SiteLayout.astro
createAstro("https://astro.build");
var $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SiteLayout;
	const { title, description, jsonLd } = Astro.props;
	const path = Astro.url.pathname.replace(/\/+$/, "") || "/";
	const canonical = `${SITE_ORIGIN}${path}`;
	const ogImageUrl = `${SITE_ORIGIN}${og_logo_1200_default.src}`;
	const graph = jsonLd?.length ? JSON.stringify({
		"@context": "https://schema.org",
		"@graph": jsonLd
	}).replace(/</g, "\\u003c") : null;
	const coachingPackages = [
		{
			label: "Interview Ready",
			href: "/services/interview-ready"
		},
		{
			label: "Interview Accelerator",
			href: "/services/interview-accelerator"
		},
		{
			label: "Win The Job Intensive",
			href: "/services/win-the-job-intensive"
		},
		{
			label: "Executive Interview Coaching",
			href: "/services/executive-interview-coaching"
		}
	];
	const moreCoaching = [
		{
			label: "ESL Coaching",
			href: "/services/esl-coaching"
		},
		{
			label: "LinkedIn & Resume",
			href: "/services/linkedin-resume"
		},
		{
			label: "Presentation Skills",
			href: "/services/presentation-skills"
		}
	];
	const howItWorks = [
		{
			label: "The Win The Job Methodology",
			href: "/how-it-works"
		},
		{
			label: "Your Coaching Plan",
			href: "/how-it-works#coaching-plan"
		},
		{
			label: "Mock Interviews",
			href: "/how-it-works#mock-interviews"
		},
		{
			label: "Free Consultation",
			href: "/services/free-consultation"
		}
	];
	const about = [{
		label: "Meet Nick",
		href: "/about"
	}, {
		label: "Client Perspectives",
		href: "/about#client-perspectives"
	}];
	return renderTemplate`<html lang="en" data-astro-cid-tq46r5sz><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${renderTemplate`<meta name="robots" content="noindex, nofollow">`}<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preload"${addAttribute(inter_latin_wght_normal_default, "href")} as="font" type="font/woff2" crossorigin><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:site_name"${addAttribute(SITE_NAME, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}>${description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`}<meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(ogImageUrl, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Win The Job — Interview Coach"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#061644">${graph && renderTemplate`<script type="application/ld+json">${unescapeHTML(graph)}<\/script>`}${renderSlot($$result, $$slots["seo-tags"])}${renderHead($$result)}</head><body class="flex min-h-screen flex-col" data-astro-cid-tq46r5sz><a href="#main" class="skip-link" data-astro-cid-tq46r5sz>Skip to main content</a><header class="site-header sticky top-0 z-40 border-b border-navy-foreground/15 bg-navy" data-astro-cid-tq46r5sz><div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:h-32" data-astro-cid-tq46r5sz><a href="/" class="flex items-center gap-2 no-underline" aria-label="Win The Job — home" data-astro-cid-tq46r5sz><img${addAttribute(logo_white_default.src, "src")}${addAttribute(logo_white_default.width, "width")}${addAttribute(logo_white_default.height, "height")} alt="Win The Job — Interview Coach" class="h-14 w-auto sm:h-28" data-astro-cid-tq46r5sz></a><nav class="hidden items-center gap-1 lg:flex" aria-label="Primary" data-astro-cid-tq46r5sz><div class="nav-hover" data-astro-cid-tq46r5sz><button type="button" class="nav-hover-trigger" data-astro-cid-tq46r5sz>Coaching Packages</button><div class="nav-panel" data-astro-cid-tq46r5sz>${coachingPackages.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}</div></div><div class="nav-hover" data-astro-cid-tq46r5sz><button type="button" class="nav-hover-trigger" data-astro-cid-tq46r5sz>More Coaching</button><div class="nav-panel" data-astro-cid-tq46r5sz>${moreCoaching.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}</div></div><div class="nav-hover" data-astro-cid-tq46r5sz><button type="button" class="nav-hover-trigger" data-astro-cid-tq46r5sz>How It Works</button><div class="nav-panel" data-astro-cid-tq46r5sz>${howItWorks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}</div></div><div class="nav-hover" data-astro-cid-tq46r5sz><button type="button" class="nav-hover-trigger" data-astro-cid-tq46r5sz>About</button><div class="nav-panel" data-astro-cid-tq46r5sz>${about.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}</div></div><a href="/contact" class="nav-link" data-astro-cid-tq46r5sz>Contact</a></nav><div class="flex items-center gap-3" data-astro-cid-tq46r5sz><span class="hidden sm:inline-flex" data-astro-cid-tq46r5sz>${renderComponent($$result, "MemberMenu", null, {
		"client:only": "react",
		"data-astro-cid-tq46r5sz": true,
		"client:component-hydration": "only",
		"client:component-path": "/workspace/src/components/members/MemberMenu.tsx",
		"client:component-export": "default"
	})}</span><a href="/book" class="hidden h-11 items-center rounded-control bg-primary px-5 text-sm font-semibold text-primary-foreground no-underline transition-colors hover:bg-primary/90 sm:inline-flex" data-astro-cid-tq46r5sz>Book Now</a><details class="nav-dropdown lg:hidden" data-astro-cid-tq46r5sz><summary class="site-header-menu-button flex h-11 w-11 items-center justify-center rounded-control border border-border text-foreground" aria-label="Open menu" data-astro-cid-tq46r5sz><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-astro-cid-tq46r5sz><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" data-astro-cid-tq46r5sz></path></svg></summary><div class="nav-panel nav-panel--mobile" data-astro-cid-tq46r5sz><p class="mobile-group-label" data-astro-cid-tq46r5sz>Coaching Packages</p>${coachingPackages.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}<p class="mobile-group-label" data-astro-cid-tq46r5sz>More Coaching</p>${moreCoaching.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}<p class="mobile-group-label" data-astro-cid-tq46r5sz>How It Works</p>${howItWorks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}<p class="mobile-group-label" data-astro-cid-tq46r5sz>About</p>${about.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-tq46r5sz>${item.label}</a>`)}<a href="/contact" data-astro-cid-tq46r5sz>Contact</a><a href="/account" data-astro-cid-tq46r5sz>My account</a><a href="/book" class="mobile-book-now" data-astro-cid-tq46r5sz>Book Now</a></div></details></div></div></header><main id="main" class="flex-1" tabindex="-1" data-astro-cid-tq46r5sz>${renderSlot($$result, $$slots["default"])}</main><footer class="border-t border-border bg-navy text-navy-foreground" data-astro-cid-tq46r5sz><div class="mx-auto max-w-7xl px-6 py-14" data-astro-cid-tq46r5sz><div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" data-astro-cid-tq46r5sz><div data-astro-cid-tq46r5sz><img${addAttribute(logo_white_default.src, "src")}${addAttribute(logo_white_default.width, "width")}${addAttribute(logo_white_default.height, "height")} alt="Win The Job — Interview Coach" class="h-20 w-auto sm:h-24" data-astro-cid-tq46r5sz><p class="mt-4 max-w-xs text-sm text-navy-foreground/70" data-astro-cid-tq46r5sz>Interview coaching for every stage of your career.</p></div><div data-astro-cid-tq46r5sz><p class="eyebrow text-navy-foreground/60" data-astro-cid-tq46r5sz>Reach Nick</p><ul class="mt-3 space-y-2 text-sm" data-astro-cid-tq46r5sz><li data-astro-cid-tq46r5sz><a href="tel:+15512250583" class="inline-flex min-h-11 items-center text-navy-foreground no-underline hover:text-accent" data-astro-cid-tq46r5sz>Call 551.225.0583</a></li><li data-astro-cid-tq46r5sz><a href="mailto:nick@winthejobcoach.com" class="inline-flex min-h-11 items-center text-navy-foreground no-underline hover:text-accent" data-astro-cid-tq46r5sz>nick@winthejobcoach.com</a></li></ul></div><div data-astro-cid-tq46r5sz><p class="eyebrow text-navy-foreground/60" data-astro-cid-tq46r5sz>Where we meet</p><p class="mt-3 text-sm text-navy-foreground/85" data-astro-cid-tq46r5sz>Live on Zoom, in person at an agreed upon location, or in an office setting at the Regus Bridge Plaza, Fort Lee, NJ</p></div><div data-astro-cid-tq46r5sz><p class="eyebrow text-navy-foreground/60" data-astro-cid-tq46r5sz>When Nick coaches</p><p class="mt-3 text-sm text-navy-foreground/85" data-astro-cid-tq46r5sz>Mon–Fri, 5:30–9:00 PM ET<br data-astro-cid-tq46r5sz>Sat–Sun, 9:00 AM–9:00 PM ET</p></div></div><div class="mt-12 flex flex-col gap-3 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between" data-astro-cid-tq46r5sz><p data-astro-cid-tq46r5sz>© ${(/* @__PURE__ */ new Date()).getFullYear()} Win The Job Interview Coaching</p><nav class="flex flex-wrap gap-x-5" aria-label="Policies" data-astro-cid-tq46r5sz><a href="/booking-policy" class="inline-flex min-h-11 items-center text-navy-foreground/70 no-underline hover:text-accent" data-astro-cid-tq46r5sz>Booking &amp; Cancellation Policy</a><a href="/privacy" class="inline-flex min-h-11 items-center text-navy-foreground/70 no-underline hover:text-accent" data-astro-cid-tq46r5sz>Privacy</a><a href="/terms" class="inline-flex min-h-11 items-center text-navy-foreground/70 no-underline hover:text-accent" data-astro-cid-tq46r5sz>Terms</a></nav></div></div></footer></body></html>`;
}, "/workspace/src/layouts/SiteLayout.astro", void 0);
export { logo_white_default as n, $$SiteLayout as t };
