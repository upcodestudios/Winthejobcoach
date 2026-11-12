import { o as wixModule, r as imgSrc } from "./media_CxrwP6gK.mjs";
import { services } from "@wix/bookings";
// src/wix/bookings/services-core.ts
/** The Wix Bookings app id — the cart's catalogReference.appId and the services filter. */
var BOOKINGS_APP_ID = "13d21c63-b5ec-5912-8397-c3a5ddb27a97";
/**
* Requested on every service read: without STAFF_MEMBER_DETAILS `staffMemberDetails` is absent (staff
* = []); without DISCOUNT_INFO_DETAILS `payment.discountInfo` is absent (no discount is ever shown).
*/
var SERVICES_CONDITIONAL_FIELDS = ["STAFF_MEMBER_DETAILS", "DISCOUNT_INFO_DETAILS"];
var SERVICE_TYPES = [
	"APPOINTMENT",
	"CLASS",
	"COURSE"
];
var RATE_TYPES = [
	"FIXED",
	"VARIED",
	"CUSTOM",
	"NO_FEE",
	"SUBSCRIPTION"
];
var rawId = (raw) => raw?._id ?? raw?.id ?? "";
/**
* A media value the image helpers can resolve. The SDK hands over a `wix:image://v1/<id>/<name>#…`
* string (or an https URL); REST hands over the image OBJECT with a bare file id — rebuilt into the
* same `wix:image://` form the SDK produces, so imgSrc scales both identically.
*/
function mediaValue(image) {
	if (!image || typeof image === "string") return image;
	const o = image;
	const url = o.url ?? "";
	if (/^(https?:|wix:image:)/.test(url)) return url;
	if (o.id) return `wix:image://v1/${o.id}/${encodeURIComponent(o.filename ?? "")}#originWidth=${o.width ?? 0}&originHeight=${o.height ?? 0}`;
	return url;
}
/**
* A Money value → display string, the way Wix's own bookings surfaces format it: whole amounts
* without decimals ("€75"), fractional ones with two ("€49.99"); "" when the value or the currency
* is missing — never a guessed currency (a USD default mislabels every non-USD site).
*/
function formatPrice(value, currency, locale) {
	if (value == null || value === "" || !currency) return "";
	const amount = Number(value);
	if (!Number.isFinite(amount)) return "";
	const digits = amount % 1 === 0 ? 0 : 2;
	try {
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
			currencyDisplay: "symbol",
			minimumFractionDigits: digits,
			maximumFractionDigits: digits
		}).format(amount);
	} catch {
		return `${amount} ${currency}`;
	}
}
/** Money as the API sends it ({ value, currency }) → display string ("" when incomplete). */
var formatMoney = (money, locale) => formatPrice(money?.value, money?.currency, locale);
/** "1 hr 30 min" / "45 min" / "2 hr" through Intl unit formatting ("" when unknown). */
function durationLabel(minutes, locale) {
	if (minutes == null || !Number.isFinite(minutes) || minutes <= 0) return "";
	try {
		const unit = (u, n) => new Intl.NumberFormat(locale, {
			style: "unit",
			unit: u,
			unitDisplay: "short"
		}).format(n);
		if (minutes < 60) return unit("minute", minutes);
		const hours = Math.floor(minutes / 60);
		const rest = minutes % 60;
		return rest === 0 ? unit("hour", hours) : `${unit("hour", hours)} ${unit("minute", rest)}`;
	} catch {
		return `${minutes} min`;
	}
}
/** A service offers add-ons when any of its groups holds add-on ids. */
var hasAddOns = (raw) => (raw.addOnGroups ?? []).some((g) => (g.addOnIds ?? []).length > 0);
/**
* The price a tile shows, by `payment.rateType` — Wix's own rule: FIXED → the price; VARIED → the
* minimum with a "From" flag; CUSTOM → the owner's free text; NO_FEE → "Free" (Wix shows nothing;
* a headless brief expects the word). A discount (from DISCOUNT_INFO_DETAILS) yields a concrete
* discounted price only for a single FIXED price with no add-ons; otherwise it is "calculated at
* checkout". A FIXED price of 0 counts as free too — it books without a checkout.
*/
function resolvePrice(raw) {
	const payment = raw.payment ?? {};
	const rateType = RATE_TYPES.includes(payment.rateType) ? payment.rateType : "NO_FEE";
	const hasPricingPlans = (payment.pricingPlanIds ?? []).length > 0;
	let price = "";
	let priceFrom = false;
	let free = false;
	switch (rateType) {
		case "FIXED":
			price = formatMoney(payment.fixed?.price);
			free = Number(payment.fixed?.price?.value ?? 0) === 0;
			if (free) price = "Free";
			break;
		case "VARIED":
			price = formatMoney(payment.varied?.minPrice ?? payment.varied?.defaultPrice);
			priceFrom = !!price;
			break;
		case "CUSTOM":
			price = payment.custom?.description ?? "";
			break;
		case "NO_FEE":
			price = "Free";
			free = true;
	}
	const discountName = payment.discountInfo?.discountName ?? "";
	const after = discountName && rateType === "FIXED" && !free && !hasAddOns(raw) ? formatMoney(payment.discountInfo?.priceAfterDiscount) : "";
	return {
		rateType,
		price: after || price,
		priceFrom,
		basePrice: after ? price : "",
		discountName,
		calculatedAtCheckout: !!discountName && !after,
		hasPricingPlans,
		free
	};
}
/**
* Deposit terms from the service's payment: `options.deposit` says a deposit is taken; the amount is
* `fixed|varied.deposit` (a percentage deposit stores no amount — the server resolves it, so the
* amount stays ""); `fullUpfrontPaymentAllowed` lets the visitor pay everything now instead.
*/
function depositOf(raw) {
	const payment = raw.payment ?? {};
	const rate = payment.fixed ?? payment.varied ?? {};
	const value = rate.deposit?.value ?? rate.depositDetails?.amount?.value;
	if (!(payment.options?.deposit === true || !!value && Number(value) > 0)) return null;
	return {
		amount: formatMoney(rate.deposit ?? rate.depositDetails?.amount),
		fullUpfrontAllowed: rate.fullUpfrontPaymentAllowed === true
	};
}
/** A service `locations[]` entry → DTO (BUSINESS carries the location's id and name). */
function toLocation(raw) {
	const type = [
		"BUSINESS",
		"CUSTOM",
		"CUSTOMER"
	].includes(raw.type) ? raw.type : "CUSTOM";
	return {
		id: type === "BUSINESS" ? rawId(raw.business) || rawId(raw) || null : null,
		name: raw.business?.name ?? raw.custom?.address?.formattedAddress ?? (type === "CUSTOMER" ? "Your location" : ""),
		type
	};
}
/** Staff from `staffMemberDetails` (needs STAFF_MEMBER_DETAILS), photo through the injected imgSrc. */
function toStaff(raw, imgSrc) {
	return (raw.staffMemberDetails?.staffMembers ?? []).map((m) => ({
		id: m.staffMemberId ?? "",
		name: m.name ?? "",
		imageUrl: imgSrc(mediaValue(m.mainMedia?.image), 160, 160)
	})).filter((m) => m.id);
}
/** An API date (Date on the SDK, ISO string on REST) → ISO string, or null. */
function toIso(value) {
	if (!value) return null;
	const d = value instanceof Date ? value : new Date(String(value));
	return Number.isNaN(d.getTime()) ? null : d.toISOString();
}
var isMissingOrPast = (iso, now) => !iso || new Date(iso).getTime() <= now;
/**
* Whether policy already forbids booking (Wix's rule): the late-booking limit before the first
* session has passed, or the first session started and booking after start is off, or a course's
* last session ended. Only meaningful for services with a fixed first session (classes, courses).
*/
function isTooLateToBook(raw, now = Date.now()) {
	const policy = raw.bookingPolicy ?? {};
	const afterStart = policy.bookAfterStartPolicy?.enabled === true;
	const first = toIso(raw.schedule?.firstSessionStart);
	const last = toIso(raw.schedule?.lastSessionEnd);
	let tooLate = false;
	if (!afterStart && first && policy.limitLateBookingPolicy?.enabled) tooLate = now > new Date(first).getTime() - (policy.limitLateBookingPolicy.latestBookingInMinutes ?? 0) * 6e4;
	const courseEnded = raw.type === "COURSE" && isMissingOrPast(last, now);
	const started = !!first && isMissingOrPast(first, now);
	return courseEnded || started && !afterStart || tooLate;
}
/**
* The CTA state: a course that is full or too late to book is only viewable; manual approval turns
* "Book" into "Request to book"; otherwise book. `courseFull` comes from the course's sessions
* (the booking flow supplies it; the listing passes false).
*/
function ctaStateOf(service, courseFull = false) {
	if (service.type === "COURSE" && (courseFull || service.tooLateToBook)) return "viewCourse";
	if (service.requiresManualApproval) return "requestToBook";
	return "book";
}
/** A COURSE's span from its schedule; null for other types. */
function courseSpanOf(raw, now = Date.now()) {
	if (raw.type !== "COURSE") return null;
	const endDate = toIso(raw.schedule?.lastSessionEnd);
	return {
		startDate: toIso(raw.schedule?.firstSessionStart),
		endDate,
		ended: isMissingOrPast(endDate, now)
	};
}
/** True for the three known types; an unknown type never becomes a DTO (Wix's own list would not render it either). */
var isKnownType = (raw) => SERVICE_TYPES.includes(raw.type);
function toSummary(raw, imgSrc) {
	const priced = resolvePrice(raw);
	const durationMinutes = raw.schedule?.availabilityConstraints?.sessionDurations?.[0] ?? null;
	const type = isKnownType(raw) ? raw.type : "APPOINTMENT";
	const requiresManualApproval = raw.onlineBooking?.requireManualApproval === true;
	const tooLateToBook = isTooLateToBook(raw);
	return {
		id: rawId(raw),
		slug: raw.mainSlug?.name ?? raw.supportedSlugs?.[0]?.name ?? "",
		name: raw.name ?? "",
		tagLine: raw.tagLine ?? "",
		type,
		...priced,
		durationMinutes,
		durationLabel: durationLabel(durationMinutes),
		imageUrl: imgSrc(mediaValue(raw.media?.mainMedia?.image), 800, 800),
		categoryId: rawId(raw.category) || null,
		categoryName: raw.category?.name ?? "",
		scheduleId: rawId(raw.schedule) || null,
		staff: toStaff(raw, imgSrc),
		locations: (raw.locations ?? []).map(toLocation),
		conferencing: raw.conferencing?.enabled === true,
		hasAddOns: hasAddOns(raw),
		requiresManualApproval,
		onlineBookingEnabled: raw.onlineBooking?.enabled !== false,
		tooLateToBook,
		ctaState: ctaStateOf({
			type,
			requiresManualApproval,
			tooLateToBook
		}),
		defaultCapacity: raw.defaultCapacity ?? null,
		maxParticipantsPerBooking: raw.bookingPolicy?.participantsPolicy?.maxParticipantsPerBooking ?? null,
		deposit: depositOf(raw),
		offeredDays: []
	};
}
function toDetail(raw, imgSrc) {
	const summary = toSummary(raw, imgSrc);
	const online = raw.payment?.options?.online === true;
	const inPerson = raw.payment?.options?.inPerson === true;
	const paymentOption = !online && inPerson ? "OFFLINE" : "ONLINE";
	return {
		...summary,
		description: raw.description ?? "",
		formId: rawId(raw.form) || null,
		paymentOption,
		cancellationFeeEnabled: raw.bookingPolicy?.cancellationFeePolicy?.enabled === true,
		course: courseSpanOf(raw)
	};
}
// src/wix/bookings/services.ts
var services$1 = wixModule(services);
/**
* One page of bookable services (this app's, never hidden — filtered by the server), optionally one
* category and/or one business location (or OTHER_LOCATIONS_ID for custom/customer locations),
* mapped to grid-ready DTOs. Wix pages 20 at a time; `hasMore` says whether to ask for the next.
*/
async function fetchServices({ limit = 20, offset = 0, categoryId, locationId } = {}) {
	let query = services$1.queryServices({ conditionalFields: SERVICES_CONDITIONAL_FIELDS }).eq("appId", BOOKINGS_APP_ID).eq("hidden", false).limit(limit).skip(offset);
	if (categoryId) query = query.eq("category.id", categoryId);
	if (locationId === "OTHER_LOCATIONS") query = query.hasSome("locations.type", ["CUSTOM", "CUSTOMER"]);
	else if (locationId) query = query.eq("locations.business.id", locationId);
	const res = await query.find();
	return {
		items: (res.items ?? []).filter(isKnownType).map((s) => toSummary(s, imgSrc)),
		hasMore: res.hasNext()
	};
}
/** Fetch one service by its URL slug (mainSlug.name). Null when not found. */
async function fetchServiceBySlug(slug) {
	const raw = (await services$1.queryServices({ conditionalFields: SERVICES_CONDITIONAL_FIELDS }).eq("mainSlug.name", slug).eq("appId", BOOKINGS_APP_ID).eq("hidden", false).limit(1).find()).items?.[0];
	return raw && isKnownType(raw) ? toDetail(raw, imgSrc) : null;
}
export { fetchServices as n, fetchServiceBySlug as t };
