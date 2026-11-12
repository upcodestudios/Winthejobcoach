import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { n as WIX_CLIENT_PUBLIC_KEY, r as WIX_CLIENT_SECRET } from "./server_BgHdweE2.mjs";
// node_modules/@wix/astro/build/dependencies/astro-backend-extensions/backend-runtime/routes/extensions.mjs
var extensions_exports = /* @__PURE__ */ __exportAll({ ALL: () => ALL });
var authOptions = {
	appSecret: WIX_CLIENT_SECRET,
	publicKey: WIX_CLIENT_PUBLIC_KEY
};
var runExtension = await createServeExtensionRunner();
var ALL = async (context) => {
	const componentId = context.params.id;
	if (componentId == null) return new Response(null, { status: 404 });
	return runExtension({
		componentId,
		context,
		payload: await context.request.text(),
		url: context.request.url
	});
};
async function createServeExtensionRunner() {
	const { entries } = await import("./wix-backend-entries_Gh5F1Tgs.mjs");
	return async ({ componentId, context, payload, url }) => {
		const loadModule = entries[componentId];
		if (loadModule == null) return new Response(null, { status: 404 });
		const result = await (await loadModule()).default({
			authOptions,
			context,
			payload,
			url
		});
		return Response.json(result ?? null);
	};
}
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-backend-extensions/backend-runtime/routes/extensions@_@mjs
var page = () => extensions_exports;
export { page };
