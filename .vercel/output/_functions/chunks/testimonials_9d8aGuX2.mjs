import { n as queryItems } from "./items_ByegMAt_.mjs";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { jsxDEV } from "react/jsx-dev-runtime";
// src/components/site/CircularTestimonials.tsx
var _jsxFileName = "/workspace/src/components/site/CircularTestimonials.tsx";
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}
function CircularTestimonials({ testimonials, autoplayMs = 6e3 }) {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);
	const timerRef = useRef(null);
	const count = testimonials.length;
	const active = useMemo(() => testimonials[index], [testimonials, index]);
	const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
	const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
	useEffect(() => {
		if (count < 2 || paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		timerRef.current = setInterval(next, autoplayMs);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [
		count,
		paused,
		autoplayMs,
		next
	]);
	useEffect(() => {
		if (count < 2) return;
		const onKey = (e) => {
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		count,
		prev,
		next
	]);
	if (count === 0) return null;
	const byline = [active.title, active.company].filter(Boolean).join(", ");
	return /* @__PURE__ */ jsxDEV("div", {
		className: "rounded-lg bg-navy p-8 text-navy-foreground sm:p-10",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [/* @__PURE__ */ jsxDEV("div", {
			className: "flex items-start gap-5",
			children: [/* @__PURE__ */ jsxDEV("div", {
				className: "hidden shrink-0 sm:block",
				children: active.photo ? /* @__PURE__ */ jsxDEV("img", {
					src: active.photo,
					alt: active.name,
					className: "h-16 w-16 rounded-full object-cover"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 13
				}, this) : /* @__PURE__ */ jsxDEV("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-full bg-navy-foreground/10 text-lg font-semibold",
					children: initials(active.name)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ jsxDEV(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ jsxDEV(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -12
						},
						transition: {
							duration: .3,
							ease: "easeInOut"
						},
						children: [/* @__PURE__ */ jsxDEV("blockquote", {
							className: "text-xl leading-relaxed sm:text-2xl",
							children: [
								"“",
								active.quote.split(" ").map((word, i) => /* @__PURE__ */ jsxDEV(motion.span, {
									initial: {
										filter: "blur(8px)",
										opacity: 0,
										y: 4
									},
									animate: {
										filter: "blur(0px)",
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .2,
										ease: "easeInOut",
										delay: .02 * i
									},
									className: "inline-block",
									children: [word, "\xA0"]
								}, i, true, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 19
								}, this)),
								"”"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 15
						}, this), /* @__PURE__ */ jsxDEV("p", {
							className: "mt-5 text-sm",
							children: [/* @__PURE__ */ jsxDEV("span", {
								className: "font-semibold",
								children: active.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 17
							}, this), byline && /* @__PURE__ */ jsxDEV("span", {
								className: "text-navy-foreground/70",
								children: [" · ", byline]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 28
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 15
						}, this)]
					}, index, true, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 72,
			columnNumber: 7
		}, this), count > 1 && /* @__PURE__ */ jsxDEV("div", {
			className: "mt-7 flex items-center gap-3",
			children: [
				/* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: prev,
					"aria-label": "Previous testimonial",
					className: "flex h-11 w-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
					children: /* @__PURE__ */ jsxDEV("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 16 16",
						fill: "none",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsxDEV("path", {
							d: "M13 8H3M7 4L3 8l4 4",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("button", {
					type: "button",
					onClick: next,
					"aria-label": "Next testimonial",
					className: "flex h-11 w-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
					children: /* @__PURE__ */ jsxDEV("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 16 16",
						fill: "none",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsxDEV("path", {
							d: "M3 8h10M9 4l4 4-4 4",
							stroke: "currentColor",
							strokeWidth: "1.6",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 133,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 127,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ jsxDEV("div", {
					className: "ml-1 flex gap-1.5",
					"aria-hidden": "true",
					children: testimonials.map((_, i) => /* @__PURE__ */ jsxDEV("span", { className: `h-1.5 w-1.5 rounded-full ${i === index ? "bg-primary" : "bg-navy-foreground/25"}` }, i, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 137,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 5
	}, this);
}
// src/wix/cms/testimonials.ts
var str = (v) => typeof v === "string" ? v : "";
async function fetchTestimonials() {
	try {
		return (await queryItems("Testimonials", {
			sort: [{
				field: "order",
				direction: "asc"
			}],
			limit: 20
		})).items.map((i) => ({
			id: i._id,
			name: str(i.name),
			title: str(i.title),
			company: str(i.company),
			quote: str(i.quote),
			longQuote: str(i.longQuote),
			photo: str(i.photo),
			featured: i.featured === true,
			order: typeof i.order === "number" ? i.order : 0
		}));
	} catch {
		return [];
	}
}
export { CircularTestimonials as n, fetchTestimonials as t };
