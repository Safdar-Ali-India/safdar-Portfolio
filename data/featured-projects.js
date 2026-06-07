import framesnap from "../assets/framesnap.png";
import adsclique from "../assets/adsclique.png";
import cubehq from "../assets/cubehq.png";

/** Shown on the homepage; full grid lives on /projects */
export const featuredProjects = [
  {
    title: "FrameSnap",
    subT:
      "Free video thumbnail generator I built and open-sourced — drop MP4/WebM/MOV, scrub or auto-snap frames, export HD PNG or ZIP. Runs entirely in your browser: no upload, no signup, no watermark.",
    imgLink: framesnap,
    liveLink: "https://framesnap.safdarali.in",
    codeLink: "https://github.com/Safdar-Ali-India/FrameSnap",
  },
  {
    title: "Adsclique Media",
    subT:
      "Primary website for a U.S. digital marketing agency — custom theme, Swiper case-study carousel, services hub, and CMS the team edits daily. Built from scratch as Senior Frontend Developer; still the agency's public storefront.",
    imgLink: adsclique,
    liveLink: "https://adsclique.com",
  },
  {
    title: "Cube — AI Customer Engagement Platform",
    subT:
      "Built the frontend interface for cubehq.ai — an AI-native conversational platform for enterprise customer support. Focused on performance, accessibility, and scalable UI architecture. Full-time role at Cube (Sequoia Capital-backed).",
    imgLink: cubehq,
    liveLink: "https://cubehq.ai",
  },
];
