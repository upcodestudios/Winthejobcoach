import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, x as unescapeHTML } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { t as $$CtaBand } from "./CtaBand_8M2IPQRs.mjs";
import { n as pageHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
import { t as fetchPageContent } from "./pageContent_B3KqaGAv.mjs";
// src/pages/how-it-works.astro
var how_it_works_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HowItWorks,
	file: () => $$file,
	url: () => $$url
});
var $$HowItWorks = createComponent(async ($$result, $$props, $$slots) => {
	const method = [
		{
			title: "Prepare",
			items: [
				"Put your research into your overall plan",
				"Create compelling key talking points",
				"Use your network",
				"Build a formal preparation process",
				"Learn the hiring process and interview steps"
			],
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`
		},
		{
			title: "Practice",
			items: [
				"Work through common questions",
				"Practice delivering your answers and key points",
				"Practice asking questions",
				"Prepare your closing statement",
				"Try mock interviews",
				"Optional video recording and playback coaching",
				"Use rehearsal best practices"
			],
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`
		},
		{
			title: "Perform",
			items: [
				"Define the outcome you want",
				"Stay in control of your nerves",
				"Use the 3 C's of presentation skills",
				"Let your research shine"
			],
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V3"/></svg>`
		}
	];
	const content = await fetchPageContent("how-it-works", {
		methodologyIntro: "Interviews are hard to predict, so the method focuses on what you can control: how well you've prepared, how much you've practiced and how you show up.",
		coachingPlanSteps: [
			{
				title: "Free 30-minute Zoom consultation",
				body: "You and Nick talk about your interview and how to prepare."
			},
			{
				title: "Kickoff planning meeting",
				body: "You set the plan: your target role, your timeline and what you want to work on."
			},
			{
				title: "Coaching sessions",
				body: "One-on-one sessions to build your answers and practice them."
			},
			{
				title: "Final practice and rehearsal",
				body: "A last run-through so you walk in knowing you're ready."
			},
			{
				title: "Ongoing coaching defined",
				body: "You decide together what support you want after the interview, such as a post-interview review."
			}
		],
		mockInterviewBody: "A mock interview is a realistic interview simulation, held in person at Nick's private office at the Regus Bridge Plaza, Fort Lee, NJ, followed by detailed feedback on your answers and communication style — behavioral, technical, panel, final-round, leadership and career-change interviews, with optional video recording and playback coaching."
	});
	const plan = content.coachingPlanSteps.map((p, i) => ({
		n: String(i + 1),
		title: p.title,
		body: p.body
	}));
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "How It Works: The Win The Job Methodology | Win The Job",
		"description": "Nick Fennell's Prepare, Practice, Perform method, and a sample coaching plan from your first conversation to interview-day confidence."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "How it works",
		"title": "Prepare to perform",
		"lede": "A practical path from research to rehearsal to interview-day confidence.",
		"image": pageHeaderPhoto["how-it-works"]
	})}${maybeRenderHead($$result)}<section id="methodology" class="mx-auto max-w-7xl scroll-mt-28 px-6 py-14"><p class="eyebrow text-primary">The Win The Job Methodology</p><h2 class="mt-3 text-3xl">Prepare. Practice. Perform.</h2><p class="mt-4 max-w-2xl text-muted-foreground">${content.methodologyIntro}</p><div class="mt-10 grid gap-6 md:grid-cols-3">${method.map((m) => renderTemplate`<div class="rounded-lg border border-border bg-white p-6"><span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">${unescapeHTML(m.icon)}</span><h3 class="mt-1 text-2xl">${m.title}</h3><ul class="mt-4 space-y-2 text-sm text-muted-foreground">${m.items.map((i) => renderTemplate`<li class="flex gap-2"><span aria-hidden="true" class="text-primary">•</span>${i}</li>`)}</ul></div>`)}</div></section><section id="coaching-plan" class="scroll-mt-28 bg-secondary"><div class="mx-auto max-w-7xl px-6 py-14"><p class="eyebrow text-primary">Your Coaching Plan</p><h2 class="mt-3 text-3xl">A clear path from first conversation to interview-day confidence</h2><ol class="mt-10 grid gap-5 md:grid-cols-5">${plan.map((p) => renderTemplate`<li class="rounded-lg border border-border bg-white p-5"><span class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">${p.n}</span><h3 class="mt-3 text-base font-semibold">${p.title}</h3><p class="mt-2 text-sm text-muted-foreground">${p.body}</p></li>`)}</ol><p class="mt-6 text-sm text-muted-foreground">This is a sample plan. Yours is shaped around your role and your timeline.</p></div></section><section id="mock-interviews" class="scroll-mt-28 bg-secondary"><div class="mx-auto max-w-7xl px-6 py-14"><p class="eyebrow text-primary">Mock Interviews</p><h2 class="mt-3 text-3xl">Practice in a realistic setting</h2><div class="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><p class="max-w-2xl text-base leading-relaxed text-muted-foreground">${content.mockInterviewBody}</p><div class="rounded-lg border border-border bg-white p-6"><h3 class="text-lg font-semibold">How to get one</h3><p class="mt-2 text-sm text-muted-foreground">A mock interview isn't booked on its own — it comes with Win The Job Intensive and Executive Interview Coaching. Ask Nick about adding one during your consultation or coaching sessions.</p><a href="/services/mock-interviews" class="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline">More about mock interviews</a></div></div></div></section><section class="mx-auto max-w-7xl px-6 py-14"><h2 class="text-3xl">How we can work together</h2><div class="mt-8 grid gap-5 md:grid-cols-3"><div class="rounded-lg border border-border bg-white p-6"><h3 class="text-lg font-semibold">In person</h3><p class="mt-2 text-sm text-muted-foreground">At Nick's private office at the Regus Bridge Plaza, Fort Lee, NJ, or an agreed location.</p></div><div class="rounded-lg border border-border bg-white p-6"><h3 class="text-lg font-semibold">Live on Zoom</h3><p class="mt-2 text-sm text-muted-foreground">Online, wherever you are. Your Zoom link is emailed to you when you book.</p></div><div class="rounded-lg border border-border bg-white p-6"><h3 class="text-lg font-semibold">Between sessions</h3><p class="mt-2 text-sm text-muted-foreground">Questions answered by email and phone.</p></div></div></section>${renderComponent($$result, "CtaBand", $$CtaBand, {
		"heading": "Start with a free consultation",
		"body": "Thirty minutes on Zoom to talk about your interview and the best way to prepare."
	})}` })}`;
}, "/workspace/src/pages/how-it-works.astro", void 0);
var $$file = "/workspace/src/pages/how-it-works.astro";
var $$url = "/how-it-works";
// \0virtual:astro:page:src/pages/how-it-works@_@astro
var page = () => how_it_works_exports;
export { page };
