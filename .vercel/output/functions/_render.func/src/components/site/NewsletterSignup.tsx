// A compact email-signup band — real submission through a dedicated one-field Wix Form (not a
// decorative input), styled after a dark, centered "pill" layout: icon + input + button in one
// rounded field. Renders its own dark section; drop it in directly, no wrapper needed.
import { useWixForm, FORM_ERROR } from "../../hooks/forms/useWixForm";
import type { FormDto } from "../../wix/forms/types";

const EMAIL_TARGET = "email_newsletter";

interface Props {
  formId: string;
  initialForm?: FormDto;
  heading?: string;
  subtext?: string;
}

export default function NewsletterSignup({
  formId,
  initialForm,
  heading = "Interview tips, in your inbox",
  subtext = "Occasional notes from Nick on interview prep. Unsubscribe anytime.",
}: Props) {
  const f = useWixForm(formId, { initialForm });
  const emailError = f.errors[EMAIL_TARGET];

  return (
    <section className="bg-navy py-16 text-navy-foreground sm:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="mt-3 text-navy-foreground/75">{subtext}</p>

        <div className="mt-8">
          {f.outcome ? (
            <p role="status" className="text-base font-medium">
              You're on the list. Thanks for subscribing.
            </p>
          ) : !f.form ? (
            f.errors[FORM_ERROR] ? (
              <p className="text-sm text-navy-foreground/70">Signup isn't available right now.</p>
            ) : (
              <div aria-busy="true" className="mx-auto h-14 w-full max-w-md animate-pulse rounded-control bg-navy-foreground/10" />
            )
          ) : f.closed ? (
            <p className="text-sm text-navy-foreground/70">{f.form.disabledMessage || "Signup isn't available right now."}</p>
          ) : (
            <form
              noValidate
              onSubmit={(e) => {
                void f.submit(e);
              }}
              className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-control sm:border sm:border-navy-foreground/15 sm:bg-navy-foreground/5 sm:p-1.5"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <div className="flex min-h-12 flex-1 items-center gap-2 rounded-control border border-navy-foreground/15 bg-navy-foreground/5 px-4 sm:border-0 sm:bg-transparent sm:px-3">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 text-navy-foreground/50">
                  <path d="M3 5.5h14v9H3v-9Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="m3.5 6 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                  className="min-h-9 w-full bg-transparent text-base text-navy-foreground placeholder:text-navy-foreground/50 focus:outline-none"
                  {...f.bind(EMAIL_TARGET)}
                />
              </div>
              <button
                type="submit"
                disabled={f.loading}
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-control bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {f.loading ? "Sending…" : "Subscribe"}
              </button>
            </form>
          )}
          {emailError && (
            <p id={`err-${EMAIL_TARGET}`} role="alert" className="mt-2 text-sm font-medium text-navy-foreground/80">
              Please enter a valid email address.
            </p>
          )}
          {f.errors[FORM_ERROR] && f.form && (
            <p role="alert" className="mt-2 text-sm font-medium text-navy-foreground/80">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
