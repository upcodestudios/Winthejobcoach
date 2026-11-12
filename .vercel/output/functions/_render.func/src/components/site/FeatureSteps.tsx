// Auto-advancing step list with a crossfading image panel (the "advantage" section pattern
// Dimitri asked for). Steps dim to 45% opacity when not active rather than collapsing, so
// there's no layout shift and all copy stays in the rendered HTML for SEO. Each step can take
// a real `imageSrc`; until Nick supplies step photos, the panel renders a labeled placeholder
// instead of a stock photo standing in for his own business. Title and steps share the left
// column; the image column sticks in place (lg+) as you scroll past the steps, matching the
// reference layout — so the heading lives in here rather than in the Astro page, since a
// framework island only takes Astro's default slot, not named ones.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FeatureStepItem {
  step: string;
  title: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface Props {
  title?: string;
  steps: FeatureStepItem[];
  autoPlayInterval?: number;
}

export default function FeatureSteps({ title, steps, autoPlayInterval = 4000 }: Props) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = steps.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const tick = 100;
    const increment = (tick / autoPlayInterval) * 100;
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p + increment < 100) return p + increment;
        setActive((a) => (a + 1) % count);
        return 0;
      });
    }, tick);
    return () => clearInterval(timer);
  }, [paused, autoPlayInterval, count]);

  function select(i: number) {
    setActive(i);
    setProgress(0);
  }

  return (
    <div
      className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div>
        {title && <h2 className="text-3xl text-foreground sm:text-4xl">{title}</h2>}
        <div className={title ? "mt-8 space-y-1" : "space-y-1"}>
          {steps.map((item, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <motion.div key={item.step} initial={false} animate={{ opacity: isActive ? 1 : 0.45 }} transition={{ duration: 0.4 }}>
              <button
                type="button"
                onClick={() => select(i)}
                className="flex w-full items-start gap-4 rounded-lg p-2 text-left transition-colors hover:bg-secondary"
              >
                <span
                  className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold ${
                    isActive || isDone ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
                  }`}
                >
                  {isDone ? "✓" : i + 1}
                  {isActive && (
                    <svg className="absolute inset-0 -rotate-90" viewBox="0 0 32 32" aria-hidden="true">
                      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={2 * Math.PI * 14}
                        strokeDashoffset={2 * Math.PI * 14 * (1 - progress / 100)}
                        style={{ transition: "stroke-dashoffset 0.1s linear" }}
                      />
                    </svg>
                  )}
                </span>
                <span>
                  <span className="block text-xl text-foreground">{item.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.body}</span>
                </span>
              </button>
            </motion.div>
          );
          })}
        </div>
      </div>

      <div className="lg:sticky lg:top-36">
        <div className="relative h-[260px] overflow-hidden rounded-lg sm:h-[340px] lg:h-[420px]">
          <AnimatePresence mode="wait">
            {steps.map(
              (item, i) =>
                i === active && (
                  <motion.div
                    key={item.step}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {item.imageSrc ? (
                      <img src={item.imageSrc} alt={item.imageAlt ?? item.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-border bg-secondary px-6 text-center text-muted-foreground">
                        <span className="text-sm font-semibold uppercase tracking-wide">Image placeholder — step {i + 1}</span>
                        <span className="text-xs">Recommended 1600 &times; 1200px (4:3), landscape, under ~300KB</span>
                      </div>
                    )}
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
