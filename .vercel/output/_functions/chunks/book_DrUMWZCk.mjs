import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { n as fetchServices } from "./services_CiFd5Tvt.mjs";
import { n as fetchPlans } from "./plans_BWxTbBUq.mjs";
import { t as SubscribeButton } from "./SubscribeButton_dIdnuiCJ.mjs";
import "react";
import { jsxDEV } from "react/jsx-dev-runtime";
// src/components/bookings/BookingServiceCard.tsx
var _jsxFileName$1 = "/workspace/src/components/bookings/BookingServiceCard.tsx";
var PlainLink = ({ href, className, children }) => /* @__PURE__ */ jsxDEV("a", {
	href,
	className,
	children
}, void 0, false, {
	fileName: _jsxFileName$1,
	lineNumber: 13,
	columnNumber: 3
}, void 0);
var DAY_SHORT = {
	MONDAY: "Mon",
	TUESDAY: "Tue",
	WEDNESDAY: "Wed",
	THURSDAY: "Thu",
	FRIDAY: "Fri",
	SATURDAY: "Sat",
	SUNDAY: "Sun"
};
/**
* True when the service can be booked both by Zoom and at the Fort Lee office — Wix's own
* location data can't express this (a dual-format service still carries only the business
* location, per Session 2's BUILD_LOG), so the format choice is read from `conferencing` + a
* business location together. Until Nick connects Zoom after the transfer (Session 7), Wix
* stores `conferencing: false` on every service regardless of intent (also logged in Session 2),
* so the slug fallback below keeps the choice visible today for the three services the plan's
* "Bookings setup" table marks Zoom-or-office; drop the fallback once conferencing is live.
*/
var DUAL_FORMAT_SLUGS_UNTIL_ZOOM_CONNECTED = /* @__PURE__ */ new Set([
	"interview-ready",
	"coaching-session",
	"executive-coaching-session"
]);
function isDualFormat(service) {
	if (service.conferencing && service.locations.some((l) => l.type === "BUSINESS")) return true;
	return DUAL_FORMAT_SLUGS_UNTIL_ZOOM_CONNECTED.has(service.slug) && service.locations.some((l) => l.type === "BUSINESS");
}
function BookingPriceLine({ service }) {
	if (service.rateType === "NO_FEE" && service.hasPricingPlans) return /* @__PURE__ */ jsxDEV("span", {
		className: "text-foreground",
		children: "Plan credit only"
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 53,
		columnNumber: 12
	}, this);
	if (!service.price) return null;
	return /* @__PURE__ */ jsxDEV("span", {
		className: "text-foreground",
		children: [
			service.priceFrom ? "From " : "",
			service.price,
			service.basePrice && /* @__PURE__ */ jsxDEV("s", {
				className: "ml-1 text-muted-foreground",
				children: service.basePrice
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 60,
				columnNumber: 29
			}, this),
			service.discountName && /* @__PURE__ */ jsxDEV("span", {
				className: "ml-1 text-xs text-muted-foreground",
				children: service.discountName
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 61,
				columnNumber: 32
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 57,
		columnNumber: 5
	}, this);
}
function BookingServiceCard({ service, serviceHref = (slug) => `/services/${slug}`, LinkComponent = PlainLink }) {
	const dual = isDualFormat(service);
	return /* @__PURE__ */ jsxDEV(LinkComponent, {
		href: serviceHref(service.slug),
		className: "group block no-underline",
		children: [
			/* @__PURE__ */ jsxDEV("div", {
				className: "relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary",
				children: [service.imageUrl ? /* @__PURE__ */ jsxDEV("img", {
					src: service.imageUrl,
					alt: service.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 82,
					columnNumber: 11
				}, this) : /* @__PURE__ */ jsxDEV("div", {
					className: "flex h-full w-full items-center justify-center text-sm text-muted-foreground",
					children: service.name
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 89,
					columnNumber: 11
				}, this), /* @__PURE__ */ jsxDEV("span", {
					className: "absolute left-3 top-3 flex flex-wrap gap-1",
					children: dual ? /* @__PURE__ */ jsxDEV("span", {
						className: "rounded-control bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur",
						children: "Zoom or office"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 95,
						columnNumber: 13
					}, this) : service.conferencing ? /* @__PURE__ */ jsxDEV("span", {
						className: "rounded-control bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur",
						children: "Online"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 99,
						columnNumber: 13
					}, this) : null
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 93,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 80,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-3 text-sm font-semibold text-foreground",
				children: service.name
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 105,
				columnNumber: 7
			}, this),
			service.tagLine && /* @__PURE__ */ jsxDEV("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: service.tagLine
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 106,
				columnNumber: 27
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [service.durationLabel ? `${service.durationLabel} · ` : "", /* @__PURE__ */ jsxDEV(BookingPriceLine, { service }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 109,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 107,
				columnNumber: 7
			}, this),
			service.offeredDays.length > 0 && /* @__PURE__ */ jsxDEV("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: service.offeredDays.map((d) => DAY_SHORT[d]).join(", ")
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 112,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 79,
		columnNumber: 5
	}, this);
}
// src/components/pricing-plans/PlanTierCard.tsx
var _jsxFileName = "/workspace/src/components/pricing-plans/PlanTierCard.tsx";
function PlanTierCard({ plan }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "flex min-w-0 flex-col rounded-lg border border-border bg-background p-6",
		children: [
			/* @__PURE__ */ jsxDEV("p", {
				className: "min-w-0 break-words text-lg font-semibold text-foreground",
				children: plan.name
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			plan.description && /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: plan.description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 28
			}, this),
			/* @__PURE__ */ jsxDEV("p", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ jsxDEV("span", {
						className: "text-2xl font-semibold text-foreground",
						children: plan.price
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 9
					}, this),
					plan.billing && /* @__PURE__ */ jsxDEV("span", {
						className: "ml-1 text-sm text-muted-foreground",
						children: plan.billing
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 26
					}, this),
					plan.duration && /* @__PURE__ */ jsxDEV("span", {
						className: "ml-1 text-sm text-muted-foreground",
						children: ["· valid ", plan.duration]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 16,
						columnNumber: 27
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			plan.freeTrialDays != null && /* @__PURE__ */ jsxDEV("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [plan.freeTrialDays, "-day free trial"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 9
			}, this),
			plan.perks.length > 0 && /* @__PURE__ */ jsxDEV("ul", {
				className: "mt-4 space-y-1.5 text-sm text-foreground",
				children: plan.perks.map((perk) => /* @__PURE__ */ jsxDEV("li", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ jsxDEV("span", {
						"aria-hidden": "true",
						className: "text-primary",
						children: "✓"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 15
					}, this), perk]
				}, perk, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("a", {
				href: `/plans/${plan.slug}`,
				className: "mt-4 text-sm font-medium text-primary no-underline hover:underline",
				children: "Details"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "mt-auto pt-5",
				children: /* @__PURE__ */ jsxDEV(SubscribeButton, {
					plan,
					assignedText: null,
					className: "w-full rounded-control bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
// src/pages/book.astro
var book_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Book,
	file: () => $$file,
	url: () => $$url
});
var $$Book = createComponent(async ($$result, $$props, $$slots) => {
	let services = [];
	let plans = [];
	try {
		const [svc, pl] = await Promise.all([fetchServices({ limit: 50 }), fetchPlans()]);
		services = svc.items;
		plans = pl;
	} catch {}
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Book a Session | Win The Job",
		"description": "Book a free consultation or a coaching session with Nick Fennell, or buy a coaching package. Live on Zoom or in person in Fort Lee, NJ."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wtj-section mx-auto max-w-7xl px-6"><h1 class="mb-2 text-2xl font-semibold tracking-tight">Book a session</h1><p class="mb-2 max-w-2xl text-sm text-muted-foreground">Pick a single session below, or buy a coaching package and book each session with a credit. Not sure where to start? Book the free 30-minute consultation.</p><p class="mb-8 text-sm">Please read the <a href="/booking-policy" class="text-primary underline">Booking &amp; Cancellation Policy</a> before you book — cancellation and reschedule windows apply.</p><h2 class="mb-4 text-lg font-semibold tracking-tight">Single sessions</h2>${services.length === 0 ? renderTemplate`<p class="mb-10 text-sm text-muted-foreground">Sessions can't be shown right now. Please try again shortly, or call 551.225.0583.</p>` : renderTemplate`<div class="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">${services.map((s) => renderTemplate`${renderComponent($$result, "BookingServiceCard", BookingServiceCard, { "service": s })}`)}</div>`}<h2 class="mb-4 text-lg font-semibold tracking-tight">Packages</h2>${plans.length === 0 ? renderTemplate`<p class="text-sm text-muted-foreground">Packages can't be shown right now. Please try again shortly, or call 551.225.0583.</p>` : renderTemplate`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">${plans.map((p) => renderTemplate`<div>${renderComponent($$result, "PlanTierCard", PlanTierCard, {
		"client:load": true,
		"plan": p,
		"client:component-hydration": "load",
		"client:component-path": "/workspace/src/components/pricing-plans/PlanTierCard.tsx",
		"client:component-export": "PlanTierCard"
	})}</div>`)}</div>`}</div>` })}`;
}, "/workspace/src/pages/book.astro", void 0);
var $$file = "/workspace/src/pages/book.astro";
var $$url = "/book";
// \0virtual:astro:page:src/pages/book@_@astro
var page = () => book_exports;
export { page };
