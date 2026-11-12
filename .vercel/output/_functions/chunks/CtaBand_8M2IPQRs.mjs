import { d as renderTemplate, f as maybeRenderHead, m as addAttribute } from "./server_DBXwFo01.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
// src/components/site/CtaBand.astro
createAstro("https://astro.build");
var $$CtaBand = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CtaBand;
	const { heading, body, href = "/services/free-consultation", label = "Book a free consultation" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="bg-navy text-navy-foreground"><div class="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between"><div class="max-w-xl"><h2 class="text-2xl sm:text-3xl">${heading}</h2>${body && renderTemplate`<p class="mt-2 text-navy-foreground/80">${body}</p>`}</div><a${addAttribute(href, "href")} class="inline-flex h-[52px] shrink-0 items-center justify-center rounded-control bg-primary px-7 text-base font-medium text-primary-foreground no-underline transition-transform hover:-translate-y-0.5">${label}</a></div></section>`;
}, "/workspace/src/components/site/CtaBand.astro", void 0);
export { $$CtaBand as t };
