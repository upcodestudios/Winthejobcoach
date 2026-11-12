// reCAPTCHA for the in-app sign-in/sign-up form. Wix's headless docs are explicit: use WIX's
// Enterprise site keys, never your own — the SDK ships them as OAuthStrategy.captchaVisibleSiteKey /
// captchaInvisibleSiteKey (node_modules/@wix/sdk/build/auth/oauth2/OAuthStrategy.js). They are
// public values, so they live here rather than in an environment variable.
//   docs: https://dev.wix.com/docs/go-headless/authentication/members/custom-login-page/re-captcha/add-re-captcha-to-a-custom-login-page-js-sdk
// The site owner decides whether Wix demands a token at all (Dashboard → Settings → Site Member
// Settings → Signup & Login Security). The form only asks for one after Wix says so.

/** The visible checkbox widget's key — Wix's key for the "Always" setting. */
export const WIX_RECAPTCHA_VISIBLE_SITE_KEY = "6Ld0J8IcAAAAANyrnxzrRlX1xrrdXsOmsepUYosy";
/** The invisible widget's key — Wix's key for the "for suspected bots" setting. */
export const WIX_RECAPTCHA_INVISIBLE_SITE_KEY = "6LdoPaUfAAAAAJphvHoUoOob7mx0KDlXyXlgrx5v";

/** The slice of Google's Enterprise API this app uses. */
export interface WixRecaptcha {
  ready(callback: () => void): void;
  render(container: HTMLElement, parameters: Record<string, unknown>): number;
  execute(siteKey: string, options?: { action?: string }): Promise<string>;
  reset(widgetId?: number): void;
}

declare global {
  interface Window {
    grecaptcha?: { enterprise?: WixRecaptcha };
  }
}

let loading: Promise<WixRecaptcha> | null = null;

/** Load Google's Enterprise script once per page (safe to call from every render attempt). */
export function loadRecaptcha(): Promise<WixRecaptcha> {
  if (loading) return loading;
  loading = new Promise<WixRecaptcha>((resolve, reject) => {
    const ready = () => {
      const enterprise = window.grecaptcha?.enterprise;
      if (!enterprise) return reject(new Error("The CAPTCHA could not start. Reload the page and try again."));
      enterprise.ready(() => resolve(enterprise));
    };
    if (window.grecaptcha?.enterprise) return ready();
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/enterprise.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = ready;
    script.onerror = () => {
      loading = null;
      reject(new Error("The CAPTCHA could not load. Check your connection and try again."));
    };
    document.head.appendChild(script);
  });
  return loading;
}

/** Run the invisible reCAPTCHA and hand back its token (retried automatically, never shown). */
export async function executeInvisibleCaptcha(action: string): Promise<string> {
  const enterprise = await loadRecaptcha();
  return enterprise.execute(WIX_RECAPTCHA_INVISIBLE_SITE_KEY, { action });
}
