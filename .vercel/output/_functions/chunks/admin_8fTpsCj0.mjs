import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { auth } from "@wix/essentials";
import { ok } from "node:assert";
import { appInstances } from "@wix/app-management";
// node_modules/@wix/astro/build/dependencies/astro-admin-redirect/backend-runtime/admin.mjs
var admin_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ redirect, url }) => {
	const { site } = await auth.elevate(appInstances.getAppInstance)();
	ok(site?.siteId != null);
	const dashboardUrl = new URL(`/dashboard/${site.siteId}`, "https://manage.wix.com");
	dashboardUrl.search = url.search;
	return redirect(dashboardUrl.toString(), 302);
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-admin-redirect/backend-runtime/admin@_@mjs
var page = () => admin_exports;
export { page };
