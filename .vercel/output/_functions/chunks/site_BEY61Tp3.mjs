// src/data/site.ts
/** The address the site will answer on once launched; canonical URLs and the sitemap use it. */
var SITE_ORIGIN = "https://winthejobcoach.com";
var SITE_NAME = "Win The Job Interview Coaching";
var PERSON_ID = `${SITE_ORIGIN}/about#nick-fennell`;
var ORG_ID = `${SITE_ORIGIN}/#organization`;
var NICK = {
	name: "Nick Fennell",
	jobTitle: "Interview Coach",
	description: "Interview coach with 25 years of experience in corporate learning and development, helping job seekers prepare for interviews from first roles to leadership positions."
};
var LOCALITY = {
	addressLocality: "Fort Lee",
	addressRegion: "NJ",
	addressCountry: "US"
};
/** Public routes that belong in the sitemap (account, login, booking-confirmed and 404 are left out). */
var SITEMAP_PATHS = [
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
	"/terms"
];
var personSchema = () => ({
	"@type": "Person",
	"@id": PERSON_ID,
	name: NICK.name,
	jobTitle: NICK.jobTitle,
	description: NICK.description,
	url: `${SITE_ORIGIN}/about`,
	worksFor: { "@id": ORG_ID },
	workLocation: {
		"@type": "Place",
		address: {
			"@type": "PostalAddress",
			...LOCALITY
		}
	}
});
var organizationSchema = () => ({
	"@type": "ProfessionalService",
	"@id": ORG_ID,
	name: SITE_NAME,
	url: `${SITE_ORIGIN}/`,
	founder: { "@id": PERSON_ID },
	areaServed: "Worldwide (live on Zoom) and Fort Lee, NJ (in person)",
	address: {
		"@type": "PostalAddress",
		...LOCALITY
	}
});
var serviceSchema = (o) => ({
	"@type": "Service",
	"@id": `${SITE_ORIGIN}/services/${o.slug}#service`,
	name: o.name,
	description: o.description,
	url: `${SITE_ORIGIN}/services/${o.slug}`,
	serviceType: "Interview coaching",
	provider: {
		"@type": "Person",
		"@id": PERSON_ID,
		name: NICK.name
	},
	areaServed: "Worldwide (live on Zoom) and Fort Lee, NJ (in person)"
});
export { personSchema as a, organizationSchema as i, SITE_NAME as n, serviceSchema as o, SITE_ORIGIN as r, SITEMAP_PATHS as t };
