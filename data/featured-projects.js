import framesnap from "../assets/framesnap.webp";
import reviewmate from "../assets/reviewmate.webp";
import safdash from "../assets/safdash.webp";

/**
 * Homepage featured trio — your strongest builder signals in ~5 seconds.
 * Production client work (Adsclique, Cube) lives on /projects only.
 */
export const featuredProjects = [
  {
    title: "FrameSnap",
    subtitle:
      "Free browser-local thumbnail generator — MP4/WebM/MOV, HD export, no upload or signup.",
    stack: ["Next.js", "TypeScript"],
    imgLink: framesnap,
    liveLink: "https://framesnap.safdarali.in",
    codeLink: "https://github.com/Safdar-Ali-India/FrameSnap",
  },
  {
    title: "ReviewMate",
    subtitle:
      "VS Code extension — AI code review, bug scan, and explainers. TypeScript + Claude API.",
    stack: ["TypeScript", "VS Code"],
    badge: "Marketplace soon",
    imgLink: reviewmate,
    codeLink: "https://github.com/Safdar-Ali-India/ReviewMate",
  },
  {
    title: "SafDash",
    subtitle:
      "Developer dashboard — GitHub activity, dev news, tasks, and Pomodoro. React 19 + Vite.",
    stack: ["React", "TypeScript"],
    imgLink: safdash,
    liveLink: "https://saf-dash.vercel.app",
    codeLink: "https://github.com/Safdar-Ali-India/SafDash",
  },
];
