import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { a as string, i as object } from "./schemas-DFj5JkSz_BjAleFAH.mjs";
import { a as consumeVerificationState, n as assertLoggedOut, o as loginStateResult, r as authRoute, t as AuthRequestError } from "./session-BdH_CwUE_BHJxsIwe.mjs";
import { LoginState } from "@wix/sdk";
import { getContextualAuth } from "@wix/sdk-runtime/context";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/verify-email.mjs
var verify_email_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var rejectionStatuses = /* @__PURE__ */ new Set([
	400,
	401,
	403,
	404,
	409,
	422
]);
var verificationSchema = object({
	failureUrl: string().optional(),
	verificationCode: string().trim().min(1)
});
var POST = authRoute(verificationSchema, async (input, { cookies, publicUrl, request, url }) => {
	const auth = getContextualAuth();
	const pending = consumeVerificationState(cookies, publicUrl);
	assertLoggedOut(auth);
	const state = await verifyCode(auth, input.verificationCode, pending.stateToken);
	return loginStateResult(state, {
		auth,
		challenge: {
			expiresAt: pending.expiresAt,
			kind: "continue"
		},
		operation: "verify-email",
		request,
		returnToUrl: pending.returnToUrl,
		url
	});
});
async function verifyCode(auth, verificationCode, stateToken) {
	try {
		return await auth.processVerification({ verificationCode }, {
			data: { stateToken },
			loginState: LoginState.EMAIL_VERIFICATION_REQUIRED
		});
	} catch (error) {
		throw rejectionStatuses.has(error?.status) ? new AuthRequestError("VERIFICATION_FAILED", 422) : new AuthRequestError("AUTH_SERVICE_ERROR", 502);
	}
}
// \0virtual:astro:page:node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/routes/verify-email@_@mjs
var page = () => verify_email_exports;
export { page };
