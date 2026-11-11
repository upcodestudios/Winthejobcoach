// PageContent collection reads — Tier 2 of the client-content-self-edit scope
// (02-Architecture/WTJ_Client-Content-Self-Edit_Scope_v1.0.md): the Home / About / How-it-works
// body copy Nick asked to edit himself, one item per page (`pageId`: "home" | "about" |
// "how-it-works"). SSR only; the collection is public-read.
//
// Unlike Offerings/Testimonials, a missing or cleared field here falls back to the page's own
// hardcoded default (passed in by the caller) instead of going blank — a Wix outage or a bad edit
// should never empty the homepage hero, it should just keep serving the last-known-good copy.
import { getItemBy } from "./items";

export interface StepItem {
  title: string;
  body: string;
}

const str = (v: unknown, fallback: string) => (typeof v === "string" && v.trim() !== "" ? v : fallback);

const steps = (v: unknown, fallback: StepItem[]): StepItem[] => {
  if (!Array.isArray(v) || v.length === 0) return fallback;
  const cleaned = v.filter(
    (s): s is StepItem => !!s && typeof s === "object" && typeof (s as any).title === "string" && typeof (s as any).body === "string",
  );
  return cleaned.length > 0 ? cleaned : fallback;
};

const list = (v: unknown, fallback: string[]): string[] => {
  if (!Array.isArray(v)) return fallback;
  const cleaned = v.filter((s): s is string => typeof s === "string");
  return cleaned.length > 0 ? cleaned : fallback;
};

/**
 * Merge a `PageContent` item over the page's own hardcoded defaults. Only the keys present in
 * `defaults` are read, and each one is typed by its default's shape (string, string[], or
 * StepItem[]) — the defaults double as the schema. A failed SSR read, a missing item, or an empty
 * field each resolve to the default, not an empty value.
 */
export async function fetchPageContent<T extends Record<string, unknown>>(pageId: string, defaults: T): Promise<T> {
  let item: Record<string, unknown> | null = null;
  try {
    item = await getItemBy("PageContent", "pageId", pageId);
  } catch {
    // Guarded: an unhandled SSR throw truncates the response mid-stream. Fall back to defaults below.
  }
  if (!item) return defaults;

  const result = {} as T;
  for (const key of Object.keys(defaults) as (keyof T)[]) {
    const fallback = defaults[key];
    const raw = item[key as string];
    if (typeof fallback === "string") {
      result[key] = str(raw, fallback) as T[keyof T];
    } else if (Array.isArray(fallback) && fallback.length > 0 && typeof fallback[0] === "object" && fallback[0] !== null && "title" in (fallback[0] as object)) {
      result[key] = steps(raw, fallback as unknown as StepItem[]) as unknown as T[keyof T];
    } else if (Array.isArray(fallback)) {
      result[key] = list(raw, fallback as string[]) as unknown as T[keyof T];
    } else {
      result[key] = fallback;
    }
  }
  return result;
}
