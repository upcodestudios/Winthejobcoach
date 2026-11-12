import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as WIX_CLIENT_ID } from "./client_C6N-4a0v.mjs";
import { auth } from "@wix/essentials";
import { ok } from "node:assert";
import { oAuthApps } from "@wix/auth-management";
// node_modules/@wix/astro/build/dependencies/astro-viewer-api/backend-runtime/api.mjs
var api_exports = /* @__PURE__ */ __exportAll({ ALL: () => ALL });
var ALL = async ({ url }) => {
	const { redirectUrlWixPages } = await auth.elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseWixUrl = new URL(redirectUrlWixPages);
	const mergedPath = baseWixUrl.pathname.replace(/\/$/, "") + url.pathname.replace(/\/$/, "");
	const redirectUrl = new URL(mergedPath, baseWixUrl.origin);
	for (const [key, value] of [...baseWixUrl.searchParams.entries(), ...url.searchParams.entries()]) redirectUrl.searchParams.append(key, value);
	return new Response(null, {
		headers: { Location: redirectUrl.toString() },
		status: 307
	});
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-viewer-api/backend-runtime/api@_@mjs
var page = () => api_exports;
export { page };
