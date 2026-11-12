import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
// src/pages/booking-confirmed.astro
var booking_confirmed_exports = /* @__PURE__ */ __exportAll({
	default: () => $$BookingConfirmed,
	file: () => $$file,
	url: () => $$url
});
var $$BookingConfirmed = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Booking Confirmed | Win The Job",
		"description": "Your booking or package purchase with Nick Fennell is confirmed."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mx-auto max-w-xl py-16 text-center"><h1 class="text-2xl font-semibold tracking-tight">Thanks — you're all set</h1><p class="mt-3 text-muted-foreground">If you booked a session or bought a package, a confirmation email is on its way. You can see your upcoming sessions and credits left any time on your account page.</p><div class="mt-8 flex flex-wrap justify-center gap-3"><a href="/account" class="rounded-control bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground no-underline transition-opacity hover:opacity-90">Go to my account</a><a href="/" class="rounded-control border border-border px-6 py-3 text-sm font-medium text-foreground no-underline transition-colors hover:bg-secondary">Back to home</a></div></div>` })}`;
}, "/workspace/src/pages/booking-confirmed.astro", void 0);
var $$file = "/workspace/src/pages/booking-confirmed.astro";
var $$url = "/booking-confirmed";
// \0virtual:astro:page:src/pages/booking-confirmed@_@astro
var page = () => booking_confirmed_exports;
export { page };
