import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { n as logo_white_default, t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
import { t as $$PageHeader } from "./PageHeader_BzCDm48p.mjs";
// src/pages/account.astro
var account_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Account,
	file: () => $$file,
	url: () => $$url
});
var $$Account = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "My Account | Win The Job",
		"description": "Your coaching packages, credits left and upcoming sessions with Nick Fennell."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "PageHeader", $$PageHeader, {
		"logo": logo_white_default,
		"eyebrow": "Your account",
		"title": "My account",
		"lede": "Your coaching packages, credits left and upcoming sessions — all in one place."
	})}${maybeRenderHead($$result)}<div class="mx-auto max-w-7xl px-6 py-14">${renderComponent($$result, "AccountDashboard", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/workspace/src/components/account/AccountDashboard.tsx",
		"client:component-export": "default"
	})}</div>` })}`;
}, "/workspace/src/pages/account.astro", void 0);
var $$file = "/workspace/src/pages/account.astro";
var $$url = "/account";
// \0virtual:astro:page:src/pages/account@_@astro
var page = () => account_exports;
export { page };
