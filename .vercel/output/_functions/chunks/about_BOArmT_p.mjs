import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent, m as addAttribute } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { a as personSchema, i as organizationSchema } from "./site_BEY61Tp3.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
import { n as pageHeaderPhoto } from "./headerPhotos_DwaWtj5H.mjs";
import { t as $$CtaBand } from "./CtaBand_8M2IPQRs.mjs";
import { n as CircularTestimonials, t as fetchTestimonials } from "./testimonials_9d8aGuX2.mjs";
import { t as fetchPageContent } from "./pageContent_B3KqaGAv.mjs";
import { t as createImageAsset } from "./image-asset_9P4BGFA9.mjs";
// src/assets/photos/nick-headshot-480.webp
var nick_headshot_480_default = createImageAsset({
	"src": "/_astro/nick-headshot-480.B5klwA2A.webp",
	"width": 300,
	"height": 480,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-headshot-480.webp", false);
// src/assets/photos/nick-headshot-960.webp
var nick_headshot_960_default = createImageAsset({
	"src": "/_astro/nick-headshot-960.DLkp5HyO.webp",
	"width": 600,
	"height": 960,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-headshot-960.webp", false);
// src/assets/photos/nick-headshot-1600.webp
var nick_headshot_1600_default = createImageAsset({
	"src": "/_astro/nick-headshot-1600.BigaXdiD.webp",
	"width": 1e3,
	"height": 1600,
	"format": "webp"
}, "/workspace/src/assets/photos/nick-headshot-1600.webp", false);
// src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(async ($$result, $$props, $$slots) => {
	const testimonials = await fetchTestimonials();
	const content = await fetchPageContent("about", {
		bioParagraph1: "Nick is a seasoned corporate professional with executive-level global experience. He has developed his interview process expertise over 25 years. As a subject matter expert in corporate learning and development, he has the background to coach the core skills needed to compete for and win jobs.",
		bioParagraph2: "As a job candidate, Nick has won multiple interview competitions and six-figure jobs. His current work includes advising Fortune 1000 leaders, including Human Resources, Chief People Officers and business line leaders.",
		bioBullets: [
			"Corporate professional with award-winning executive and management experience",
			"Designed and implemented interview processes for global companies",
			"Has won six-figure jobs using preparation and practice techniques"
		],
		quoteText: "The founder of the Behavioral Interview process is Dr. Paul Green. My interview process expertise was formed by members of Dr. Green's team. Early in my leadership career, I worked with that team extensively to design a world-class interview process.",
		clientPerspectivesLede: "Professional leaders on Nick's impact, integrity and ability to build results."
	});
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "About Nick Fennell | Win The Job Interview Coaching",
		"description": "Nick Fennell has 25 years of interview process experience in corporate learning and development, and coaches job seekers from first interviews to leadership roles.",
		"jsonLd": [personSchema(), organizationSchema()]
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"eyebrow": "About",
		"title": "Meet Nick Fennell",
		"lede": "Interview coach and corporate learning advisor.",
		"image": pageHeaderPhoto.about
	})}${maybeRenderHead($$result)}<section id="meet-nick" class="mx-auto grid max-w-7xl scroll-mt-28 items-start gap-12 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr]"><div class="mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-full border-4 border-background shadow-sm lg:mx-0"><img${addAttribute(nick_headshot_960_default.src, "src")}${addAttribute(`${nick_headshot_480_default.src} 480w, ${nick_headshot_960_default.src} 960w, ${nick_headshot_1600_default.src} 1600w`, "srcset")} sizes="360px"${addAttribute(nick_headshot_960_default.width, "width")}${addAttribute(nick_headshot_960_default.height, "height")} alt="Portrait of Nick Fennell" class="h-full w-full object-cover object-top" loading="eager"></div><div><p class="text-lg leading-relaxed">${content.bioParagraph1}</p><p class="mt-4 text-base leading-relaxed text-muted-foreground">${content.bioParagraph2}</p><ul class="mt-6 space-y-3 text-base">${content.bioBullets.map((b) => renderTemplate`<li class="flex gap-3"><span aria-hidden="true" class="text-primary">✓</span>${b}</li>`)}</ul><blockquote class="mt-8 border-l-4 border-accent pl-5 text-base italic leading-relaxed text-muted-foreground">&ldquo;${content.quoteText}&rdquo;<footer class="mt-2 text-sm not-italic font-semibold text-foreground">Nick Fennell, Founder, Win The Job</footer></blockquote><a href="https://www.linkedin.com/in/nickfennelltraininganddevelopmentadvisor/" class="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-primary underline" rel="noopener">Nick Fennell on LinkedIn</a></div></section><section id="client-perspectives" class="scroll-mt-28 bg-secondary"><div class="mx-auto max-w-5xl px-6 py-14"><p class="eyebrow text-primary">Client perspectives</p><h2 class="mt-3 text-3xl">References and testimonials</h2><p class="mt-3 max-w-2xl text-muted-foreground">${content.clientPerspectivesLede}</p><div class="mt-8">${renderComponent($$result, "CircularTestimonials", CircularTestimonials, {
		"client:visible": true,
		"testimonials": testimonials,
		"client:component-hydration": "visible",
		"client:component-path": "/workspace/src/components/site/CircularTestimonials.tsx",
		"client:component-export": "default"
	})}</div></div></section>${renderComponent($$result, "CtaBand", $$CtaBand, {
		"heading": "Ready to talk about your interview?",
		"body": "Book a free 30-minute Zoom consultation with Nick."
	})}` })}`;
}, "/workspace/src/pages/about.astro", void 0);
var $$file = "/workspace/src/pages/about.astro";
var $$url = "/about";
// \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
export { page };
