import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
// src/pages/plans.astro
var plans_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Plans,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Plans = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Plans;
	return Astro.redirect("/services", 301);
}, "/workspace/src/pages/plans.astro", void 0);
var $$file = "/workspace/src/pages/plans.astro";
var $$url = "/plans";
// \0virtual:astro:page:src/pages/plans@_@astro
var page = () => plans_exports;
export { page };
