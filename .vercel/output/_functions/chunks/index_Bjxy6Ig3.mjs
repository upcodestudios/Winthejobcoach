import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute, x as unescapeHTML } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { a as personSchema, i as organizationSchema } from "./site_BEY61Tp3.mjs";
import { n as CircularTestimonials, t as fetchTestimonials } from "./testimonials_9d8aGuX2.mjs";
import { n as PackageCards, t as fetchPackageCards } from "./packageCards_B-2U3acN.mjs";
import { t as fetchPageContent } from "./pageContent_B3KqaGAv.mjs";
import { t as createImageAsset } from "./image-asset_9P4BGFA9.mjs";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { jsxDEV } from "react/jsx-dev-runtime";
// src/components/site/FeatureSteps.tsx
var _jsxFileName = "/workspace/src/components/site/FeatureSteps.tsx";
function FeatureSteps({ title, steps, autoPlayInterval = 4e3 }) {
	const [active, setActive] = useState(0);
	const [progress, setProgress] = useState(0);
	const [paused, setPaused] = useState(false);
	const count = steps.length;
	useEffect(() => {
		if (paused || count < 2) return;
		const tick = 100;
		const increment = tick / autoPlayInterval * 100;
		const timer = setInterval(() => {
			setProgress((p) => {
				if (p + increment < 100) return p + increment;
				setActive((a) => (a + 1) % count);
				return 0;
			});
		}, tick);
		return () => clearInterval(timer);
	}, [
		paused,
		autoPlayInterval,
		count
	]);
	function select(i) {
		setActive(i);
		setProgress(0);
	}
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [/* @__PURE__ */ jsxDEV("div", { children: [title && /* @__PURE__ */ jsxDEV("h2", {
			className: "text-3xl text-foreground sm:text-4xl",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 19
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: title ? "mt-8 space-y-1" : "space-y-1",
			children: steps.map((item, i) => {
				const isActive = i === active;
				const isDone = i < active;
				return /* @__PURE__ */ jsxDEV(motion.div, {
					initial: false,
					animate: { opacity: isActive ? 1 : .45 },
					transition: { duration: .4 },
					children: /* @__PURE__ */ jsxDEV("button", {
						type: "button",
						onClick: () => select(i),
						className: "flex w-full items-start gap-4 rounded-lg p-2 text-left transition-colors hover:bg-secondary",
						children: [/* @__PURE__ */ jsxDEV("span", {
							className: `relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold ${isActive || isDone ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"}`,
							children: [isDone ? "✓" : i + 1, isActive && /* @__PURE__ */ jsxDEV("svg", {
								className: "absolute inset-0 -rotate-90",
								viewBox: "0 0 32 32",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ jsxDEV("circle", {
									cx: "16",
									cy: "16",
									r: "14",
									fill: "none",
									stroke: "currentColor",
									strokeOpacity: "0.3",
									strokeWidth: "2"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 23
								}, this), /* @__PURE__ */ jsxDEV("circle", {
									cx: "16",
									cy: "16",
									r: "14",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeDasharray: 2 * Math.PI * 14,
									strokeDashoffset: 2 * Math.PI * 14 * (1 - progress / 100),
									style: { transition: "stroke-dashoffset 0.1s linear" }
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 77,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 17
						}, this), /* @__PURE__ */ jsxDEV("span", { children: [/* @__PURE__ */ jsxDEV("span", {
							className: "block text-xl text-foreground",
							children: item.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 19
						}, this), /* @__PURE__ */ jsxDEV("span", {
							className: "mt-1 block text-sm text-muted-foreground",
							children: item.body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 19
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 15
					}, this)
				}, item.step, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 13
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 59,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this), /* @__PURE__ */ jsxDEV("div", {
			className: "lg:sticky lg:top-36",
			children: /* @__PURE__ */ jsxDEV("div", {
				className: "relative h-[260px] overflow-hidden rounded-lg sm:h-[340px] lg:h-[420px]",
				children: /* @__PURE__ */ jsxDEV(AnimatePresence, {
					mode: "wait",
					children: steps.map((item, i) => i === active && /* @__PURE__ */ jsxDEV(motion.div, {
						className: "absolute inset-0",
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -24
						},
						transition: {
							duration: .4,
							ease: "easeInOut"
						},
						children: item.imageSrc ? /* @__PURE__ */ jsxDEV("img", {
							src: item.imageSrc,
							alt: item.imageAlt ?? item.title,
							className: "h-full w-full object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 23
						}, this) : /* @__PURE__ */ jsxDEV("div", {
							className: "flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-border bg-secondary px-6 text-center text-muted-foreground",
							children: [/* @__PURE__ */ jsxDEV("span", {
								className: "text-sm font-semibold uppercase tracking-wide",
								children: ["Image placeholder — step ", i + 1]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 25
							}, this), /* @__PURE__ */ jsxDEV("span", {
								className: "text-xs",
								children: "Recommended 1600 × 1200px (4:3), landscape, under ~300KB"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 23
						}, this)
					}, item.step, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 19
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 52,
		columnNumber: 5
	}, this);
}
// src/assets/photos/nick-hero-main-480.webp
var nick_hero_main_480_default = createImageAsset({
	"src": "/_astro/nick-hero-main-480.Deu_vbbO.webp",
	"width": 480,
	"height": 268,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-hero-main-480.webp", false);
// src/assets/photos/nick-hero-main-960.webp
var nick_hero_main_960_default = createImageAsset({
	"src": "/_astro/nick-hero-main-960.-mzusdzZ.webp",
	"width": 960,
	"height": 536,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-hero-main-960.webp", false);
// src/assets/photos/nick-hero-main-1376.webp
var nick_hero_main_1376_default = createImageAsset({
	"src": "/_astro/nick-hero-main-1376.D6KokVqV.webp",
	"width": 1376,
	"height": 768,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-hero-main-1376.webp", false);
// src/assets/photos/nick-on-stage-480.webp
var nick_on_stage_480_default = createImageAsset({
	"src": "/_astro/nick-on-stage-480.Lh3gd_Ru.webp",
	"width": 294,
	"height": 480,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-on-stage-480.webp", false);
// src/assets/photos/nick-on-stage-960.webp
var nick_on_stage_960_default = createImageAsset({
	"src": "/_astro/nick-on-stage-960.DGPszF4m.webp",
	"width": 587,
	"height": 960,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-on-stage-960.webp", false);
// src/assets/photos/nick-conference-480.webp
var nick_conference_480_default = createImageAsset({
	"src": "/_astro/nick-conference-480.C4tjjoJI.webp",
	"width": 480,
	"height": 430,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-conference-480.webp", false);
// src/assets/photos/nick-conference-960.webp
var nick_conference_960_default = createImageAsset({
	"src": "/_astro/nick-conference-960.110w_bmX.webp",
	"width": 960,
	"height": 859,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-conference-960.webp", false);
// src/assets/photos/feature-step-1-interviews-create-stress-1200.webp
var feature_step_1_interviews_create_stress_1200_default = createImageAsset({
	"src": "/_astro/feature-step-1-interviews-create-stress-1200.eyZvJat3.webp",
	"width": 1200,
	"height": 896,
	"format": "webp"
}, "/workspace/src/assets/photos/feature-step-1-interviews-create-stress-1200.webp", false);
// src/assets/photos/feature-step-2-prepare-rehearse-perform-1200.webp
var feature_step_2_prepare_rehearse_perform_1200_default = createImageAsset({
	"src": "/_astro/feature-step-2-prepare-rehearse-perform-1200.zuIIMroX.webp",
	"width": 1200,
	"height": 896,
	"format": "webp"
}, "/workspace/src/assets/photos/feature-step-2-prepare-rehearse-perform-1200.webp", false);
// src/assets/photos/feature-step-3-strategy-built-around-you-1200.webp
var feature_step_3_strategy_built_around_you_1200_default = createImageAsset({
	"src": "/_astro/feature-step-3-strategy-built-around-you-1200.Dbz2G23x.webp",
	"width": 1200,
	"height": 896,
	"format": "webp"
}, "/workspace/src/assets/photos/feature-step-3-strategy-built-around-you-1200.webp", false);
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const packages = await fetchPackageCards();
	const method = [
		{
			title: "Prepare",
			body: "Research the role and company, build your key talking points and learn how the hiring process works.",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`
		},
		{
			title: "Practice",
			body: "Rehearse the questions you're likely to face, out loud, and get feedback on every answer.",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`
		},
		{
			title: "Perform",
			body: "Walk in knowing what you want to say, how to say it and how to stay in control of your nerves.",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V3"/></svg>`
		}
	];
	const advantageImages = [
		feature_step_1_interviews_create_stress_1200_default,
		feature_step_2_prepare_rehearse_perform_1200_default,
		feature_step_3_strategy_built_around_you_1200_default
	];
	const content = await fetchPageContent("home", {
		heroHeading: "Interview Coaching — Walk In Prepared, Walk Out With an Offer",
		heroLede: "We help you turn your experience into compelling interview answers, control stress, practice, and walk into every interview prepared to perform at your best.",
		advantages: [
			{
				title: "Interviews create stress",
				body: "Even highly qualified candidates feel it, because companies often don't have a formal process, or don't explain it well."
			},
			{
				title: "Prepare. Rehearse. Perform.",
				body: "Nick helps you get ready for the questions you're likely to face, deliver compelling answers with confidence and walk in knowing you've rehearsed."
			},
			{
				title: "A strategy built around you",
				body: "Whether it's your first professional interview, a career change, a leadership role or a final round, you build a plan for your role and what sets you apart."
			}
		],
		confidenceBody: "Meet Nick live on Zoom, in person at an agreed upon location, or in an office setting at the Regus Bridge Plaza, Fort Lee, NJ. Evenings and weekends, with questions answered by phone and email between coaching sessions.",
		closingCtaHeading: "Get Interview Ready and Win The Job"
	});
	const advantages = content.advantages.map((a, i) => ({
		...a,
		image: advantageImages[Math.min(i, advantageImages.length - 1)]
	}));
	const testimonials = await fetchTestimonials();
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Win The Job | Interview Coaching — Walk In Prepared, Walk Out With an Offer",
		"description": "Interview coaching for every stage of your career, from your first interview to your next leadership role. Live on Zoom or in person in Fort Lee, NJ.",
		"jsonLd": [organizationSchema(), personSchema()],
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero-photo relative grid min-h-[560px] items-center bg-cover sm:min-h-[640px] lg:min-h-[82vh]"${addAttribute({
		"--hero-480": `url("${nick_hero_main_480_default.src}")`,
		"--hero-960": `url("${nick_hero_main_960_default.src}")`,
		"--hero-1600": `url("${nick_hero_main_1376_default.src}")`
	}, "style")} data-astro-cid-lcdefpme><div class="mx-auto w-full max-w-7xl px-6 py-14 sm:py-20" data-astro-cid-lcdefpme><div class="w-full max-w-[560px]" data-astro-cid-lcdefpme><div class="h-1 w-16 rounded-full bg-primary" aria-hidden="true" data-astro-cid-lcdefpme></div><h1 class="mt-5 text-[2.125rem] font-bold text-navy-foreground sm:text-[2.5rem]" data-astro-cid-lcdefpme>${content.heroHeading}</h1><blockquote class="wtj-lede mt-5 border-l-2 border-navy-foreground/40 pl-4 text-navy-foreground/85" data-astro-cid-lcdefpme>${content.heroLede}</blockquote><div class="mt-8 flex flex-col gap-3 sm:flex-row" data-astro-cid-lcdefpme><a href="/book" class="inline-flex h-[52px] items-center justify-center rounded-control bg-primary px-7 text-base font-medium text-primary-foreground no-underline transition-transform hover:-translate-y-0.5" data-astro-cid-lcdefpme>Book Now</a><a href="/services/free-consultation" class="inline-flex h-[52px] items-center justify-center rounded-control border border-navy-foreground/50 px-7 text-base font-medium text-navy-foreground no-underline hover:bg-navy-foreground/10" data-astro-cid-lcdefpme>Book a free consultation</a></div><p class="eyebrow mt-8 text-navy-foreground/60" data-astro-cid-lcdefpme>Learn and be coached on the</p><p class="mt-2 text-sm font-semibold text-navy-foreground sm:whitespace-nowrap sm:text-[1.75rem]" data-astro-cid-lcdefpme>Prepare <span class="text-navy-foreground/40" data-astro-cid-lcdefpme>→</span> Practice <span class="text-navy-foreground/40" data-astro-cid-lcdefpme>→</span> Perform <span class="text-navy-foreground/40" data-astro-cid-lcdefpme>→</span> <span class="text-primary" data-astro-cid-lcdefpme>Win The Job</span> Methodology</p></div></div></section><section class="wtj-section mx-auto max-w-7xl px-6" data-astro-cid-lcdefpme>${renderComponent($$result, "FeatureSteps", FeatureSteps, {
		"client:visible": true,
		"title": "You can't predict the process. You can prepare for the surprise.",
		"steps": advantages.map((a, i) => ({
			step: String(i + 1).padStart(2, "0"),
			title: a.title,
			body: a.body,
			imageSrc: a.image.src,
			imageAlt: a.title
		})),
		"data-astro-cid-lcdefpme": true,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/FeatureSteps.tsx",
		"client:component-export": "default"
	})}</section><section class="wtj-section mx-auto max-w-4xl px-6" data-astro-cid-lcdefpme><blockquote class="rounded-lg bg-navy px-8 py-10 text-center text-navy-foreground sm:px-14 sm:py-12" data-astro-cid-lcdefpme><p class="text-xl font-medium leading-relaxed sm:text-2xl" data-astro-cid-lcdefpme>&ldquo;The questions don't really matter&mdash;it's our preparation that really counts.&rdquo;</p><footer class="mt-5 text-sm font-semibold uppercase tracking-wide text-navy-foreground/70" data-astro-cid-lcdefpme>Gary Burnison &bull; CEO, Korn Ferry</footer></blockquote></section><section class="wtj-section bg-secondary" data-astro-cid-lcdefpme><div class="mx-auto max-w-7xl px-6" data-astro-cid-lcdefpme><p class="eyebrow text-primary" data-astro-cid-lcdefpme>The Win The Job Methodology</p><h2 class="mt-3 max-w-2xl text-3xl text-foreground sm:text-4xl" data-astro-cid-lcdefpme>Prepare. Practice. Perform.</h2><p class="mt-4 max-w-2xl text-muted-foreground" data-astro-cid-lcdefpme>A practical path from research to rehearsal to interview-day confidence.</p><div class="mt-10 grid gap-4 sm:grid-cols-3" data-astro-cid-lcdefpme>${method.map((item, i) => renderTemplate`<div${addAttribute(`rounded-lg p-7 ${i === 1 ? "bg-navy text-navy-foreground" : "bg-background"}`, "class")} data-astro-cid-lcdefpme><span${addAttribute(`inline-flex h-9 w-9 items-center justify-center rounded-full ${i === 1 ? "bg-navy-foreground/15 text-accent" : "bg-primary/10 text-primary"}`, "class")} data-astro-cid-lcdefpme>${unescapeHTML(item.icon)}</span><h3 class="mt-2 text-xl" data-astro-cid-lcdefpme>${item.title}</h3><p${addAttribute(`mt-2 text-sm ${i === 1 ? "text-navy-foreground/75" : "text-muted-foreground"}`, "class")} data-astro-cid-lcdefpme>${item.body}</p></div>`)}</div></div></section><section class="wtj-section mx-auto max-w-7xl px-6" data-astro-cid-lcdefpme><p class="eyebrow text-primary" data-astro-cid-lcdefpme>Coaching Packages</p><h2 class="mt-3 max-w-2xl text-3xl text-foreground sm:whitespace-nowrap sm:text-4xl" data-astro-cid-lcdefpme>Choose the support that fits your interview</h2><div class="mt-10" data-astro-cid-lcdefpme>${renderComponent($$result, "PackageCards", PackageCards, {
		"client:visible": true,
		"packages": packages,
		"data-astro-cid-lcdefpme": true,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/PackageCards.tsx",
		"client:component-export": "default"
	})}</div></section><section class="wtj-section mx-auto max-w-7xl px-6" data-astro-cid-lcdefpme><div class="grid items-center gap-16 lg:grid-cols-2" data-astro-cid-lcdefpme><div class="order-2 lg:order-1" data-astro-cid-lcdefpme><div class="relative mx-auto aspect-[10/13] max-w-md" data-astro-cid-lcdefpme><div class="absolute left-0 top-0 z-10 w-3/5 overflow-hidden rounded-lg shadow-lg aspect-[4/5]" data-astro-cid-lcdefpme><img${addAttribute(nick_on_stage_960_default.src, "src")}${addAttribute(`${nick_on_stage_480_default.src} 480w, ${nick_on_stage_960_default.src} 960w`, "srcset")} sizes="(min-width: 1024px) 270px, 54vw"${addAttribute(nick_on_stage_960_default.width, "width")}${addAttribute(nick_on_stage_960_default.height, "height")} alt="Nick Fennell presenting" class="h-full w-full object-cover object-top" loading="lazy" data-astro-cid-lcdefpme></div><div class="absolute left-[30%] top-[40%] z-20 w-3/5 overflow-hidden rounded-lg border-4 border-background shadow-xl aspect-[4/5]" data-astro-cid-lcdefpme><img${addAttribute(nick_conference_960_default.src, "src")}${addAttribute(`${nick_conference_480_default.src} 480w, ${nick_conference_960_default.src} 960w`, "srcset")} sizes="(min-width: 1024px) 270px, 54vw"${addAttribute(nick_conference_960_default.width, "width")}${addAttribute(nick_conference_960_default.height, "height")} alt="Nick Fennell with a client" class="h-full w-full object-cover" loading="lazy" data-astro-cid-lcdefpme></div></div><div class="mx-auto mt-5 max-w-md text-left" data-astro-cid-lcdefpme><p class="text-xl font-semibold text-foreground sm:text-2xl" data-astro-cid-lcdefpme>Nick Fennell</p><p class="text-sm font-medium uppercase tracking-wide text-muted-foreground" data-astro-cid-lcdefpme>Founder, Win The Job</p></div></div><div class="order-1 lg:order-2" data-astro-cid-lcdefpme><p class="eyebrow text-primary" data-astro-cid-lcdefpme>Coaching that's personal</p><h2 class="mt-3 text-3xl text-foreground sm:text-4xl" data-astro-cid-lcdefpme>One-on-one, in person or live on Zoom</h2><p class="wtj-lede mt-4 max-w-md text-muted-foreground" data-astro-cid-lcdefpme>${content.confidenceBody}</p><div class="mt-6 flex flex-wrap gap-3" data-astro-cid-lcdefpme><a href="/about" class="inline-flex h-12 items-center justify-center rounded-control border border-border px-6 text-sm font-semibold text-foreground no-underline hover:bg-secondary" data-astro-cid-lcdefpme>Meet Nick</a><a href="/book" class="inline-flex h-12 items-center justify-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground no-underline transition-transform hover:-translate-y-0.5" data-astro-cid-lcdefpme>Book Now</a></div></div></div></section>${testimonials.length > 0 && renderTemplate`<section class="mx-auto max-w-4xl px-6 pb-16 sm:pb-24" data-astro-cid-lcdefpme>${renderComponent($$result, "CircularTestimonials", CircularTestimonials, {
		"client:visible": true,
		"testimonials": testimonials,
		"data-astro-cid-lcdefpme": true,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/CircularTestimonials.tsx",
		"client:component-export": "default"
	})}<p class="mt-4 text-center text-sm" data-astro-cid-lcdefpme><a href="/about#client-perspectives" class="font-medium text-logo-blue underline" data-astro-cid-lcdefpme>More client perspectives</a></p></section>`}<section class="bg-navy text-navy-foreground" data-astro-cid-lcdefpme><div class="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between" data-astro-cid-lcdefpme><h2 class="max-w-lg text-2xl sm:text-3xl" data-astro-cid-lcdefpme>${content.closingCtaHeading}</h2><a href="/services/free-consultation" class="inline-flex h-[52px] shrink-0 items-center justify-center rounded-control bg-primary px-7 text-base font-medium text-primary-foreground no-underline transition-transform hover:-translate-y-0.5" data-astro-cid-lcdefpme>Book a free consultation</a></div></section>` })}`;
}, "/workspace/src/pages/index.astro", void 0);
var $$file = "/workspace/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
