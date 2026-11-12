import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as WIX_CLIENT_ID } from "./client_C6N-4a0v.mjs";
import { auth } from "@wix/essentials";
import { ok } from "node:assert";
import { oAuthApps } from "@wix/auth-management";
// node_modules/@wix/astro/build/dependencies/astro-robots/backend-runtime/robots.mjs
var robots_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ request }) => {
	const { redirectUrlWixPages } = await auth.elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseUrl = redirectUrlWixPages.endsWith("/") ? redirectUrlWixPages : `${redirectUrlWixPages}/`;
	const robotsUrl = new URL("robots.txt", baseUrl);
	const userAgent = request.headers.get("user-agent");
	const originalResponse = await fetch(robotsUrl, { headers: { ...userAgent != null ? { "User-Agent": userAgent } : {} } });
	if (!originalResponse.ok) throw new Error(`Failed to retrieve original robots.txt from: \`${robotsUrl.toString()}\`. Error: \`${originalResponse.statusText}\``);
	const contentType = originalResponse.headers.get("content-type");
	return new Response(originalResponse.body, { headers: { ...contentType != null ? { "Content-Type": contentType } : {} } });
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-robots/backend-runtime/robots@_@mjs
var page = () => robots_exports;
export { page };
