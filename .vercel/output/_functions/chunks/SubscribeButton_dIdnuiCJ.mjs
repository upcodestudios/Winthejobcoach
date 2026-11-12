import { o as wixModule } from "./media_CxrwP6gK.mjs";
import { useRef, useSyncExternalStore } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
import { redirects } from "@wix/redirects";
// src/wix/pricing-plans/purchase-core.ts
/**
* The Create Redirect Session body for a plan: `paidPlansCheckout: { planId }` plus the callbacks.
* postFlowUrl defaults to the current page (browser); a server caller passes it explicitly.
* The return origin must be the site's real https origin as registered on the OAuth app's allowed
* domains — an unlisted or http origin 403s on return.
*/
function purchaseBody(planId, { thankYouPageUrl, postFlowUrl } = {}) {
	if (!planId) throw new Error("A plan id is required to start checkout.");
	const href = typeof window !== "undefined" ? window.location.href : "";
	return {
		paidPlansCheckout: { planId },
		callbacks: {
			postFlowUrl: postFlowUrl ?? (href || void 0),
			...thankYouPageUrl ? { thankYouPageUrl } : {}
		}
	};
}
/** The hosted checkout URL out of a redirect-session response; throws when there is none. */
function redirectUrl(session) {
	const url = session?.redirectSession?.fullUrl;
	if (!url) throw new Error("Checkout couldn't start — please try again.");
	return url;
}
// src/wix/pricing-plans/purchase.ts
var redirects$1 = wixModule(redirects);
/** Start the hosted purchase for a plan; resolves to the URL to send the browser to. */
async function purchasePlan(planId, options = {}) {
	return redirectUrl(await redirects$1.createRedirectSession(purchaseBody(planId, options)));
}
// src/wix/pricing-plans/plan-purchase-store.ts
function createPlanPurchaseStore() {
	let state = {
		purchasingId: null,
		error: null
	};
	const listeners = /* @__PURE__ */ new Set();
	function setState(patch) {
		state = {
			...state,
			...patch
		};
		for (const fn of listeners) fn();
	}
	return {
		getState: () => state,
		subscribe(fn) {
			listeners.add(fn);
			return () => listeners.delete(fn);
		},
		async purchase(planId, options) {
			setState({
				purchasingId: planId,
				error: null
			});
			try {
				window.location.href = await purchasePlan(planId, options);
			} catch (e) {
				setState({
					purchasingId: null,
					error: e instanceof Error ? e.message : String(e)
				});
				throw e;
			}
		}
	};
}
// src/hooks/pricing-plans/usePlanPurchase.ts
function usePlanPurchase() {
	const ref = useRef(null);
	if (!ref.current) ref.current = createPlanPurchaseStore();
	const store = ref.current;
	return {
		...useSyncExternalStore(store.subscribe, store.getState, store.getState),
		purchase: store.purchase
	};
}
// src/components/pricing-plans/SubscribeButton.tsx
var _jsxFileName = "/workspace/src/components/pricing-plans/SubscribeButton.tsx";
function SubscribeButton({ plan, options, children, className = "rounded-control bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50", assignedText = "This plan is assigned by the site owner." }) {
	const { purchase, purchasingId, error } = usePlanPurchase();
	if (!plan.buyable) return assignedText ? /* @__PURE__ */ jsxDEV("p", {
		className: "text-sm text-muted-foreground",
		children: assignedText
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 44
	}, this) : null;
	const purchasing = purchasingId === plan.id;
	return /* @__PURE__ */ jsxDEV("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ jsxDEV("button", {
			type: "button",
			disabled: purchasing,
			onClick: () => void purchase(plan.id, options).catch(() => {}),
			className,
			children: purchasing ? "Redirecting…" : children ?? (plan.free ? "Get this plan" : "Subscribe")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 7
		}, this), error && /* @__PURE__ */ jsxDEV("p", {
			className: "text-sm text-destructive",
			role: "alert",
			children: error
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 17
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 5
	}, this);
}
export { SubscribeButton as t };
