import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { t as saveSessionTokensToCookie } from "./saveSessionTokensToCookie-BJF94cp0_TuJ3gwId.mjs";
import { n as returnToQueryParamName } from "./constants-D4Fuu7j-_I0KY26Dy.mjs";
import { t as isSafeReturnUrl } from "./isSafeReturnUrl-BC7tBd65_B3qHEtzg.mjs";
import { getContextualAuth } from "@wix/sdk-runtime/context";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/logout-callback.mjs
var logout_callback_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var GET = async (context) => {
	const returnTo = context.url.searchParams.get("returnTo") ?? "/";
	if (!isSafeReturnUrl(returnTo, context.url)) throw new Error(`Invalid \`${returnToQueryParamName}\` query param, only relative URLs are allowed`);
	const auth = getContextualAuth();
	saveSessionTokensToCookie(context, await auth.generateVisitorTokens());
	return context.redirect(returnTo);
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/logout-callback@_@mjs
var page = () => logout_callback_exports;
export { page };
