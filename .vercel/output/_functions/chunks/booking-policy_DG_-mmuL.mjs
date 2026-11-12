import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { n as pageHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
// src/pages/booking-policy.astro
var booking_policy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$BookingPolicy,
	file: () => $$file,
	url: () => $$url
});
var $$BookingPolicy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Booking & Cancellation Policy | Win The Job",
		"description": "How booking, payment, cancellation, rescheduling and packages work for interview coaching with Nick Fennell."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "Policy",
		"title": "Booking & Cancellation Policy",
		"lede": "Clear terms, so you know what to expect before you book.",
		"image": pageHeaderPhoto["booking-policy"]
	})}${maybeRenderHead($$result)}<div class="mx-auto max-w-3xl space-y-10 px-6 py-14 text-base leading-relaxed"><section><h2 class="text-2xl">The short version</h2><p class="mt-3 text-muted-foreground">Book at least 48 hours ahead so Nick can review your target role. Payment is taken when you book. You can cancel or reschedule online up to 24 hours before your session (48 hours for in-office mock interviews) for a full refund or a new time. Later cancellations and missed sessions can't be refunded, and the session counts as used. Arriving 15 minutes late without notice counts as a missed session. If Nick needs to reschedule, you choose a full refund or the next available time. Packages are valid for 90 days from purchase (Executive Interview Coaching: 120 days) and are refundable only before your first session.</p></section><section><h2 class="text-2xl">Booking windows</h2><div class="mt-4 overflow-x-auto"><table class="w-full min-w-[32rem] border-collapse text-left text-sm"><thead><tr class="border-b border-border"><th scope="col" class="py-3 pr-4 font-semibold"> </th><th scope="col" class="py-3 pr-4 font-semibold">Coaching sessions</th><th scope="col" class="py-3 pr-4 font-semibold">In-office mock interviews</th><th scope="col" class="py-3 font-semibold">Free consultation</th></tr></thead><tbody class="text-muted-foreground"><tr class="border-b border-border"><th scope="row" class="py-3 pr-4 font-medium text-foreground">Book at least</th><td class="py-3 pr-4">48 hours ahead</td><td class="py-3 pr-4">48 hours ahead</td><td class="py-3">4 hours ahead</td></tr><tr class="border-b border-border"><th scope="row" class="py-3 pr-4 font-medium text-foreground">Book up to</th><td class="py-3 pr-4">60 days ahead</td><td class="py-3 pr-4">60 days ahead</td><td class="py-3">30 days ahead</td></tr><tr class="border-b border-border"><th scope="row" class="py-3 pr-4 font-medium text-foreground">Cancel online until</th><td class="py-3 pr-4">24 hours before</td><td class="py-3 pr-4">48 hours before</td><td class="py-3">2 hours before</td></tr><tr><th scope="row" class="py-3 pr-4 font-medium text-foreground">Reschedule online until</th><td class="py-3 pr-4">24 hours before</td><td class="py-3 pr-4">48 hours before</td><td class="py-3">2 hours before</td></tr></tbody></table></div></section><section><h2 class="text-2xl">Cancelling and missed sessions</h2><ul class="mt-3 list-disc space-y-2 pl-5 text-muted-foreground"><li>If you cancel on time, a single session is refunded in full. A package session goes back to your credits.</li><li>If you cancel late or miss a session, it counts as used and isn't refunded. If something urgent comes up, call Nick. He may be able to make one courtesy exception per client for a genuine emergency.</li><li>If you're running late, your session still ends on time. Arriving 15 minutes late without letting Nick know counts as a missed session.</li><li>If Nick cancels or moves a session, you choose a full refund or the next open time.</li></ul></section><section><h2 class="text-2xl">Rescheduling</h2><p class="mt-3 text-muted-foreground">You can reschedule a session up to two times, as long as you do it before the deadline in the table above.</p></section><section><h2 class="text-2xl">Packages</h2><ul class="mt-3 list-disc space-y-2 pl-5 text-muted-foreground"><li>Packages are valid for 90 days from purchase. Executive Interview Coaching is valid for 120 days.</li><li>A package is fully refundable until your first session takes place. After that, unused sessions can't be refunded or transferred.</li><li>Each session you book from a package uses one credit. You can see your credits left on your <a href="/account" class="text-primary underline">account page</a>.</li></ul></section><section><h2 class="text-2xl">Questions?</h2><p class="mt-3 text-muted-foreground">Call Nick at <a href="tel:+15512250583" class="text-primary underline">551.225.0583</a>, or use the <a href="/contact" class="text-primary underline">contact page</a>.</p></section></div>` })}`;
}, "/workspace/src/pages/booking-policy.astro", void 0);
var $$file = "/workspace/src/pages/booking-policy.astro";
var $$url = "/booking-policy";
// \0virtual:astro:page:src/pages/booking-policy@_@astro
var page = () => booking_policy_exports;
export { page };
