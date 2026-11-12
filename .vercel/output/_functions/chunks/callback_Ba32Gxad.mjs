import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as saveSessionTokensToCookie } from "./saveSessionTokensToCookie-BJF94cp0_TuJ3gwId.mjs";
import { t as oAuthStateCookieName } from "./constants-D4Fuu7j-_I0KY26Dy.mjs";
import { a as string, i as object } from "./schemas-DFj5JkSz_BjAleFAH.mjs";
import { t as isSafeReturnUrl } from "./isSafeReturnUrl-BC7tBd65_B3qHEtzg.mjs";
import { getContextualAuth } from "@wix/sdk-runtime/context";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/callback.mjs
var callback_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var oauthCookieSchema = object({
	codeChallenge: string(),
	codeVerifier: string(),
	originalUri: string(),
	redirectUri: string(),
	state: string()
});
var GET = async (context) => {
	const oauthStateCookie = context.cookies.get(oAuthStateCookieName);
	if (oauthStateCookie == null) throw new Error(`Missing \`${oAuthStateCookieName}\` cookie`);
	const oauthData = oauthCookieSchema.parse(JSON.parse(oauthStateCookie.value));
	if (!isSafeReturnUrl(oauthData.originalUri, context.url)) throw new Error("Invalid `originalUri` cookie param, only relative URLs are allowed");
	const auth = getContextualAuth();
	const { code, error, state } = auth.parseFromUrl(context.url.toString(), "query");
	if (error != null) {
		if (state !== oauthData.state) throw new Error("Invalid `state` query param");
		deleteOAuthStateCookie(context);
		return context.redirect(oauthData.originalUri);
	}
	const memberTokens = await auth.getMemberTokens(code, state, oauthData);
	deleteOAuthStateCookie(context);
	saveSessionTokensToCookie(context, memberTokens);
	return context.redirect(oauthData.originalUri);
};
function deleteOAuthStateCookie(context) {
	context.cookies.delete(oAuthStateCookieName, {
		httpOnly: true,
		path: "/",
		sameSite: "none",
		secure: true
	});
}
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/callback@_@mjs
var page = () => callback_exports;
export { page };
