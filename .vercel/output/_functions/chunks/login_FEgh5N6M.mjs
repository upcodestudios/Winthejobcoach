import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { d as renderTemplate, f as maybeRenderHead, i as renderComponent } from "./server_DBXwFo01.mjs";
import { n as createComponent } from "./compiler_DmpDjkCX.mjs";
import { t as $$SiteLayout } from "./SiteLayout_D-zPcRjU.mjs";
// src/pages/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"title": "Log In | Win The Job",
		"description": "Log in to see your coaching packages, credits left and upcoming sessions."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="mx-auto max-w-md"><h1 class="mb-6 text-2xl font-semibold">Welcome</h1>${renderComponent($$result, "LoginForm", null, {
		"client:only": "react",
		"client:component-hydration": "only",
		"client:component-path": "/workspace/src/components/members/LoginForm.tsx",
		"client:component-export": "default"
	})}</section>` })}`;
}, "/workspace/src/pages/login.astro", void 0);
var $$file = "/workspace/src/pages/login.astro";
var $$url = "/login";
// \0virtual:astro:page:src/pages/login@_@astro
var page = () => login_exports;
export { page };
