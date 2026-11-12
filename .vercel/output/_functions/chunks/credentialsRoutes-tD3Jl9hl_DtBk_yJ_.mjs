import { a as string, i as object } from "./schemas-DFj5JkSz_BjAleFAH.mjs";
import { i as clearVerificationState, n as assertLoggedOut, o as loginStateResult, r as authRoute, t as AuthRequestError } from "./session-BdH_CwUE_BHJxsIwe.mjs";
import { getContextualAuth } from "@wix/sdk-runtime/context";
// node_modules/@wix/astro/build/dependencies/astro-auth/backend-runtime/credentialsRoutes-tD3Jl9hl.mjs
var credentials = object({
	email: string().min(1),
	failureUrl: string().optional(),
	invisibleRecaptchaToken: string().optional(),
	password: string().min(1),
	recaptchaToken: string().optional(),
	returnToUrl: string().default("/")
});
/** Signing in and signing up differ only in which SDK call submits the credentials. */
function credentialsRoute(operation) {
	return authRoute(credentials, async (input, { request, url }) => {
		const auth = getContextualAuth();
		assertLoggedOut(auth);
		const state = await submit(auth, operation, input);
		return loginStateResult(state, {
			auth,
			challenge: { kind: "start" },
			operation,
			request,
			returnToUrl: input.returnToUrl,
			url
		});
	});
}
async function submit(auth, operation, input) {
	const params = {
		captchaTokens: {
			invisibleRecaptchaToken: input.invisibleRecaptchaToken,
			recaptchaToken: input.recaptchaToken
		},
		email: input.email,
		password: input.password
	};
	try {
		return operation === "login" ? await auth.login(params) : await auth.register(params);
	} catch {
		throw new AuthRequestError("AUTH_SERVICE_ERROR", 502, [clearVerificationState()]);
	}
}
var loginRoute = credentialsRoute("login");
var signupRoute = credentialsRoute("signup");
export { signupRoute as n, loginRoute as t };
