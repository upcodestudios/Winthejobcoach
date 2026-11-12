import { k as defineMiddleware, t as sequence } from "./chunks/sequence_ar2a2mWw.mjs";
import { t as WIX_CLIENT_ID } from "./chunks/client_C6N-4a0v.mjs";
import { t as saveSessionTokensToCookie } from "./chunks/saveSessionTokensToCookie-BJF94cp0_TuJ3gwId.mjs";
import { n as WIX_CLIENT_PUBLIC_KEY, r as WIX_CLIENT_SECRET, t as WIX_CLIENT_INSTANCE_ID } from "./chunks/server_BgHdweE2.mjs";
import * as mod from "zod/v4";
import { AsyncLocalStorage } from "node:async_hooks";
import { RequestType, headlessNode } from "@wix/headless-node";
import { AppStrategy, OAuthStrategy, TokenRole, createClient } from "@wix/sdk";
import { monitoring } from "@wix/essentials";
import { wixContext } from "@wix/sdk-context";
import { scripts } from "@wix/headless-site-assets";
// src/middleware.ts
var WIX_DUPLICATE_TAGS = /<title wix-seo-tag="true">[\s\S]*?<\/title>|<(?:link|meta) wix-seo-tag="true"[^>]*(?:rel="canonical"|property="og:|name="twitter:|name="description")[^>]*>/g;
var onRequest$4 = defineMiddleware(async (_context, next) => {
	const response = await next();
	if (!response.headers.get("Content-Type")?.startsWith("text/html")) return response;
	const html = await response.text();
	const cleaned = html.includes("wix-seo-tag=\"true\"") ? html.replace(WIX_DUPLICATE_TAGS, "") : html;
	return new Response(cleaned, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});
});
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/authAsyncLocalStorage-BHauQKLt.mjs
var authAsyncLocalStorage = new AsyncLocalStorage();
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/createHost-CvH3-kwc.mjs
function createHost(options = {}) {
	return headlessNode.host(options);
}
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/elevatedContextualClient-B7OKT-9f.mjs
var defaultHost = createHost();
var resolveHostForCurrentRequest = () => {
	return authAsyncLocalStorage.getStore()?.host() ?? defaultHost;
};
var hostProxy = new Proxy({}, { get(target, prop) {
	const value = resolveHostForCurrentRequest()[prop];
	if (typeof value !== "function") return value;
	return function(...args) {
		const anotherHost = resolveHostForCurrentRequest();
		return anotherHost[prop].apply(anotherHost, args);
	};
} });
var contextualClient = createClient({
	auth: () => {
		const auth = authAsyncLocalStorage.getStore()?.auth?.();
		if (auth == null) throw new Error("Cannot find authentication on `AsyncLocalStorage` instance");
		return auth;
	},
	host: hostProxy,
	modules: { headless: headlessNode }
});
var elevatedContextualClient = createClient({
	auth: () => {
		const auth = authAsyncLocalStorage.getStore()?.elevatedAuth?.();
		if (auth == null) throw new Error("Cannot find authentication on `AsyncLocalStorage` instance");
		return auth;
	},
	host: hostProxy,
	modules: { headless: headlessNode }
});
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/generateVisitorTokens-g3yrIpgh.mjs
var auth$1 = OAuthStrategy({ clientId: WIX_CLIENT_ID });
async function generateVisitorTokens() {
	return auth$1.generateVisitorTokens();
}
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/middleware/auth.mjs
var INTERNAL_ROUTE_PREFIX$1 = "/_wix/";
function isInternalRequest$1(context) {
	return context.isPrerendered && context.url.pathname.startsWith(INTERNAL_ROUTE_PREFIX$1);
}
var tokensSchema = mod.object({
	clientId: mod.string(),
	tokens: mod.object({
		accessToken: mod.object({
			expiresAt: mod.number(),
			value: mod.string()
		}),
		refreshToken: mod.object({
			role: mod.enum(TokenRole),
			value: mod.string()
		})
	})
});
function getSessionTokensFromCookie(context) {
	if (!context.isPrerendered) {
		const rawCookie = context.cookies.get("wixSession")?.json();
		if (rawCookie != null) {
			const tokensParseResult = tokensSchema.safeParse(rawCookie);
			if (tokensParseResult.success && tokensParseResult.data.clientId === "5RMV_zTCD8ZU0epn4YJL4YvdN5wES8E6c5RwIghJNeg=") return tokensParseResult.data.tokens;
		}
	}
	return null;
}
contextualClient.enableContext("module");
elevatedContextualClient.enableContext("module", { elevated: true });
var onRequest$3 = async (context, next) => {
	if (isInternalRequest$1(context)) return next();
	if (context.url.pathname.startsWith("/_wix/extensions/")) {
		const getAuth = () => context.locals._wix?.elevatedAuth ?? null;
		return authAsyncLocalStorage.run({
			auth: getAuth,
			elevatedAuth: null,
			host: () => context.locals._wix?.host
		}, async () => next());
	}
	const webMonitoring = { requestType: RequestType.Web };
	const accessToken = context.request.headers.get("Authorization");
	if (accessToken != null) {
		const auth = AppStrategy({
			accessToken,
			appId: WIX_CLIENT_ID,
			appSecret: WIX_CLIENT_SECRET,
			publicKey: WIX_CLIENT_PUBLIC_KEY
		});
		const elevatedAuth = await auth.elevated();
		const host = createHost({
			monitoring: webMonitoring,
			req: context.request
		});
		return authAsyncLocalStorage.run({
			auth: () => auth,
			elevatedAuth: () => elevatedAuth,
			host: () => host
		}, async () => next());
	}
	const existingToken = getExistingTokens(context);
	if (existingToken) {
		const auth = OAuthStrategy({
			clientId: WIX_CLIENT_ID,
			tokens: existingToken
		});
		const elevatedAuth = AppStrategy({
			appId: WIX_CLIENT_ID,
			appSecret: WIX_CLIENT_SECRET,
			instanceId: WIX_CLIENT_INSTANCE_ID,
			publicKey: WIX_CLIENT_PUBLIC_KEY
		});
		const host = createHost({
			monitoring: webMonitoring,
			req: context.request
		});
		return authAsyncLocalStorage.run({
			auth: () => auth,
			elevatedAuth: () => elevatedAuth,
			host: () => host
		}, async () => next());
	}
	const visitorToken = await generateVisitorTokens();
	const auth = OAuthStrategy({
		clientId: WIX_CLIENT_ID,
		tokens: visitorToken
	});
	const elevatedAuth = AppStrategy({
		appId: WIX_CLIENT_ID,
		appSecret: WIX_CLIENT_SECRET,
		instanceId: WIX_CLIENT_INSTANCE_ID,
		publicKey: WIX_CLIENT_PUBLIC_KEY
	});
	const host = createHost({
		monitoring: webMonitoring,
		req: context.request
	});
	const getAuth = () => auth;
	const store = {
		auth: getAuth,
		elevatedAuth: () => elevatedAuth,
		host: () => host
	};
	const response = await authAsyncLocalStorage.run(store, async () => next());
	if (store.auth === getAuth && context.request.headers.get("Accept")?.includes("text/html") && !context.isPrerendered) saveSessionTokensToCookie(context, visitorToken);
	return response;
};
function getExistingTokens(context) {
	const existingTokens = getSessionTokensFromCookie(context);
	if (existingTokens && existingTokens.accessToken.expiresAt + 600 > Date.now() / 1e3) return existingTokens;
	return null;
}
// node_modules/@wix/astro/build/dependencies/astro-monitor/backend-runtime/monitor.mjs
var INTERNAL_ROUTE_PREFIX = "/_wix/";
function isInternalRequest(context) {
	return context.isPrerendered && context.url.pathname.startsWith(INTERNAL_ROUTE_PREFIX);
}
var SPAN_NAME = "WIX_BACKEND_REQUEST";
function startRequestSpan(getMonitoringClient) {
	const tags = {};
	let span;
	try {
		span = getMonitoringClient()?.startSpanManual({
			name: SPAN_NAME,
			tags: () => tags
		});
	} catch {}
	return { end(response, failure) {
		try {
			if (response) tags.wixResponse = JSON.stringify({
				contentType: response.headers.get("content-type") ?? void 0,
				statusCode: response.status,
				statusText: response.statusText
			});
			if (failure) tags.wixIsHandledError = "false";
		} catch {}
		try {
			if (failure) span?.fail(failure.error);
			else span?.end();
		} catch {}
	} };
}
function getContextualHeadlessSdk() {
	return wixContext.client?.headless;
}
var isActionErrorBody = (body) => {
	const type = body?.type;
	return typeof type === "string" && type.startsWith("AstroAction");
};
var readActionError = async (response) => {
	if (response.ok || !response.headers.get("content-type")?.includes("application/json")) return;
	try {
		const body = await response.clone().json();
		if (!isActionErrorBody(body)) return;
		const message = body.message ?? (body.issues === void 0 ? `Action failed with status ${response.status}` : `Failed to validate: ${JSON.stringify(body.issues)}`);
		const error = new Error(message);
		error.name = body.type.replace("Astro", "");
		error.stack = "";
		return error;
	} catch {
		return;
	}
};
var onRequest$2 = async (context, next) => {
	const isBackendExtension = context.url.pathname.startsWith("/_wix/extensions/webhooks/") || context.url.pathname.startsWith("/_wix/extensions/service-plugins/");
	const isErrorPageRender = "error" in context.props;
	const span = isInternalRequest(context) || isBackendExtension || isErrorPageRender ? void 0 : startRequestSpan(() => monitoring.getMonitoringClient());
	const endSpan = (response, failure) => {
		(span ?? context.locals._wix?.requestSpan ?? (failure ? startRequestSpan(() => monitoring.getMonitoringClient()) : void 0))?.end(response, failure);
	};
	let response;
	let failure;
	try {
		response = await next();
	} catch (error) {
		failure = { error };
		response = new Response("Internal Server Error", {
			headers: { "Content-Type": "text/plain" },
			status: 500
		});
		if ({ "hasErrorPage": false }.hasErrorPage && !isBackendExtension) {
			endSpan(response, failure);
			throw error;
		}
	}
	try {
		if (!failure && (context.url.pathname.includes("/_actions/") || context.url.searchParams.has("_action"))) {
			const error = await readActionError(response);
			if (error) failure = { error };
		}
	} catch {}
	try {
		await getContextualHeadlessSdk()?.processResponse(response);
	} catch {}
	endSpan(response, failure);
	return response;
};
// node_modules/@wix/astro/build/dependencies/astro-html-embeds/backend-runtime/html-embeds.mjs
function injectAfterTransformStream(predicate, htmlToInject) {
	let hasInjected = false;
	return new TransformStream({ transform: (chunk, controller) => {
		if (!hasInjected) {
			const index = predicate.exec(chunk);
			if (index) {
				const position = index.index + index[0].length;
				chunk = chunk.slice(0, position) + htmlToInject + chunk.slice(position);
				hasInjected = true;
			}
		}
		controller.enqueue(chunk);
	} });
}
function injectBeforeTransformStream(predicate, htmlToInject) {
	let hasInjected = false;
	return new TransformStream({ transform: (chunk, controller) => {
		if (!hasInjected) {
			const index = chunk.indexOf(predicate);
			if (index > -1) {
				chunk = chunk.slice(0, index) + htmlToInject + chunk.slice(index);
				hasInjected = true;
			}
		}
		controller.enqueue(chunk);
	} });
}
var bodyEndTransformStream = (htmlToInject) => injectBeforeTransformStream("</body>", htmlToInject);
var headTransformStream = (htmlToInject) => injectBeforeTransformStream("</head>", htmlToInject);
var bodyStartTransformStream = (htmlToInject) => injectAfterTransformStream(/<body(?![^>]*\/>)[^>]*>/, htmlToInject);
/**
* Resolves the original, public-facing page URL for `listSiteScripts`.
*
* `context.url` is built from the request that reaches the SSR runtime. On Wix
* Managed Hosting the app runs behind a multi-hop `Fastly -> Wix runtime` chain
* where TLS is terminated at the edge and the internal hop is plain HTTP, so
* `context.url.protocol` is `http:` even when the visitor is on `https:`. The
* backend echoes this scheme/host into absolute SEO tags (`<link
* rel="canonical">`, `og:url`), which would then leak `http://…`.
*
* `X-Forwarded-Proto` is NOT a reliable fix here: it reflects the *internal*
* hop and is literally `http` in this environment (verified against the live
* worker: `x-forwarded-proto=http`, `x-forwarded-port=80`). The correct source
* of truth is `x-wix-forwarded-url`, which carries the full original public URL
* including the correct scheme (e.g. `https://www.example.com/path`).
*
* Trust assumption: `x-wix-forwarded-url` is set (and overwritten) by the Wix
* edge, so on Wix Managed Hosting a client cannot spoof it. A self-hosted
* deployment that exposes this app without an edge that strips the header would
* be trusting a client-controlled value — acceptable here because the only
* effect is the page's own resolved SEO tags, but front such a setup with a
* proxy that owns this header if that matters.
*
* Resolution order:
* 1. `x-wix-forwarded-url` — the authoritative public URL on Wix hosting. Only
*    accepted when it parses as an absolute `http(s)` URL; relative or non-HTTP
*    values (`/about`, `mailto:…`, a spoofed/malformed header) are rejected so
*    they fall through instead of producing a bogus or internal-origin URL.
* 2. `X-Forwarded-Proto` — generic fallback for non-Wix (self-hosted) setups.
* 3. `url.href` — unchanged (e.g. local dev with no proxy headers).
*/
var getPublicPageUrl = (url, headers) => {
	const forwardedUrl = headers.get("x-wix-forwarded-url");
	if (forwardedUrl != null && forwardedUrl !== "" && URL.canParse(forwardedUrl)) {
		const parsed = new URL(forwardedUrl);
		if (parsed.protocol === "https:" || parsed.protocol === "http:") return parsed.href;
	}
	const forwardedProto = headers.get("x-forwarded-proto")?.split(",")[0]?.trim().toLowerCase();
	if (forwardedProto === "http" || forwardedProto === "https") {
		const publicUrl = new URL(url.href);
		publicUrl.protocol = `${forwardedProto}:`;
		return publicUrl.href;
	}
	return url.href;
};
var onRequest$1 = async (context, next) => {
	const response = await next();
	if (response.headers.get("Content-Type") !== "text/html") return response;
	if (context.url.pathname.startsWith("/_wix")) return response;
	const { siteScripts } = await scripts.listSiteScripts({ pageUrl: getPublicPageUrl(context.url, context.request.headers) });
	if (siteScripts == null) throw new Error("Could not fetch site scripts");
	const headInjection = siteScripts.filter((x) => x.position === "HEAD").map((x) => x.html).join("\n");
	const bodyStartInjection = siteScripts.filter((x) => x.position === "BODY_START").map((x) => x.html).join("\n");
	const bodyEndInjection = siteScripts.filter((x) => x.position === "BODY_END").map((x) => x.html).join("\n");
	return new Response(response.body?.pipeThrough(new TextDecoderStream()).pipeThrough(headTransformStream(headInjection)).pipeThrough(bodyStartTransformStream(bodyStartInjection)).pipeThrough(bodyEndTransformStream(bodyEndInjection)).pipeThrough(new TextEncoderStream()), response);
};
// \0virtual:astro:middleware
var onRequest = sequence(onRequest$3, onRequest$4, onRequest$2, onRequest$1);
export { onRequest };
