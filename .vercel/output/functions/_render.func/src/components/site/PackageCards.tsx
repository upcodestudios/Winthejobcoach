// Coaching-package cards: a background photo that desaturates until hovered, a letter-flip
// heading and a rotating arrow, in the brand's navy/orange tokens. Price comes from the Astro
// page's server-side Wix read (prop), never typed in here.
import { motion, type Variants } from "framer-motion";

export interface PackageCardData {
  name: string;
  slug: string;
  tagline: string;
  price?: string;
  imageSrc: string;
  /** CSS background-position; these are tall portrait photos cropped into a short wide card,
   * so most need the focal point pulled up toward the face. Defaults to "center". */
  imagePosition?: string;
}

interface Props {
  packages: PackageCardData[];
}

export default function PackageCards({ packages }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {packages.map((pkg) => (
        <Card key={pkg.slug} {...pkg} />
      ))}
    </div>
  );
}

function Card({ name, slug, tagline, price, imageSrc, imagePosition = "center" }: PackageCardData) {
  return (
    <motion.a
      href={`/services/${slug}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative flex h-64 w-full flex-col justify-between overflow-hidden rounded-lg bg-navy p-5 no-underline"
    >
      <motion.div
        variants={{ rest: { scale: 1, filter: "saturate(0)" }, hover: { scale: 1.08, filter: "saturate(1)" } }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url("${imageSrc}")`, backgroundPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/55 to-navy/25" />

      <motion.span
        aria-hidden="true"
        variants={{ rest: { rotate: 0 }, hover: { rotate: -45 } }}
        transition={{ duration: 0.4 }}
        className="relative z-10 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-navy-foreground/15 text-navy-foreground"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.span>

      <div className="relative z-10">
        <h3 className="flex flex-wrap text-xl font-semibold text-navy-foreground">
          {name.split(" ").map((word, w) => (
            <span key={w} className="inline-flex whitespace-nowrap">
              {word.split("").map((letter, i) => (
                <AnimatedLetter letter={letter} key={i} />
              ))}
              {w < name.split(" ").length - 1 && <AnimatedLetter letter=" " key="space" />}
            </span>
          ))}
        </h3>
        <p className="mt-1 text-sm text-navy-foreground/80">{tagline}</p>
        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-navy-foreground">
          {price && <span>{price}</span>}
          <span className="text-navy-foreground/70">View details</span>
        </div>
      </div>
    </motion.a>
  );
}

const letterVariants: Variants = {
  hover: { y: "-50%" },
};

function AnimatedLetter({ letter }: { letter: string }) {
  return (
    <span className="inline-block h-[1.4em] overflow-hidden">
      <motion.span className="flex flex-col" variants={letterVariants} transition={{ duration: 0.35 }}>
        <span>{letter === " " ? " " : letter}</span>
        <span aria-hidden="true">{letter === " " ? " " : letter}</span>
      </motion.span>
    </span>
  );
}
