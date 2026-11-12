// Shipped custom login form — the member signs in on THIS site's page, never on a Wix login page.
// On managed Astro a SUCCESS navigates through Wix's authorization step and returns to `returnTo`
// (the store does that); elsewhere the tokens land in place and this form navigates itself.
import { type FormEvent, useState } from "react";
import { useMember } from "../../hooks/members/useMember";
import { PROFILE_ON_SIGNUP, type CaptchaTokens, type LoginOptions, type LoginResult } from "../../wix/members/auth";
import RecaptchaWidget from "./RecaptchaWidget";
import { executeInvisibleCaptcha } from "./recaptcha";

export interface LoginFormProps {
  onSuccess?: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const { login, register, verifyEmail, error } = useMember();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState("");
  const [verification, setVerification] = useState(false);
  const [pending, setPending] = useState(false);
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // reCAPTCHA is only in play when the site owner turned it on — Wix says so on the first submit.
  const [captcha, setCaptcha] = useState<"invisible" | "visible" | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaWidgetKey, setCaptchaWidgetKey] = useState(0);
  const [notice, setNotice] = useState("");

  // Where a SUCCESS lands: ?returnTo when it is a same-site path, else /account. With onSuccess the
  // form stays put on manual auth; on managed Astro the round trip returns to this very page.
  function returnTo(): string {
    const wanted = new URLSearchParams(window.location.search).get("returnTo");
    if (wanted?.startsWith("/") && !wanted.startsWith("//")) return wanted;
    return onSuccess ? window.location.pathname + window.location.search : "/account";
  }

  function done() {
    if (onSuccess) return onSuccess();
    window.location.assign(returnTo());
  }

  // Switching between sign in and sign up drops any pending challenge, so a signup-only CAPTCHA
  // never leaks into the sign-in form.
  function switchMode(next: "login" | "register") {
    setMode(next);
    setCaptcha(null);
    setCaptchaToken("");
    setNotice("");
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setNotice("");
    try {
      const send = (captchaTokens?: CaptchaTokens) => {
        const options: LoginOptions = { returnTo: returnTo(), ...(captchaTokens ? { captchaTokens } : {}) };
        return mode === "login"
          ? login(email, password, options)
          : register(email, password, PROFILE_ON_SIGNUP ? { firstName, lastName } : undefined, options);
      };

      let result: LoginResult = await send(captcha === "visible" && captchaToken ? { recaptchaToken: captchaToken } : undefined);
      // Wix asks for a reCAPTCHA token before it will create an account. Clear the invisible one
      // without showing anything; a visible challenge becomes the widget below.
      if (result.state === "FAILURE" && result.captcha === "invisible") {
        try {
          result = await send({ invisibleRecaptchaToken: await executeInvisibleCaptcha("signup") });
        } catch (e) {
          setNotice(e instanceof Error ? e.message : String(e));
          return;
        }
      }
      if (result.state === "FAILURE" && result.captcha) {
        setCaptcha("visible");
        setCaptchaToken("");
        setCaptchaWidgetKey((key) => key + 1);
        return;
      }
      // A reCAPTCHA token is single-use: any other answer means the visitor needs a fresh widget.
      if (captcha === "visible") {
        setCaptchaWidgetKey((key) => key + 1);
        setCaptchaToken("");
      }
      if (result.state === "SUCCESS" && result.redirectUrl) return; // navigating to Wix and back
      if (result.state === "SUCCESS") done();
      if (result.state === "EMAIL_VERIFICATION_REQUIRED") setVerification(true);
      if (result.state === "OWNER_APPROVAL_REQUIRED") setPending(true);
    } finally {
      setBusy(false);
    }
  }

  async function submitCode(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      const result = await verifyEmail(code);
      if (result.state === "SUCCESS" && result.redirectUrl) return; // navigating to Wix and back
      if (result.state === "SUCCESS") done();
      if (result.state === "OWNER_APPROVAL_REQUIRED") setPending(true);
    } finally {
      setBusy(false);
    }
  }

  if (pending)
    return (
      <p className="rounded-lg border border-border p-4 text-sm">
        Your account is awaiting approval.
      </p>
    );
  if (verification) {
    return (
      <form onSubmit={submitCode} className="space-y-4">
        <label className="block text-sm">
          Verification code
          <input
            required
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="mt-1 w-full rounded border border-border bg-background p-2"
          />
        </label>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button
          disabled={busy}
          className="rounded bg-primary px-4 py-2 text-primary-foreground"
        >
          {busy ? "Verifying…" : "Verify"}
        </button>
      </form>
    );
  }
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => switchMode("login")}
          className="text-sm underline"
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => switchMode("register")}
          className="text-sm underline"
        >
          Sign up
        </button>
      </div>
      {mode === "register" && PROFILE_ON_SIGNUP && (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            First name
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="mt-1 w-full rounded border border-border bg-background p-2"
            />
          </label>
          <label className="text-sm">
            Last name
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="mt-1 w-full rounded border border-border bg-background p-2"
            />
          </label>
        </div>
      )}
      <label className="block text-sm">
        Email
        <input
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-1 w-full rounded border border-border bg-background p-2"
        />
      </label>
      <div className="text-sm">
        <label htmlFor="member-password">Password</label>
        <div className="relative mt-1">
          <input
            id="member-password"
            required
            type={showPassword ? "text" : "password"}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded border border-border bg-background p-2 pr-11"
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            title={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="M3 3l18 18" />
                <path d="M10.6 6.2A9.7 9.7 0 0 1 12 6c5 0 9 6 9 6a17 17 0 0 1-2.6 3.1M6.4 7.8A17 17 0 0 0 3 12s4 6 9 6a9.4 9.4 0 0 0 3.1-.5" />
                <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
                <path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {captcha === "visible" && (
        <div className="space-y-1">
          <RecaptchaWidget key={captchaWidgetKey} onToken={setCaptchaToken} />
          <p className="text-xs text-muted-foreground">Check the box above, then submit again.</p>
        </div>
      )}
      {notice && <p className="text-sm text-destructive">{notice}</p>}
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        disabled={busy}
        className="rounded bg-primary px-4 py-2 text-primary-foreground"
      >
        {busy ? "Working…" : mode === "login" ? "Sign in" : "Create account"}
      </button>
    </form>
  );
}
