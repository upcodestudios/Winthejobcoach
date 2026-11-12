import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { n as PackageCards, t as fetchPackageCards } from "./packageCards_B-2U3acN.mjs";
import { r as getForm, t as useWixForm } from "./useWixForm_B23E4em3.mjs";
import { n as fetchOfferings } from "./offerings_ef43QJzC.mjs";
import { n as pageHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
import { jsxDEV } from "react/jsx-dev-runtime";
// src/components/site/NewsletterSignup.tsx
var _jsxFileName = "/workspace/src/components/site/NewsletterSignup.tsx";
var EMAIL_TARGET = "email_newsletter";
function NewsletterSignup({ formId, initialForm, heading = "Interview tips, in your inbox", subtext = "Occasional notes from Nick on interview prep. Unsubscribe anytime." }) {
	const f = useWixForm(formId, { initialForm });
	const emailError = f.errors[EMAIL_TARGET];
	return /* @__PURE__ */ jsxDEV("section", {
		className: "bg-navy py-16 text-navy-foreground sm:py-20",
		children: /* @__PURE__ */ jsxDEV("div", {
			className: "mx-auto max-w-2xl px-6 text-center",
			children: [
				/* @__PURE__ */ jsxDEV("h2", {
					className: "text-3xl font-semibold sm:text-4xl",
					children: heading
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("p", {
					className: "mt-3 text-navy-foreground/75",
					children: subtext
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "mt-8",
					children: [
						f.outcome ? /* @__PURE__ */ jsxDEV("p", {
							role: "status",
							className: "text-base font-medium",
							children: "You're on the list. Thanks for subscribing."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 13
						}, this) : !f.form ? f.errors["@form"] ? /* @__PURE__ */ jsxDEV("p", {
							className: "text-sm text-navy-foreground/70",
							children: "Signup isn't available right now."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 15
						}, this) : /* @__PURE__ */ jsxDEV("div", {
							"aria-busy": "true",
							className: "mx-auto h-14 w-full max-w-md animate-pulse rounded-control bg-navy-foreground/10"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 15
						}, this) : f.closed ? /* @__PURE__ */ jsxDEV("p", {
							className: "text-sm text-navy-foreground/70",
							children: f.form.disabledMessage || "Signup isn't available right now."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 13
						}, this) : /* @__PURE__ */ jsxDEV("form", {
							noValidate: true,
							onSubmit: (e) => {
								f.submit(e);
							},
							className: "mx-auto flex max-w-md flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-control sm:border sm:border-navy-foreground/15 sm:bg-navy-foreground/5 sm:p-1.5",
							children: [
								/* @__PURE__ */ jsxDEV("label", {
									htmlFor: "newsletter-email",
									className: "sr-only",
									children: "Your email address"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("div", {
									className: "flex min-h-12 flex-1 items-center gap-2 rounded-control border border-navy-foreground/15 bg-navy-foreground/5 px-4 sm:border-0 sm:bg-transparent sm:px-3",
									children: [/* @__PURE__ */ jsxDEV("svg", {
										width: "18",
										height: "18",
										viewBox: "0 0 20 20",
										fill: "none",
										"aria-hidden": "true",
										className: "shrink-0 text-navy-foreground/50",
										children: [/* @__PURE__ */ jsxDEV("path", {
											d: "M3 5.5h14v9H3v-9Z",
											stroke: "currentColor",
											strokeWidth: "1.4",
											strokeLinejoin: "round"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 57,
											columnNumber: 19
										}, this), /* @__PURE__ */ jsxDEV("path", {
											d: "m3.5 6 6.5 5 6.5-5",
											stroke: "currentColor",
											strokeWidth: "1.4",
											strokeLinecap: "round",
											strokeLinejoin: "round"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 58,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 56,
										columnNumber: 17
									}, this), /* @__PURE__ */ jsxDEV("input", {
										id: "newsletter-email",
										type: "email",
										placeholder: "Your email address",
										autoComplete: "email",
										required: true,
										className: "min-h-9 w-full bg-transparent text-base text-navy-foreground placeholder:text-navy-foreground/50 focus:outline-none",
										...f.bind(EMAIL_TARGET)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ jsxDEV("button", {
									type: "submit",
									disabled: f.loading,
									className: "inline-flex h-12 shrink-0 items-center justify-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60",
									children: f.loading ? "Sending…" : "Subscribe"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this),
						emailError && /* @__PURE__ */ jsxDEV("p", {
							id: `err-${EMAIL_TARGET}`,
							role: "alert",
							className: "mt-2 text-sm font-medium text-navy-foreground/80",
							children: "Please enter a valid email address."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 13
						}, this),
						f.errors["@form"] && f.form && /* @__PURE__ */ jsxDEV("p", {
							role: "alert",
							className: "mt-2 text-sm font-medium text-navy-foreground/80",
							children: "Something went wrong. Please try again."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 85,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 5
	}, this);
}
// src/pages/services.astro
var services_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Services,
	file: () => $$file,
	url: () => $$url
});
var $$Services = createComponent(async ($$result, $$props, $$slots) => {
	const NEWSLETTER_FORM_ID = "734aec65-aaa4-4186-81de-86e3cbf7cbed";
	let newsletterForm = null;
	try {
		newsletterForm = await getForm(NEWSLETTER_FORM_ID);
	} catch {}
	const ways = [
		{
			title: "Personalized Interview Coaching",
			body: "One-on-one coaching designed around your career goals, experience and target roles."
		},
		{
			title: "Interview Strategy",
			body: "A customized preparation plan: anticipate challenging questions, research your target company and choose the stories that best show your experience."
		},
		{
			title: "Executive & Leadership Selection Process Coaching",
			body: "Prepare for high-stakes interviews with a focus on leadership presence, strategic thinking and framing past success."
		},
		{
			title: "Post-Interview Review",
			body: "Break down how your interview went, find what to improve and make a plan for the next one."
		},
		{
			title: "Mock Interviews",
			body: "Realistic interview simulations with feedback you can act on."
		},
		{
			title: "Behavioral Interview Preparation",
			body: "Build clear, compelling answers to common behavioral questions and learn how to communicate your experience."
		},
		{
			title: "Technical & Case Interview Prep",
			body: "Practice role-specific technical, analytical and case questions with structured guidance."
		},
		{
			title: "Resume-to-Interview Preparation",
			body: "Prepare for the questions interviewers are likely to ask about your background."
		},
		{
			title: "Communication & Confidence Coaching",
			body: "Strengthen your delivery, storytelling, body language and ability to communicate clearly under pressure."
		}
	];
	const packages = await fetchPackageCards();
	const offerings = await fetchOfferings();
	const bySlug = Object.fromEntries(offerings.map((o) => [o.slug, o]));
	const more = [
		"esl-coaching",
		"linkedin-resume",
		"presentation-skills"
	].map((s) => bySlug[s]).filter(Boolean);
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Interview Coaching Services | Win The Job",
		"description": "Nine ways Nick Fennell helps you prepare for an interview, from a single session to a full coaching package, on Zoom or in Fort Lee, NJ."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "Services",
		"title": "Nine ways to prepare",
		"lede": "Focused support for every stage of the interview journey.",
		"image": pageHeaderPhoto.services
	})}${maybeRenderHead($$result)}<section class="mx-auto max-w-7xl px-6 py-14"><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${ways.map((w, i) => renderTemplate`<div class="rounded-lg border border-border bg-white p-6"><span class="text-sm font-semibold text-primary">${String(i + 1).padStart(2, "0")}</span><h2 class="mt-2 text-lg font-semibold">${w.title}</h2><p class="mt-2 text-sm text-muted-foreground">${w.body}</p></div>`)}</div></section><section class="bg-secondary"><div class="mx-auto max-w-7xl px-6 py-14"><p class="eyebrow text-primary">Coaching packages</p><h2 class="mt-3 text-3xl">Choose the amount of support you need</h2><div class="mt-8">${renderComponent($$result, "PackageCards", PackageCards, {
		"client:visible": true,
		"packages": packages,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/PackageCards.tsx",
		"client:component-export": "default"
	})}</div></div></section><section class="mx-auto max-w-7xl px-6 py-14"><h2 class="text-3xl">Additional coaching</h2><p class="mt-3 max-w-2xl text-muted-foreground">These are shaped around you, so they start with a free consultation.</p><div class="mt-8 grid gap-5 sm:grid-cols-3">${more.map((m) => renderTemplate`<a${addAttribute(`/services/${m.slug}`, "href")} class="rounded-lg border border-border bg-white p-6 no-underline transition-colors hover:border-primary"><span class="text-lg font-semibold text-foreground">${m.name}</span><span class="mt-2 block text-sm text-muted-foreground">${m.tagline}</span><span class="mt-4 block text-sm font-medium text-primary">Learn more →</span></a>`)}</div></section>${renderComponent($$result, "NewsletterSignup", NewsletterSignup, {
		"client:visible": true,
		"formId": NEWSLETTER_FORM_ID,
		"initialForm": newsletterForm ?? void 0,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/NewsletterSignup.tsx",
		"client:component-export": "default"
	})}` })}`;
}, "/workspace/src/pages/services.astro", void 0);
var $$file = "/workspace/src/pages/services.astro";
var $$url = "/services";
// \0virtual:astro:page:src/pages/services@_@astro
var page = () => services_exports;
export { page };
