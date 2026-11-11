// Background photos for the shared navy PageHeader band (Services, About, How It Works,
// Booking Policy, Privacy, Terms, and every service/package page via OfferingView).
// Licensed corporate stock photography (supplied by Nick, 2026-11-04), replacing the earlier
// set of personal photos of Nick — see BUILD_LOG.md, "Nick's 17:20 review call" and the
// follow-up header-image batch, for why. Each export is the three widths + a background-position
// PageHeader needs; pick whichever fits the page.
import waitingRoom480 from "../assets/photos/header-waiting-room-480.webp";
import waitingRoom960 from "../assets/photos/header-waiting-room-960.webp";
import waitingRoom1376 from "../assets/photos/header-waiting-room-1376.webp";
import panelHandshake480 from "../assets/photos/header-panel-handshake-480.webp";
import panelHandshake960 from "../assets/photos/header-panel-handshake-960.webp";
import panelHandshake1376 from "../assets/photos/header-panel-handshake-1376.webp";
import resumeReview480 from "../assets/photos/header-resume-review-480.webp";
import resumeReview960 from "../assets/photos/header-resume-review-960.webp";
import resumeReview1376 from "../assets/photos/header-resume-review-1376.webp";
import mockPanel480 from "../assets/photos/header-mock-panel-480.webp";
import mockPanel960 from "../assets/photos/header-mock-panel-960.webp";
import mockPanel1376 from "../assets/photos/header-mock-panel-1376.webp";
import sternReview480 from "../assets/photos/header-stern-review-480.webp";
import sternReview960 from "../assets/photos/header-stern-review-960.webp";
import sternReview1376 from "../assets/photos/header-stern-review-1376.webp";
import warmChat480 from "../assets/photos/header-warm-chat-480.webp";
import warmChat960 from "../assets/photos/header-warm-chat-960.webp";
import warmChat1376 from "../assets/photos/header-warm-chat-1376.webp";
import resumeMacro480 from "../assets/photos/header-resume-macro-480.webp";
import resumeMacro960 from "../assets/photos/header-resume-macro-960.webp";
import resumeMacro1376 from "../assets/photos/header-resume-macro-1376.webp";
import dealHandshake480 from "../assets/photos/header-deal-handshake-480.webp";
import dealHandshake960 from "../assets/photos/header-deal-handshake-960.webp";
import dealHandshake1376 from "../assets/photos/header-deal-handshake-1376.webp";
import calendarPrep480 from "../assets/photos/header-calendar-prep-480.webp";
import calendarPrep960 from "../assets/photos/header-calendar-prep-960.webp";
import calendarPrep1376 from "../assets/photos/header-calendar-prep-1376.webp";
import interviewSign480 from "../assets/photos/header-interview-sign-480.webp";
import interviewSign960 from "../assets/photos/header-interview-sign-960.webp";
import interviewSign1376 from "../assets/photos/header-interview-sign-1376.webp";
import closeHandshake480 from "../assets/photos/header-close-handshake-480.webp";
import closeHandshake960 from "../assets/photos/header-close-handshake-960.webp";
import closeHandshake1376 from "../assets/photos/header-close-handshake-1376.webp";

// Position is "horizontal vertical" — tuned per photo so the short PageHeader band doesn't crop
// off the part of the image that carries the meaning (a face, a sign, the handwritten text).
export const headerPhotos = {
  waitingRoom: { src480: waitingRoom480.src, src960: waitingRoom960.src, src1376: waitingRoom1376.src, position: "center 30%" },
  panelHandshake: { src480: panelHandshake480.src, src960: panelHandshake960.src, src1376: panelHandshake1376.src, position: "65% 35%" },
  resumeReview: { src480: resumeReview480.src, src960: resumeReview960.src, src1376: resumeReview1376.src, position: "center 35%" },
  mockPanel: { src480: mockPanel480.src, src960: mockPanel960.src, src1376: mockPanel1376.src, position: "center 20%" },
  sternReview: { src480: sternReview480.src, src960: sternReview960.src, src1376: sternReview1376.src, position: "70% 25%" },
  warmChat: { src480: warmChat480.src, src960: warmChat960.src, src1376: warmChat1376.src, position: "center 25%" },
  resumeMacro: { src480: resumeMacro480.src, src960: resumeMacro960.src, src1376: resumeMacro1376.src, position: "55% 45%" },
  dealHandshake: { src480: dealHandshake480.src, src960: dealHandshake960.src, src1376: dealHandshake1376.src, position: "center 35%" },
  calendarPrep: { src480: calendarPrep480.src, src960: calendarPrep960.src, src1376: calendarPrep1376.src, position: "35% 50%" },
  interviewSign: { src480: interviewSign480.src, src960: interviewSign960.src, src1376: interviewSign1376.src, position: "center 30%" },
  closeHandshake: { src480: closeHandshake480.src, src960: closeHandshake960.src, src1376: closeHandshake1376.src, position: "center 40%" },
} as const;

/** One photo per standalone page using PageHeader, picked for variety. */
export const pageHeaderPhoto = {
  services: headerPhotos.waitingRoom,
  about: headerPhotos.warmChat,
  "how-it-works": headerPhotos.interviewSign,
  "booking-policy": headerPhotos.calendarPrep,
  privacy: headerPhotos.sternReview,
  terms: headerPhotos.sternReview,
} as const;

/** One photo per offering slug, for the service/package pages' PageHeader (via OfferingView). */
export const offeringHeaderPhoto: Record<string, (typeof headerPhotos)[keyof typeof headerPhotos]> = {
  "free-consultation": headerPhotos.panelHandshake,
  "interview-ready": headerPhotos.resumeReview,
  "interview-accelerator": headerPhotos.dealHandshake,
  "win-the-job-intensive": headerPhotos.sternReview,
  "executive-interview-coaching": headerPhotos.closeHandshake,
  "mock-interviews": headerPhotos.mockPanel,
  "esl-coaching": headerPhotos.warmChat,
  "linkedin-resume": headerPhotos.resumeMacro,
  "presentation-skills": headerPhotos.panelHandshake,
};
