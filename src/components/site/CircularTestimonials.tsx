// A testimonial carousel: one card, word-by-word blur-in quote, circular prev/next controls,
// autoplay. Adapted from a "circular testimonials" pattern that rotates headshots left/center/
// right — dropped here, on purpose: both of Nick's testimonials are real, named professionals
// (Timothy R. Clark, Ph.D.; Andre Hewitt, Esq.) and neither supplied a photo (the Testimonials
// CMS collection has a `photo` field, just empty today). A stock photo standing in for a real
// person's likeness would misrepresent them, so the avatar is their initials in a navy circle
// until Nick adds a real photo, which `photo` already supports.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TestimonialItem {
  name: string;
  title?: string;
  company?: string;
  quote: string;
  photo?: string;
}

interface Props {
  testimonials: TestimonialItem[];
  autoplayMs?: number;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function CircularTestimonials({ testimonials, autoplayMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = testimonials.length;
  const active = useMemo(() => testimonials[index], [testimonials, index]);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (count < 2 || paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    timerRef.current = setInterval(next, autoplayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count, paused, autoplayMs, next]);

  useEffect(() => {
    if (count < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, prev, next]);

  if (count === 0) return null;
  const byline = [active.title, active.company].filter(Boolean).join(", ");

  return (
    <div
      className="rounded-lg bg-navy p-8 text-navy-foreground sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-start gap-5">
        <div className="hidden shrink-0 sm:block">
          {active.photo ? (
            <img src={active.photo} alt={active.name} className="h-16 w-16 rounded-full object-cover" />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-foreground/10 text-lg font-semibold">
              {initials(active.name)}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <blockquote className="text-xl leading-relaxed sm:text-2xl">
                “
                {active.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ filter: "blur(8px)", opacity: 0, y: 4 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * i }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
                ”
              </blockquote>
              <p className="mt-5 text-sm">
                <span className="font-semibold">{active.name}</span>
                {byline && <span className="text-navy-foreground/70"> · {byline}</span>}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {count > 1 && (
        <div className="mt-7 flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="ml-1 flex gap-1.5" aria-hidden="true">
            {testimonials.map((_, i) => (
              <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-primary" : "bg-navy-foreground/25"}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
