import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as WIX_CLIENT_ID } from "./client_C6N-4a0v.mjs";
import { auth } from "@wix/essentials";
import { ok } from "node:assert";
import { oAuthApps } from "@wix/auth-management";
// node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/proposal.mjs
var proposal_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async ({ url }) => {
	const { redirectUrlWixPages } = await auth.elevate(oAuthApps.getOAuthApp)(WIX_CLIENT_ID);
	ok(redirectUrlWixPages != null);
	const baseUrl = redirectUrlWixPages.endsWith("/") ? redirectUrlWixPages : `${redirectUrlWixPages}/`;
	const newProposalUrl = new URL(url.pathname.replace("/", ""), baseUrl);
	newProposalUrl.search = url.search;
	return new Response(null, {
		headers: { Location: newProposalUrl.toString() },
		status: 302
	});
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-payment-links/backend-runtime/proposal@_@mjs
var page = () => proposal_exports;
export { page };
