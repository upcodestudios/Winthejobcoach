// Win The Job contact form — renders whatever fields the Wix form holds (never names a field in
// code), so Nick can rename, reorder or add a field in his dashboard and the page follows.
// Wording for the thank-you, the failure message and the field errors is the approved
// Contact page copy (07-Content/WTJ_Contact_Page_Copy_v1.0.md).
import { useWixForm, FORM_ERROR } from "../../hooks/forms/useWixForm";
import type { FormDto, FormFieldDto } from "../../wix/forms/types";

const inputClass =
  "mt-1.5 block min-h-11 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-base text-foreground focus:border-primary focus:outline-2 focus:outline-offset-1 focus:outline-primary";

function errorText(field: FormFieldDto, value: unknown): string {
  if (field.control === "email") return "Please enter a valid email address.";
  if (field.control === "phone") {
    return !value ? "Please add a phone number so I can call you." : "Please enter a valid phone number.";
  }
  return "Please fill in this field.";
}

export default function ContactForm({ formId, initialForm }: { formId: string; initialForm?: FormDto }) {
  const f = useWixForm(formId, { initialForm });

  if (f.outcome) {
    return (
      <div role="status" className="rounded-lg border border-border bg-secondary p-6">
        <p className="text-lg font-semibold text-foreground">Thanks, I've got your message and I'll be in touch.</p>
        <p className="mt-2 text-base text-muted-foreground">
          If your interview is coming up soon, you can also{" "}
          <a href="/services/free-consultation" className="font-medium text-primary underline">
            book a free 30-minute Zoom consultation
          </a>
          .
        </p>
      </div>
    );
  }
  if (!f.form) {
    if (f.errors[FORM_ERROR]) {
      return <p className="text-base text-destructive">Something went wrong and the form couldn't load. Please call 551.225.0583.</p>;
    }
    return <div aria-busy="true" className="h-64 animate-pulse rounded-lg bg-secondary" />;
  }
  if (f.closed) {
    return <p className="text-base text-muted-foreground">{f.form.disabledMessage || "This form isn't taking messages right now. Please call 551.225.0583."}</p>;
  }

  const form = f.form;
  const required = (field: FormFieldDto) => field.required && form.requiredIndicator === "ASTERISK";

  return (
    <form
      noValidate
      onSubmit={async (e) => {
        await f.submit(e);
      }}
      className="grid gap-5"
    >
      {form.fields.map((field) => {
        const err = f.errors[field.target];
        const id = `f-${field.target}`;
        const errId = `err-${field.target}`;
        const label = (
          <span className="text-sm font-semibold text-foreground">
            {field.label}
            {required(field) && <span aria-hidden="true"> *</span>}
          </span>
        );
        const help = field.description ? <p className="mt-1 text-sm text-muted-foreground">{field.description}</p> : null;
        const error = err ? (
          <p id={errId} role="alert" className="mt-1.5 text-sm font-medium text-destructive">
            {errorText(field, f.values[field.target])}
          </p>
        ) : null;

        if (field.control === "radio") {
          return (
            <fieldset key={field.target} aria-describedby={err ? errId : undefined}>
              <legend>{label}</legend>
              <div className="mt-2 flex flex-wrap gap-3">
                {field.choices.map((c) => (
                  <label
                    key={c.value}
                    className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-control border border-border bg-white px-4 text-base has-[:checked]:border-primary has-[:checked]:bg-secondary"
                  >
                    <input
                      type="radio"
                      name={field.target}
                      value={c.value}
                      checked={f.values[field.target] === c.value}
                      onChange={() => f.setValues((v) => ({ ...v, [field.target]: c.value }))}
                      onBlur={() => f.validate(field.target)}
                    />
                    {c.label}
                  </label>
                ))}
              </div>
              {help}
              {error}
            </fieldset>
          );
        }

        let control;
        if (field.control === "textarea") {
          control = <textarea id={id} rows={5} className={inputClass} aria-required={field.required || undefined} {...f.bind(field.target)} />;
        } else if (field.control === "select") {
          control = (
            <select id={id} className={inputClass} aria-required={field.required || undefined} {...f.bind(field.target)}>
              <option value="">Choose one</option>
              {field.choices.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          );
        } else {
          const type =
            field.control === "email" ? "email" : field.control === "phone" ? "tel" : field.control === "date" ? "date" : "text";
          control = (
            <input
              id={id}
              type={type}
              autoComplete={field.control === "email" ? "email" : field.control === "phone" ? "tel" : undefined}
              className={inputClass}
              aria-required={field.required || undefined}
              {...f.bind(field.target)}
            />
          );
        }
        return (
          <div key={field.target}>
            <label htmlFor={id}>{label}</label>
            {help}
            {control}
            {error}
          </div>
        );
      })}

      {f.errors[FORM_ERROR] && (
        <p role="alert" className="text-base font-medium text-destructive">
          Something went wrong and your message wasn't sent. Please try again, or call 551.225.0583.
        </p>
      )}
      <div>
        <button
          type="submit"
          disabled={f.loading}
          className="inline-flex h-12 items-center justify-center rounded-control bg-primary px-8 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {f.loading ? "Sending…" : form.submitText || "Send message"}
        </button>
        <p className="mt-3 text-sm text-muted-foreground">
          Read how your details are handled in the{" "}
          <a href="/privacy" className="text-primary underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
