import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as WIX_CLIENT_ID } from "./client_C6N-4a0v.mjs";
import { auth } from "@wix/essentials";
import { ok } from "node:assert";
import { oAuthApps } from "@wix/auth-management";
// node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/payment-link.mjs
var payment_link_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ params, redirect }) => {
	const { redirectUrlWixPages } = await auth.elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseUrl = redirectUrlWixPages.endsWith("/") ? redirectUrlWixPages : `${redirectUrlWixPages}/`;
	return redirect(new URL(`_paylink/${params.id}`, baseUrl).toString(), 302);
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/payment-link@_@mjs
var page = () => payment_link_exports;
export { page };
