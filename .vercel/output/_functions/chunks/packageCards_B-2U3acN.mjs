import { t as createImageAsset } from "./image-asset_9P4BGFA9.mjs";
import { n as header_stern_review_960_default, r as header_resume_review_960_default, t as header_deal_handshake_960_default } from "./header-deal-handshake-960_DkcEYTxS.mjs";
import { n as fetchServices } from "./services_CiFd5Tvt.mjs";
import { n as fetchPlans } from "./plans_BWxTbBUq.mjs";
import { n as fetchOfferings } from "./offerings_ef43QJzC.mjs";
import { motion } from "framer-motion";
import { jsxDEV } from "react/jsx-dev-runtime";
// src/components/site/PackageCards.tsx
var _jsxFileName = "/workspace/src/components/site/PackageCards.tsx";
function PackageCards({ packages }) {
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: packages.map((pkg) => /* @__PURE__ */ jsxDEV(Card, { ...pkg }, pkg.slug, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 5
	}, this);
}
function Card({ name, slug, tagline, price, imageSrc, imagePosition = "center" }) {
	return /* @__PURE__ */ jsxDEV(motion.a, {
		href: `/services/${slug}`,
		initial: "rest",
		whileHover: "hover",
		animate: "rest",
		className: "group relative flex h-64 w-full flex-col justify-between overflow-hidden rounded-lg bg-navy p-5 no-underline",
		children: [
			/* @__PURE__ */ jsxDEV(motion.div, {
				variants: {
					rest: {
						scale: 1,
						filter: "saturate(0)"
					},
					hover: {
						scale: 1.08,
						filter: "saturate(1)"
					}
				},
				transition: {
					duration: .5,
					ease: "easeOut"
				},
				className: "absolute inset-0 bg-cover",
				style: {
					backgroundImage: `url("${imageSrc}")`,
					backgroundPosition: imagePosition
				}
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/55 to-navy/25" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV(motion.span, {
				"aria-hidden": "true",
				variants: {
					rest: { rotate: 0 },
					hover: { rotate: -45 }
				},
				transition: { duration: .4 },
				className: "relative z-10 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-navy-foreground/15 text-navy-foreground",
				children: /* @__PURE__ */ jsxDEV("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					children: /* @__PURE__ */ jsxDEV("path", {
						d: "M3 8h10M9 4l4 4-4 4",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ jsxDEV("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsxDEV("h3", {
						className: "flex flex-wrap text-xl font-semibold text-navy-foreground",
						children: name.split(" ").map((word, w) => /* @__PURE__ */ jsxDEV("span", {
							className: "inline-flex whitespace-nowrap",
							children: [word.split("").map((letter, i) => /* @__PURE__ */ jsxDEV(AnimatedLetter, { letter }, i, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 17
							}, this)), w < name.split(" ").length - 1 && /* @__PURE__ */ jsxDEV(AnimatedLetter, { letter: " " }, "space", false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 50
							}, this)]
						}, w, true, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("p", {
						className: "mt-1 text-sm text-navy-foreground/80",
						children: tagline
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ jsxDEV("div", {
						className: "mt-3 flex items-center gap-2 text-sm font-medium text-navy-foreground",
						children: [price && /* @__PURE__ */ jsxDEV("span", { children: price }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 21
						}, this), /* @__PURE__ */ jsxDEV("span", {
							className: "text-navy-foreground/70",
							children: "View details"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 59,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
var letterVariants = { hover: { y: "-50%" } };
function AnimatedLetter({ letter }) {
	return /* @__PURE__ */ jsxDEV("span", {
		className: "inline-block h-[1.4em] overflow-hidden",
		children: /* @__PURE__ */ jsxDEV(motion.span, {
			className: "flex flex-col",
			variants: letterVariants,
			transition: { duration: .35 },
			children: [/* @__PURE__ */ jsxDEV("span", { children: letter === " " ? "\xA0" : letter }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("span", {
				"aria-hidden": "true",
				children: letter === " " ? "\xA0" : letter
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 86,
		columnNumber: 5
	}, this);
}
// src/assets/photos/nick-freedom-tower-960.webp
var nick_freedom_tower_960_default = createImageAsset({
	"src": "/_astro/nick-freedom-tower-960.D8Wg30jW.webp",
	"width": 720,
	"height": 960,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-freedom-tower-960.webp", false);
// src/data/packageCards.ts
var packageSlugs = [
	"interview-ready",
	"interview-accelerator",
	"win-the-job-intensive",
	"executive-interview-coaching"
];
var packageImages = [
	header_resume_review_960_default,
	header_deal_handshake_960_default,
	header_stern_review_960_default,
	nick_freedom_tower_960_default
];
var packagePositions = [
	"center 35%",
	"center 35%",
	"70% 25%",
	"center"
];
async function fetchPackageCards() {
	const prices = {};
	const offerings = await fetchOfferings();
	const bySlug = Object.fromEntries(offerings.map((o) => [o.slug, o]));
	try {
		const [svc, plans] = await Promise.all([fetchServices({ limit: 50 }), fetchPlans()]);
		for (const s of svc.items) prices[s.name] = s.price;
		for (const p of plans) prices[p.name] = p.price;
	} catch {}
	return packageSlugs.map((slug, i) => ({
		name: bySlug[slug]?.name ?? "",
		slug,
		tagline: bySlug[slug]?.tagline ?? "",
		price: prices[bySlug[slug]?.wixName ?? ""] ?? "",
		imageSrc: packageImages[i].src,
		imagePosition: packagePositions[i]
	}));
}
export { PackageCards as n, fetchPackageCards as t };
