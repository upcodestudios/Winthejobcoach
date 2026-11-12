import { t as WIX_CLIENT_ID } from "./client_C6N-4a0v.mjs";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/saveSessionTokensToCookie-BJF94cp0.mjs
var SESSION_COOKIE_NAME = "wixSession";
var SESSION_COOKIE_OPTIONS = {
	path: "/",
	secure: true,
	maxAge: 10800,
	sameSite: "none"
};
function saveSessionTokensToCookie(context, tokens) {
	context.cookies.set(SESSION_COOKIE_NAME, {
		clientId: WIX_CLIENT_ID,
		tokens
	}, SESSION_COOKIE_OPTIONS);
}
export { saveSessionTokensToCookie as t };
