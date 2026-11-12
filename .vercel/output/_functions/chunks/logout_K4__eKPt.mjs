import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as returnToQueryParamName } from "./constants-D4Fuu7j-_I0KY26Dy.mjs";
import { a as string, i as object } from "./schemas-DFj5JkSz_BjAleFAH.mjs";
import { getContextualAuth } from "@wix/sdk-runtime/context";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/logout.mjs
var logout_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var logoutSearchParams = object({ returnToUrl: string().optional() });
var POST = async ({ redirect, request, url }) => {
	const { returnToUrl = "/" } = logoutSearchParams.parse(Object.fromEntries(url.searchParams.entries()));
	const baseUrl = `${new URL(request.url).origin}//`;
	const postFlowUrl = new URL("/api/auth/logout-callback", baseUrl);
	const referer = request.headers.get("referer");
	if (referer != null) postFlowUrl.protocol = new URL(referer).protocol;
	postFlowUrl.searchParams.set(returnToQueryParamName, returnToUrl);
	const { logoutUrl } = await getContextualAuth().logout(postFlowUrl.toString());
	return redirect(logoutUrl);
};
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/logout@_@mjs
var page = () => logout_exports;
export { page };
