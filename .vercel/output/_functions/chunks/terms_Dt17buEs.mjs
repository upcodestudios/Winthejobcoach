import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { n as pageHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
// src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Terms of Use | Win The Job",
		"description": "The terms for using the Win The Job website and booking interview coaching with Nick Fennell."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "Policy",
		"title": "Terms of Use",
		"lede": "The ground rules for using this site and booking coaching.",
		"image": pageHeaderPhoto.terms
	})}${maybeRenderHead($$result)}<div class="mx-auto max-w-3xl space-y-8 px-6 py-14 text-base leading-relaxed"><section><h2 class="text-2xl">Coaching services</h2><p class="mt-3 text-muted-foreground">Win The Job offers interview coaching by Nick Fennell, in person in Fort Lee, NJ and live on Zoom. Coaching helps you prepare and practice. It can't promise any particular interview or job outcome.</p></section><section><h2 class="text-2xl">Booking, payment and refunds</h2><p class="mt-3 text-muted-foreground">Sessions and packages are booked and paid for online. Cancellations, rescheduling, refunds and package terms are set out in the <a href="/booking-policy" class="text-primary underline">Booking &amp; Cancellation Policy</a>, which forms part of these terms.</p></section><section><h2 class="text-2xl">Your account</h2><p class="mt-3 text-muted-foreground">Keep your login details private and give accurate information when you book. You're responsible for activity on your account.</p></section><section><h2 class="text-2xl">Content on this site</h2><p class="mt-3 text-muted-foreground">The text, images and materials on this site belong to Win The Job or are used with permission. Please don't copy or reuse them without asking first.</p></section><section><h2 class="text-2xl">Limits</h2><p class="mt-3 text-muted-foreground">We work to keep this site accurate and available, but we can't promise it will always be free of errors or interruptions. Information here is general and isn't legal, financial or career advice tailored to you.</p></section><section><h2 class="text-2xl">Questions</h2><p class="mt-3 text-muted-foreground">Call Nick at <a href="tel:+15512250583" class="text-primary underline">551.225.0583</a> or use the <a href="/contact" class="text-primary underline">contact page</a>.</p></section></div>` })}`;
}, "/workspace/src/pages/terms.astro", void 0);
var $$file = "/workspace/src/pages/terms.astro";
var $$url = "/terms";
// \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
export { page };
