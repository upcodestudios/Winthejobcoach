import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as string, i as object, n as guid, o as union, t as _enum } from "./schemas-DFj5JkSz_BjAleFAH.mjs";
import { t as isSafeReturnUrl } from "./isSafeReturnUrl-BC7tBd65_B3qHEtzg.mjs";
import { s as prepareOAuth } from "./session-BdH_CwUE_BHJxsIwe.mjs";
import { t as loginRoute } from "./credentialsRoutes-tD3Jl9hl_DtBk_yJ_.mjs";
import { getContextualAuth } from "@wix/sdk-runtime/context";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/login.mjs
var login_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	POST: () => POST
});
var loginSearchParams = object({
	idp: union([_enum(["google", "facebook"]), guid()]).optional().transform((idp) => idp === void 0 || idp === "google" || idp === "facebook" ? idp : { connectionId: idp }),
	prompt: _enum(["login", "none"]).optional(),
	returnToUrl: string().optional()
});
var GET = async ({ request, url }) => {
	const parsedParams = loginSearchParams.safeParse(Object.fromEntries(url.searchParams.entries()));
	if (!parsedParams.success) return new Response("Invalid login query parameters", { status: 400 });
	const { idp, prompt, returnToUrl = "/" } = parsedParams.data;
	if (!isSafeReturnUrl(returnToUrl, url)) return new Response("Invalid `returnToUrl` query param, only relative URLs are allowed", { status: 400 });
	const auth = getContextualAuth();
	const { authUrl, cookie } = await prepareOAuth(auth, request, url, returnToUrl, {
		idp,
		prompt
	});
	return new Response(null, {
		headers: {
			"Cache-Control": "no-store",
			Location: authUrl,
			"Set-Cookie": cookie
		},
		status: 302
	});
};
var POST = loginRoute;
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/login@_@mjs
var page = () => login_exports;
export { page };
