import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
import { n as fetchOfferings } from "./offerings_ef43QJzC.mjs";
import { t as fetchPlanBySlug } from "./plans_BWxTbBUq.mjs";
// src/pages/plans/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	let target = "/services";
	try {
		const [plan, offerings] = await Promise.all([fetchPlanBySlug(Astro.params.slug), fetchOfferings()]);
		const hit = plan && offerings.find((o) => o.kind === "plan" && o.wixName === plan.name);
		if (hit) target = `/services/${hit.slug}`;
	} catch {}
	return Astro.redirect(target, 301);
}, "/workspace/src/pages/plans/[slug].astro", void 0);
var $$file = "/workspace/src/pages/plans/[slug].astro";
var $$url = "/plans/[slug]";
// \0virtual:astro:page:src/pages/plans/[slug]@_@astro
var page = () => _slug__exports;
export { page };
