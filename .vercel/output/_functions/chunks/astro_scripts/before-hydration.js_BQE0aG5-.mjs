import { t as WIX_CLIENT_ID } from "../client_C6N-4a0v.mjs";
import { EMPTY_TOKENS, OAuthStrategy, createClient } from "@wix/sdk";
import { resolveContext } from "@wix/sdk-runtime/context";
import { headlessSite } from "@wix/headless-site";
// node_modules/@wix/astro/build/dependencies/astro-auth/browser-runtime/setup.js
var SESSION_COOKIE_NAME = "wixSession";
var SESSION_COOKIE_OPTIONS = {
	path: "/",
	secure: true,
	maxAge: 10800,
	sameSite: "none"
};
function getSessionClient(options) {
	return createClient({
		auth: OAuthStrategy({
			tokenStorage: {
				getTokens: () => getCookieAsJson("wixSession")?.tokens ?? EMPTY_TOKENS,
				setTokens: (tokens) => {
					document.cookie = buildSessionCookieString(options.clientId, tokens);
				}
			},
			...options
		}),
		host: headlessSite.host({})
	});
}
function buildSessionCookieString(clientId, tokens) {
	let cookie = `${SESSION_COOKIE_NAME}=${encodeURIComponent(JSON.stringify({
		clientId,
		tokens
	}))}; path=${SESSION_COOKIE_OPTIONS.path}; ${SESSION_COOKIE_OPTIONS.secure ? "secure;" : ""}`;
	if (SESSION_COOKIE_OPTIONS.sameSite != null) cookie += ` samesite=${SESSION_COOKIE_OPTIONS.sameSite};`;
	if (SESSION_COOKIE_OPTIONS.maxAge != null) cookie += ` max-age=${SESSION_COOKIE_OPTIONS.maxAge}`;
	return cookie;
}
function getCookieAsJson(name) {
	const cookie = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));
	if (cookie == null) return null;
	try {
		const jsonString = decodeURIComponent(cookie.split("=")[1] ?? "");
		const cookieValue = JSON.parse(jsonString);
		if (isCookieValue(cookieValue)) return cookieValue;
		throw new Error("Invalid cookie value");
	} catch {
		return null;
	}
}
function isCookieValue(value) {
	if (value == null || typeof value !== "object") return false;
	if (!("clientId" in value) || typeof value.clientId !== "string") return false;
	if (!("tokens" in value)) return false;
	const tokens = value.tokens;
	if (tokens == null || typeof tokens !== "object") return false;
	if (!("accessToken" in tokens) || !("refreshToken" in tokens)) return false;
	return true;
}
function setup(options) {
	if (resolveContext() != null) return;
	if (!location.pathname.startsWith("/_wix/extensions/backoffice")) getSessionClient(options).enableContext("global");
}
// astro:scripts/before-hydration.js
setup({ clientId: WIX_CLIENT_ID });
export {};
