import { c as renderSlot, d as renderTemplate, f as maybeRenderHead, m as addAttribute } from "./server_DBXwFo01.mjs";
import { n as createComponent, t as createAstro } from "./compiler_DmpDjkCX.mjs";
// src/components/site/PageHeader.astro
createAstro("https://astro.build");
var $$PageHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHeader;
	const { eyebrow, title, lede, image, logo } = Astro.props;
	const position = image?.position ?? "center";
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(image ? "header-photo relative bg-navy text-navy-foreground" : "bg-navy text-navy-foreground", "class")}${addAttribute(image ? {
		"--hp-480": `url("${image.src480}")`,
		"--hp-960": `url("${image.src960}")`,
		"--hp-1376": `url("${image.src1376}")`,
		backgroundPosition: position
	} : void 0, "style")} data-astro-cid-6sr4fjt2><div class="relative z-10 mx-auto max-w-7xl px-6 py-14 lg:py-20" data-astro-cid-6sr4fjt2>${logo && renderTemplate`<img${addAttribute(logo.src, "src")}${addAttribute(logo.width, "width")}${addAttribute(logo.height, "height")} alt="" aria-hidden="true" class="h-10 w-auto sm:h-12" data-astro-cid-6sr4fjt2>`}<p${addAttribute(["eyebrow text-accent", logo && "mt-6"], "class:list")} data-astro-cid-6sr4fjt2>${eyebrow}</p><h1 class="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl" data-astro-cid-6sr4fjt2>${title}</h1>${lede && renderTemplate`<p class="wtj-lede mt-5 max-w-2xl text-navy-foreground/80" data-astro-cid-6sr4fjt2>${lede}</p>`}${renderSlot($$result, $$slots["default"])}</div></section>`;
}, "/workspace/src/components/site/PageHeader.astro", void 0);
export { $$PageHeader as t };
