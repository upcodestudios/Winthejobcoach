import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as Fragment, d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_DBXwFo01.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { n as CircularTestimonials, t as fetchTestimonials } from "./testimonials_9d8aGuX2.mjs";
import { t as $$CtaBand } from "./CtaBand_8M2IPQRs.mjs";
import { t as SubscribeButton } from "./SubscribeButton_dIdnuiCJ.mjs";
import { t as imgAttrs } from "./media_CxrwP6gK.mjs";
import { n as fetchPlans, t as fetchPlanBySlug } from "./plans_BWxTbBUq.mjs";
import { t as fetchOfferingBySlug } from "./offerings_ef43QJzC.mjs";
import { t as offeringHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
import { o as serviceSchema } from "./site_BEY61Tp3.mjs";
import { n as fetchServices, t as fetchServiceBySlug } from "./services_CiFd5Tvt.mjs";
import { WIX_APPS } from "@wix/essentials";
import { jsxDEV } from "react/jsx-dev-runtime";
import { SEO } from "@wix/seo/components";
import { loadSEOTagsServiceConfig } from "@wix/seo/services";
import { seoTags } from "@wix/seo";
// src/components/site/PolicyLine.astro
createAstro("https://astro.build");
var $$PolicyLine = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PolicyLine;
	const { free = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<p class="text-sm text-muted-foreground">${free ? "Book at least 4 hours ahead. You can cancel or reschedule online up to 2 hours before your consultation." : "Book at least 48 hours ahead. You can cancel or reschedule online up to 24 hours before your session (48 hours for in-office mock interviews) for a full refund or a new time."}<a href="/booking-policy" class="font-medium text-primary underline">Read the Booking &amp; Cancellation Policy</a>.</p>`;
}, "/workspace/src/components/site/PolicyLine.astro", void 0);
// src/components/pricing-plans/PlanPitch.tsx
var _jsxFileName = "/workspace/src/components/pricing-plans/PlanPitch.tsx";
function PlanPitch({ plan }) {
	return /* @__PURE__ */ jsxDEV("div", { children: [
		plan.imageUrl && /* @__PURE__ */ jsxDEV("div", {
			className: "mb-6 aspect-[16/9] max-h-[40vh] overflow-hidden rounded-xl bg-secondary",
			children: /* @__PURE__ */ jsxDEV("img", {
				...imgAttrs(plan.imageUrl, "(min-width: 768px) 672px, 100vw", .5625),
				alt: plan.name,
				className: "h-full w-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ jsxDEV("p", { children: [
			/* @__PURE__ */ jsxDEV("span", {
				className: "text-3xl font-semibold text-foreground",
				children: plan.price
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this),
			plan.billing && /* @__PURE__ */ jsxDEV("span", {
				className: "ml-2 text-base text-muted-foreground",
				children: plan.billing
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 26
			}, this),
			plan.duration && /* @__PURE__ */ jsxDEV("span", {
				className: "ml-2 text-base text-muted-foreground",
				children: ["· valid ", plan.duration]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 27
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this),
		plan.freeTrialDays != null && /* @__PURE__ */ jsxDEV("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: [plan.freeTrialDays, "-day free trial"]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ jsxDEV("div", {
			className: "mt-6",
			children: /* @__PURE__ */ jsxDEV(SubscribeButton, {
				plan,
				className: "rounded-control bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50",
				children: plan.buyable && !plan.free ? `Buy Package · ${plan.price}` : void 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 7
		}, this),
		plan.perks.length > 0 && /* @__PURE__ */ jsxDEV("ul", {
			className: "mt-8 space-y-2 text-sm text-foreground",
			children: plan.perks.map((perk) => /* @__PURE__ */ jsxDEV("li", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsxDEV("span", {
					"aria-hidden": "true",
					className: "text-primary",
					children: "✓"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 15
				}, this), perk]
			}, perk, true, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 13
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 9
		}, this),
		plan.termsAndConditions && /* @__PURE__ */ jsxDEV("p", {
			className: "mt-8 whitespace-pre-wrap text-xs text-muted-foreground",
			children: plan.termsAndConditions
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 9
		}, this),
		/* @__PURE__ */ jsxDEV("p", {
			className: "mt-6 text-xs text-muted-foreground",
			children: [
				"Already bought this package? Your sessions and credits left are on your",
				" ",
				/* @__PURE__ */ jsxDEV("a", {
					href: "/account",
					className: "underline",
					children: "account page"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				". See the",
				" ",
				/* @__PURE__ */ jsxDEV("a", {
					href: "/booking-policy",
					className: "underline",
					children: "booking & cancellation policy"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				" before you buy."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
// src/components/site/OfferingView.astro
createAstro("https://astro.build");
var $$OfferingView = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OfferingView;
	const { offering, service, plan, testimonials } = Astro.props;
	const freeConsultation = offering.slug === "free-consultation" ? null : await fetchOfferingBySlug("free-consultation");
	const hero = service ? [service.durationLabel, service.free ? "Free" : service.price].filter(Boolean).join(" · ") : plan ? [plan.price, plan.duration ? `valid ${plan.duration}` : ""].filter(Boolean).join(" · ") : "";
	return renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "Interview coaching",
		"title": offering.name,
		"lede": offering.tagline,
		"image": offeringHeaderPhoto[offering.slug]
	}, { "default": ($$result) => renderTemplate`${hero && renderTemplate`${maybeRenderHead($$result)}<p class="mt-6 inline-block rounded-control bg-navy-foreground/10 px-4 py-2 text-sm font-semibold text-navy-foreground">${hero}</p>`}` })}<div class="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr]"><div><p class="text-lg leading-relaxed text-foreground">${offering.intro}</p><h2 class="mt-10 text-2xl">What's included</h2><ul class="mt-4 space-y-3">${offering.includes.map((item) => renderTemplate`<li class="flex gap-3 text-base"><span aria-hidden="true" class="mt-1 text-primary">✓</span><span>${item}</span></li>`)}</ul><h2 class="mt-10 text-2xl">Best for</h2><p class="mt-3 text-base text-muted-foreground">${offering.bestFor}</p><h2 class="mt-10 text-2xl">How we meet</h2><p class="mt-3 text-base text-muted-foreground">${offering.format}</p></div><aside class="lg:sticky lg:top-28 lg:self-start"><div class="rounded-lg bg-secondary p-6">${service && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-xl">Book your session</h2><div class="mt-3">${renderComponent($$result, "PolicyLine", $$PolicyLine, { "free": service.free })}</div><div class="mt-6">${renderComponent($$result, "BookingSurface", null, {
		"client:only": "react",
		"service": service,
		"client:component-hydration": "only",
		"client:component-path": "/workspace/src/components/bookings/BookingSurface.tsx",
		"client:component-export": "default"
	})}</div>` })}`}${plan && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-xl">Buy this package</h2><div class="mt-3">${renderComponent($$result, "PolicyLine", $$PolicyLine, {})}</div><p class="mt-3 text-sm text-muted-foreground">After you buy, you book each session from the Book page or your account, and it uses one of your credits.</p><div class="mt-6">${renderComponent($$result, "PlanPitch", PlanPitch, {
		"client:load": true,
		"plan": plan,
		"client:component-hydration": "load",
		"client:component-path": "/workspace/src/components/pricing-plans/PlanPitch.tsx",
		"client:component-export": "default"
	})}</div>` })}`}${!service && !plan && offering.slug === "mock-interviews" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-xl">How to get a mock interview</h2><p class="mt-3 text-base text-muted-foreground">Mock interviews come with Win The Job Intensive and Executive Interview Coaching. Once you've bought one of those packages, book your mock interview from the Book page or your account.</p><div class="mt-5 flex flex-col gap-3"><a href="/services/win-the-job-intensive" class="inline-flex h-12 items-center justify-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/90">See Win The Job Intensive</a><a href="/book" class="inline-flex h-12 items-center justify-center rounded-control border border-border px-6 text-sm font-semibold text-foreground no-underline hover:bg-secondary">Book with a package credit</a></div>` })}`}${!service && !plan && offering.slug !== "mock-interviews" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h2 class="text-xl">Start with a conversation</h2><p class="mt-3 text-base text-muted-foreground">This coaching is shaped around you, so Nick starts with a free 30-minute Zoom consultation to talk about what you need.</p><div class="mt-3">${renderComponent($$result, "PolicyLine", $$PolicyLine, { "free": true })}</div><a href="/services/free-consultation" class="mt-5 inline-flex h-12 w-full items-center justify-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/90">Book a free consultation</a>` })}`}</div></aside></div>${testimonials.length > 0 && renderTemplate`<section class="mx-auto max-w-4xl px-6 pb-14 text-center"><h2 class="text-3xl text-foreground sm:text-4xl">Hear From Our Clients</h2><div class="mt-6">${renderComponent($$result, "CircularTestimonials", CircularTestimonials, {
		"client:visible": true,
		"testimonials": testimonials,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/CircularTestimonials.tsx",
		"client:component-export": "default"
	})}</div></section>`}${freeConsultation && renderTemplate`<section class="wtj-section bg-secondary"><div class="mx-auto max-w-7xl px-6"><p class="eyebrow text-primary">Not sure where to start?</p><h2 class="mt-3 text-3xl text-foreground sm:text-4xl">Next step</h2><a${addAttribute(`/services/${freeConsultation.slug}`, "href")} class="mt-8 flex flex-col items-start gap-6 rounded-lg bg-background p-8 no-underline transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"><div class="flex items-start gap-4"><span class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M8 3v4M16 3v4M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg></span><div><p class="text-xl text-foreground">${freeConsultation.name}</p><p class="mt-1 text-sm text-muted-foreground">${freeConsultation.tagline}</p></div></div><span class="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground sm:w-auto">Learn more →</span></a></div></section>`}${renderComponent($$result, "CtaBand", $$CtaBand, {
		"heading": "Not sure which fits?",
		"body": "Book a free 30-minute Zoom consultation and talk it through with Nick."
	})}`;
}, "/workspace/src/components/site/OfferingView.astro", void 0);
// src/pages/services/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url,
	wixMetadata: () => wixMetadata
});
createAstro("https://astro.build");
var wixMetadata = {
	appDefId: WIX_APPS.bookings.id,
	pageIdentifier: WIX_APPS.bookings.servicePageMetadata.pageIdentifier,
	identifiers: { slug: WIX_APPS.bookings.servicePageMetadata.identifiers.slug }
};
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const slug = Astro.params.slug;
	const offering = await fetchOfferingBySlug(slug);
	let offeringService = null;
	let offeringPlan = null;
	let testimonials = [];
	if (offering) try {
		if (offering.kind === "service") {
			const hit = (await fetchServices({ limit: 50 })).items.find((s) => s.name === offering.wixName);
			offeringService = hit ? await fetchServiceBySlug(hit.slug) : null;
		} else if (offering.kind === "plan") {
			const hit = (await fetchPlans()).find((p) => p.name === offering.wixName);
			offeringPlan = hit ? await fetchPlanBySlug(hit.slug) : null;
		}
		testimonials = await fetchTestimonials();
	} catch {}
	const forwardedUrl = Astro.request.headers.get("x-wix-forwarded-url");
	const pageUrl = forwardedUrl && URL.canParse(forwardedUrl) && /^https?:$/.test(new URL(forwardedUrl).protocol) ? forwardedUrl : Astro.url.href;
	let service = null;
	let seoTagsServiceConfig = null;
	if (!offering) try {
		[service, seoTagsServiceConfig] = await Promise.all([fetchServiceBySlug(slug), loadSEOTagsServiceConfig({
			pageUrl,
			itemType: seoTags.ItemType.BOOKINGS_SERVICE,
			itemData: { slug }
		}).catch(() => null)]);
	} catch {}
	if (!offering && !service) return new Response(null, { status: 404 });
	return renderTemplate`${offering && renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": offering.name.includes("Win The Job") ? `${offering.name} | Interview Coaching` : `${offering.name} | Win The Job`,
		"description": offering.metaDescription,
		"jsonLd": [serviceSchema({
			slug: offering.slug,
			name: offering.name,
			description: offering.metaDescription
		})]
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "OfferingView", $$OfferingView, {
		"offering": offering,
		"service": offeringService,
		"plan": offeringPlan,
		"testimonials": testimonials
	})}` })}`}${!offering && service && renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": service.name }, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="grid gap-10 md:grid-cols-2"><div>${service.imageUrl && renderTemplate`<div class="aspect-[4/3] overflow-hidden rounded-xl bg-secondary"><img${addAttribute(service.imageUrl, "src")}${addAttribute(service.name, "alt")} class="h-full w-full object-cover"></div>`}<h1 class="mt-5 text-2xl font-semibold tracking-tight">${service.name}</h1>${service.tagLine && renderTemplate`<p class="mt-1 text-muted-foreground">${service.tagLine}</p>`}<p class="mt-2 text-sm text-muted-foreground">${service.durationLabel ? `${service.durationLabel} · ` : ""}${service.rateType === "NO_FEE" && service.hasPricingPlans ? renderTemplate`<span class="text-foreground">Plan credit only</span>` : service.price && renderTemplate`<span class="text-foreground">${service.priceFrom ? "From " : ""}${service.price}</span>`}${service.basePrice && renderTemplate`<s class="ml-1">${service.basePrice}</s>`}${service.discountName && renderTemplate`<span class="ml-1 text-xs">${service.discountName}</span>`}</p>${service.locations.some((l) => l.name) && renderTemplate`<p class="mt-1 text-sm text-muted-foreground">${service.locations.map((l) => l.name).filter(Boolean).join(" · ")}</p>`}${service.description && renderTemplate`<p class="mt-4 text-sm leading-relaxed text-muted-foreground">${service.description}</p>`}</div><div>${renderComponent($$result, "BookingSurface", null, {
			"client:only": "react",
			"service": service,
			"client:component-hydration": "only",
			"client:component-path": "/workspace/src/components/bookings/BookingSurface.tsx",
			"client:component-export": "default"
		})}</div></div>`,
		"seo-tags": ($$result) => renderTemplate`${seoTagsServiceConfig && renderTemplate`${renderComponent($$result, "SEO.Tags", SEO.Tags, {
			"seoTagsServiceConfig": seoTagsServiceConfig,
			"slot": "seo-tags"
		})}`}`
	})}`}`;
}, "/workspace/src/pages/services/[slug].astro", void 0);
var $$file = "/workspace/src/pages/services/[slug].astro";
var $$url = "/services/[slug]";
// \0virtual:astro:page:src/pages/services/[slug]@_@astro
var page = () => _slug__exports;
export { page };
