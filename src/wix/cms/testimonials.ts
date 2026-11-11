// Testimonials collection reads — the plan's fields: name, title, company, quote, longQuote,
// photo, featured, order. SSR only; the collection is public-read.
import { queryItems } from "./items";

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  longQuote: string;
  photo: string;
  featured: boolean;
  order: number;
}

const str = (v: unknown) => (typeof v === "string" ? v : "");

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const page = await queryItems("Testimonials", { sort: [{ field: "order", direction: "asc" }], limit: 20 });
    return page.items.map((i) => ({
      id: i._id,
      name: str(i.name),
      title: str(i.title),
      company: str(i.company),
      quote: str(i.quote),
      longQuote: str(i.longQuote),
      photo: str(i.photo),
      featured: i.featured === true,
      order: typeof i.order === "number" ? i.order : 0,
    }));
  } catch {
    // An unguarded SSR throw truncates the response; pages render without the proof block.
    return [];
  }
}
