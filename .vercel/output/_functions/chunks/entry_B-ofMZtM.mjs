import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
// node_modules/@wix/astro/build/dependencies/astro-backoffice-extensions/astro-runtime/entry.astro
var entry_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Entry,
	file: () => $$file,
	url: () => void 0
});
createAstro("https://astro.build");
var $$Entry = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Entry;
	const extensions = /* #__PURE__ */ Object.assign({});
	if (Astro.params.compId == null) return new Response(null, { status: 404 });
	const load = extensions[`/.astro/integrations/_wix_astro_backoffice-extensions/backoffice/${Astro.params.compId}/entry.astro`];
	if (load == null) return new Response(null, { status: 404 });
	const mod = await load();
	if (mod == null || typeof mod !== "object" || !("default" in mod)) return new Response(null, { status: 404 });
	const Component = mod.default;
	return renderTemplate`${renderComponent($$result, "Component", Component, {})}`;
}, "/workspace/node_modules/@wix/astro/build/dependencies/astro-backoffice-extensions/astro-runtime/entry.astro", void 0);
var $$file = "/workspace/node_modules/@wix/astro/build/dependencies/astro-backoffice-extensions/astro-runtime/entry.astro";
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-backoffice-extensions/astro-runtime/entry@_@astro
var page = () => entry_exports;
export { page };
