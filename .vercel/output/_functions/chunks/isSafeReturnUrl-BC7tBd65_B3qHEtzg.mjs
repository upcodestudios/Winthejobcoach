// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/isSafeReturnUrl-BC7tBd65.mjs
function isSafeReturnUrl(returnUrl, requestUrl) {
	if (!returnUrl.startsWith("/")) return false;
	try {
		return new URL(returnUrl, requestUrl).origin === requestUrl.origin;
	} catch {
		return false;
	}
}
export { isSafeReturnUrl as t };
