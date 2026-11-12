// Shipped custom login form — the member signs in on THIS site's page, never on a Wix login page.
// On managed Astro a SUCCESS navigates through Wix's authorization step and returns to `returnTo`
// (the store does that); elsewhere the tokens land in place and this form navigates itself.
import { type FormEvent, useId, useState } from "react";
import { useMember } from "../../hooks/members/useMember";
import { PROFILE_ON_SIGNUP } from "../../wix/members/auth";

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
  const passwordId = useId();

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

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      const options = { returnTo: returnTo() };
      const result =
        mode === "login"
          ? await login(email, password, options)
          : await register(email, password, PROFILE_ON_SIGNUP ? { firstName, lastName } : undefined, options);
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
          onClick={() => setMode("login")}
          className="text-sm underline"
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
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
      <div className="block text-sm">
        <label htmlFor={passwordId}>Password</label>
        <div className="relative mt-1">
          <input
            id={passwordId}
            required
            type={showPassword ? "text" : "password"}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded border border-border bg-background p-2 pr-11"
          />
          <button
            type="button"
            onClick={() => setShowPassword((shown) => !shown)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            aria-controls={passwordId}
            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded-r text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {showPassword ? (
                <>
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </>
              ) : (
                <>
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
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
