import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { n as pageHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
// src/pages/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Privacy Policy | Win The Job",
		"description": "What information Win The Job collects when you contact Nick Fennell, book a session or buy a package, and how it is used."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "Policy",
		"title": "Privacy Policy",
		"lede": "What we collect, why, and how to reach us about it.",
		"image": pageHeaderPhoto.privacy
	})}${maybeRenderHead($$result)}<div class="mx-auto max-w-3xl space-y-8 px-6 py-14 text-base leading-relaxed"><section><h2 class="text-2xl">What we collect</h2><ul class="mt-3 list-disc space-y-2 pl-5 text-muted-foreground"><li><strong class="text-foreground">When you send a message:</strong> your name, email, the details you choose to share (such as your phone number, how you'd like a reply, what you're preparing for, your interview date) and your message.</li><li><strong class="text-foreground">When you book or buy a package:</strong> your contact details, the session or package you chose and your booking history. Payment is handled by the payment service on the checkout page.</li><li><strong class="text-foreground">When you create an account:</strong> your login details and your sessions and package credits.</li><li><strong class="text-foreground">When you visit the site:</strong> basic technical information, and cookies needed to keep you logged in and complete a booking.</li></ul></section><section><h2 class="text-2xl">How we use it</h2><p class="mt-3 text-muted-foreground">We use your information to reply to you, schedule and run your sessions, take payment, send booking confirmations and reminders, and keep records of your bookings and packages.</p></section><section><h2 class="text-2xl">Who sees it</h2><p class="mt-3 text-muted-foreground">Nick sees what you send him. The website, booking, payment and video-call services we use handle your information so they can provide those services. We share your information only as needed to run them, or if the law requires it.</p></section><section><h2 class="text-2xl">Your choices</h2><p class="mt-3 text-muted-foreground">You can ask to see, correct or delete the information we hold about you. Call Nick at <a href="tel:+15512250583" class="text-primary underline">551.225.0583</a> or use the <a href="/contact" class="text-primary underline">contact page</a>.</p></section><section><h2 class="text-2xl">Changes</h2><p class="mt-3 text-muted-foreground">If this policy changes, the updated version will be posted on this page.</p></section></div>` })}`;
}, "/workspace/src/pages/privacy.astro", void 0);
var $$file = "/workspace/src/pages/privacy.astro";
var $$url = "/privacy";
// \0virtual:astro:page:src/pages/privacy@_@astro
var page = () => privacy_exports;
export { page };
