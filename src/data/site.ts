// Site-wide SEO facts. No prices and no street address live here: prices are read from Wix, and
// the office street line waits for Nick's confirmation (locality only: Fort Lee, NJ).

/** The address the site will answer on once launched; canonical URLs and the sitemap use it. */
export const SITE_ORIGIN = "https://winthejobcoach.com";

/**
 * Launch switch. While false: every page carries `noindex, nofollow`. Flipping it is the
 * "remove noindex" step, which waits for Dimitri's go (Session 8). robots.txt is not ours: the
 * Wix runtime (`@wix/astro`, astro-robots) serves the platform's own robots.txt at that path.
 */
export const SITE_LIVE = false;

export const SITE_NAME = "Win The Job Interview Coaching";
export const PERSON_ID = `${SITE_ORIGIN}/about#nick-fennell`;
export const ORG_ID = `${SITE_ORIGIN}/#organization`;

export const NICK = {
  name: "Nick Fennell",
  jobTitle: "Interview Coach",
  description:
    "Interview coach with 25 years of experience in corporate learning and development, helping job seekers prepare for interviews from first roles to leadership positions.",
};

export const LOCALITY = { addressLocality: "Fort Lee", addressRegion: "NJ", addressCountry: "US" };

/** Public routes that belong in the sitemap (account, login, booking-confirmed and 404 are left out). */
export const SITEMAP_PATHS = [
  "/",
  "/services",
  "/services/free-consultation",
  "/services/interview-ready",
  "/services/interview-accelerator",
  "/services/win-the-job-intensive",
  "/services/executive-interview-coaching",
  "/services/mock-interviews",
  "/services/esl-coaching",
  "/services/linkedin-resume",
  "/services/presentation-skills",
  "/how-it-works",
  "/about",
  "/book",
  "/booking-policy",
  "/contact",
  "/privacy",
  "/terms",
];

export const personSchema = () => ({
  "@type": "Person",
  "@id": PERSON_ID,
  name: NICK.name,
  jobTitle: NICK.jobTitle,
  description: NICK.description,
  url: `${SITE_ORIGIN}/about`,
  worksFor: { "@id": ORG_ID },
  workLocation: { "@type": "Place", address: { "@type": "PostalAddress", ...LOCALITY } },
});

export const organizationSchema = () => ({
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: `${SITE_ORIGIN}/`,
  founder: { "@id": PERSON_ID },
  areaServed: "Worldwide (live on Zoom) and Fort Lee, NJ (in person)",
  address: { "@type": "PostalAddress", ...LOCALITY },
});

export const serviceSchema = (o: { slug: string; name: string; description: string }) => ({
  "@type": "Service",
  "@id": `${SITE_ORIGIN}/services/${o.slug}#service`,
  name: o.name,
  description: o.description,
  url: `${SITE_ORIGIN}/services/${o.slug}`,
  serviceType: "Interview coaching",
  provider: { "@type": "Person", "@id": PERSON_ID, name: NICK.name },
  areaServed: "Worldwide (live on Zoom) and Fort Lee, NJ (in person)",
});
