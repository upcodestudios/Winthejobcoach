import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
// src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$404 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$404;
	Astro.response.status = 404;
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Page Not Found | Win The Job",
		"description": "We can't find that page. Start from the home page, the services or the booking page."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto max-w-xl px-6 py-24 text-center"><p class="eyebrow text-primary">404</p><h1 class="mt-3 text-4xl">We can't find that page</h1><p class="mt-4 text-muted-foreground">It may have moved, or the link may be mistyped. Here are some places to start.</p><div class="mt-8 flex flex-wrap justify-center gap-3"><a href="/" class="inline-flex h-12 items-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/90">Go to the home page</a><a href="/services" class="inline-flex h-12 items-center rounded-control border border-border px-6 text-sm font-semibold text-foreground no-underline hover:bg-secondary">See services</a><a href="/contact" class="inline-flex h-12 items-center rounded-control border border-border px-6 text-sm font-semibold text-foreground no-underline hover:bg-secondary">Contact Nick</a></div></div>` })}`;
}, "/workspace/src/pages/404.astro", void 0);
var $$file = "/workspace/src/pages/404.astro";
var $$url = "/404";
// \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
export { page };
