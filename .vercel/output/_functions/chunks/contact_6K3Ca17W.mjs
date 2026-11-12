import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { i as organizationSchema, r as SITE_ORIGIN } from "./site_BEY61Tp3.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { r as getForm, t as useWixForm } from "./useWixForm_B23E4em3.mjs";
import { jsxDEV } from "react/jsx-dev-runtime";
// src/components/forms/ContactForm.tsx
var _jsxFileName = "/workspace/src/components/forms/ContactForm.tsx";
var inputClass = "mt-1.5 block min-h-11 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-base text-foreground focus:border-primary focus:outline-2 focus:outline-offset-1 focus:outline-primary";
function errorText(field, value) {
	if (field.control === "email") return "Please enter a valid email address.";
	if (field.control === "phone") return !value ? "Please add a phone number so I can call you." : "Please enter a valid phone number.";
	return "Please fill in this field.";
}
function ContactForm({ formId, initialForm }) {
	const f = useWixForm(formId, { initialForm });
	if (f.outcome) return /* @__PURE__ */ jsxDEV("div", {
		role: "status",
		className: "rounded-lg border border-border bg-secondary p-6",
		children: [/* @__PURE__ */ jsxDEV("p", {
			className: "text-lg font-semibold text-foreground",
			children: "Thanks, I've got your message and I'll be in touch."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 9
		}, this), /* @__PURE__ */ jsxDEV("p", {
			className: "mt-2 text-base text-muted-foreground",
			children: [
				"If your interview is coming up soon, you can also",
				" ",
				/* @__PURE__ */ jsxDEV("a", {
					href: "/services/free-consultation",
					className: "font-medium text-primary underline",
					children: "book a free 30-minute Zoom consultation"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this),
				"."
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 7
	}, this);
	if (!f.form) {
		if (f.errors["@form"]) return /* @__PURE__ */ jsxDEV("p", {
			className: "text-base text-destructive",
			children: "Something went wrong and the form couldn't load. Please call 551.225.0583."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 14
		}, this);
		return /* @__PURE__ */ jsxDEV("div", {
			"aria-busy": "true",
			className: "h-64 animate-pulse rounded-lg bg-secondary"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 12
		}, this);
	}
	if (f.closed) return /* @__PURE__ */ jsxDEV("p", {
		className: "text-base text-muted-foreground",
		children: f.form.disabledMessage || "This form isn't taking messages right now. Please call 551.225.0583."
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 12
	}, this);
	const form = f.form;
	const required = (field) => field.required && form.requiredIndicator === "ASTERISK";
	return /* @__PURE__ */ jsxDEV("form", {
		noValidate: true,
		onSubmit: async (e) => {
			await f.submit(e);
		},
		className: "grid gap-5",
		children: [
			form.fields.map((field) => {
				const err = f.errors[field.target];
				const id = `f-${field.target}`;
				const errId = `err-${field.target}`;
				const label = /* @__PURE__ */ jsxDEV("span", {
					className: "text-sm font-semibold text-foreground",
					children: [field.label, required(field) && /* @__PURE__ */ jsxDEV("span", {
						"aria-hidden": "true",
						children: " *"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 33
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 11
				}, this);
				const help = field.description ? /* @__PURE__ */ jsxDEV("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: field.description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 67,
					columnNumber: 42
				}, this) : null;
				const error = err ? /* @__PURE__ */ jsxDEV("p", {
					id: errId,
					role: "alert",
					className: "mt-1.5 text-sm font-medium text-destructive",
					children: errorText(field, f.values[field.target])
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 11
				}, this) : null;
				if (field.control === "radio") return /* @__PURE__ */ jsxDEV("fieldset", {
					"aria-describedby": err ? errId : void 0,
					children: [
						/* @__PURE__ */ jsxDEV("legend", { children: label }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ jsxDEV("div", {
							className: "mt-2 flex flex-wrap gap-3",
							children: field.choices.map((c) => /* @__PURE__ */ jsxDEV("label", {
								className: "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-control border border-border bg-white px-4 text-base has-[:checked]:border-primary has-[:checked]:bg-secondary",
								children: [/* @__PURE__ */ jsxDEV("input", {
									type: "radio",
									name: field.target,
									value: c.value,
									checked: f.values[field.target] === c.value,
									onChange: () => f.setValues((v) => ({
										...v,
										[field.target]: c.value
									})),
									onBlur: () => f.validate(field.target)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 21
								}, this), c.label]
							}, c.value, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 15
						}, this),
						help,
						error
					]
				}, field.target, true, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 13
				}, this);
				let control;
				if (field.control === "textarea") control = /* @__PURE__ */ jsxDEV("textarea", {
					id,
					rows: 5,
					className: inputClass,
					"aria-required": field.required || void 0,
					...f.bind(field.target)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 21
				}, this);
				else if (field.control === "select") control = /* @__PURE__ */ jsxDEV("select", {
					id,
					className: inputClass,
					"aria-required": field.required || void 0,
					...f.bind(field.target),
					children: [/* @__PURE__ */ jsxDEV("option", {
						value: "",
						children: "Choose one"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 15
					}, this), field.choices.map((c) => /* @__PURE__ */ jsxDEV("option", {
						value: c.value,
						children: c.label
					}, c.value, false, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 17
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 13
				}, this);
				else {
					const type = field.control === "email" ? "email" : field.control === "phone" ? "tel" : field.control === "date" ? "date" : "text";
					control = /* @__PURE__ */ jsxDEV("input", {
						id,
						type,
						autoComplete: field.control === "email" ? "email" : field.control === "phone" ? "tel" : void 0,
						className: inputClass,
						"aria-required": field.required || void 0,
						...f.bind(field.target)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 13
					}, this);
				}
				return /* @__PURE__ */ jsxDEV("div", { children: [
					/* @__PURE__ */ jsxDEV("label", {
						htmlFor: id,
						children: label
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 13
					}, this),
					help,
					control,
					error
				] }, field.target, true, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 11
				}, this);
			}),
			f.errors["@form"] && /* @__PURE__ */ jsxDEV("p", {
				role: "alert",
				className: "text-base font-medium text-destructive",
				children: "Something went wrong and your message wasn't sent. Please try again, or call 551.225.0583."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 141,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ jsxDEV("div", { children: [/* @__PURE__ */ jsxDEV("button", {
				type: "submit",
				disabled: f.loading,
				className: "inline-flex h-12 items-center justify-center rounded-control bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60",
				children: f.loading ? "Sending…" : form.submitText || "Send message"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 9
			}, this), /* @__PURE__ */ jsxDEV("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: [
					"Read how your details are handled in the",
					" ",
					/* @__PURE__ */ jsxDEV("a", {
						href: "/privacy",
						className: "text-primary underline",
						children: "Privacy Policy"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 11
					}, this),
					"."
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 153,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 50,
		columnNumber: 5
	}, this);
}
// src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(async ($$result, $$props, $$slots) => {
	const FORM_ID = "a9e01ba9-70d1-4427-a4d7-f30c0d63f429";
	let form = null;
	try {
		form = await getForm(FORM_ID);
	} catch {}
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Contact Win The Job | Interview Coaching",
		"description": "Call or send a message to Win The Job about interview coaching in Fort Lee, NJ, or live on Zoom. Evening and weekend sessions.",
		"jsonLd": [{
			"@type": "ContactPage",
			"@id": `${SITE_ORIGIN}/contact#page`,
			url: `${SITE_ORIGIN}/contact`,
			name: "Contact Win The Job",
			about: { "@id": `${SITE_ORIGIN}/#organization` }
		}, organizationSchema()]
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="bg-navy text-navy-foreground"><div class="mx-auto max-w-7xl px-6 py-14 lg:py-20"><p class="eyebrow text-accent">Contact Win The Job</p><h1 class="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">Let's get you ready for your next interview</h1><p class="mt-5 max-w-2xl text-base text-navy-foreground/80 sm:text-lg">Tell us about the role you're going for and where you are in the process. We'll get back to you about how we can prepare.</p></div></section><div class="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-2"><div class="space-y-10"><section><h2 class="mt-4 text-2xl">Call us</h2><p class="mt-2 text-xl font-semibold">551.225.0583</p><div class="mt-4 flex flex-wrap gap-3"><a href="tel:+15512250583" class="inline-flex h-12 items-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/90">Call</a></div></section><section><h2 class="text-2xl">Email us</h2><p class="mt-2 text-xl font-semibold"><a href="mailto:nick@winthejobcoach.com" class="text-foreground no-underline hover:underline">nick@winthejobcoach.com</a></p></section><section><h2 class="text-2xl">When we coach</h2><p class="mt-2 text-muted-foreground">Monday to Friday, 5:30 PM – 9:00 PM<br>Saturday and Sunday, 9:00 AM – 9:00 PM<br>All times Eastern.</p></section><section><h2 class="text-2xl">How we can work together</h2><ul class="mt-3 list-disc space-y-2 pl-5 text-muted-foreground"><li><strong class="text-foreground">Live on Zoom</strong>, wherever you are. Your Zoom link is emailed to you when you book.</li><li><strong class="text-foreground">In person in Fort Lee, NJ</strong>, at our private office at the Regus Bridge Plaza or an agreed upon location.</li><li><strong class="text-foreground">Between sessions</strong>, we answer your questions by phone and email.</li></ul></section><section class="rounded-lg bg-secondary p-6"><h2 class="text-2xl">Not sure where to start?</h2><p class="mt-2 text-muted-foreground">Book a free 30-minute Zoom consultation. We'll talk about your interview and the best way to prepare for it.</p><a href="/services/free-consultation" class="mt-4 inline-flex h-12 items-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground no-underline hover:bg-primary/90">Book a free consultation</a></section></div><section><h2 class="text-2xl">Send a message</h2><div class="mt-6">${renderComponent($$result, "ContactForm", ContactForm, {
		"client:load": true,
		"formId": FORM_ID,
		"initialForm": form ?? void 0,
		"client:component-hydration": "load",
		"client:component-path": "/workspace/src/components/forms/ContactForm.tsx",
		"client:component-export": "default"
	})}</div></section></div>` })}`;
}, "/workspace/src/pages/contact.astro", void 0);
var $$file = "/workspace/src/pages/contact.astro";
var $$url = "/contact";
// \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
export { page };
