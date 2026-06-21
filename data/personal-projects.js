import framesnap from "../assets/framesnap.png"
import reviewmate from "../assets/reviewmate.png"
import safdash from "../assets/safdash.png"
import convoflow from "../assets/convoflow.png"
import chatComponent from "../assets/chat-component.png"
import adsclique from "../assets/adsclique.png"
import cubehq from "../assets/cubehq.png"

/** Flagship open-source and production builds on /projects */
export const openSourceProjects = [
  {
    title: "FrameSnap",
    subtitle: "Browser-local video thumbnail generator — MP4/WebM/MOV, auto-snap or scrub, HD PNG/ZIP export. No upload, no signup.",
    stack: ["Next.js", "TypeScript"],
    imgLink: framesnap,
    liveLink: "https://framesnap.safdarali.in",
    codeLink: "https://github.com/Safdar-Ali-India/FrameSnap",
  },
  {
    title: "ReviewMate",
    subtitle: "VS Code extension — AI code review, bug scan, and explainers. TypeScript + Claude API. Marketplace launch coming soon.",
    stack: ["TypeScript", "Claude API", "VS Code"],
    badge: "Marketplace soon",
    imgLink: reviewmate,
    installLink: "https://github.com/Safdar-Ali-India/ReviewMate#setup",
    codeLink: "https://github.com/Safdar-Ali-India/ReviewMate",
  },
  {
    title: "SafDash",
    subtitle: "Developer dashboard — GitHub feed, Dev.to & HN news, tasks, Pomodoro. React 19, Vite, live REST APIs.",
    stack: ["React", "TypeScript", "Vite"],
    imgLink: safdash,
    liveLink: "https://saf-dash.vercel.app",
    codeLink: "https://github.com/Safdar-Ali-India/SafDash",
  },
  {
    title: "ConvoFlow",
    subtitle: "Visual chatbot flow builder — drag nodes, connect steps, export JSON. React Flow + Zustand + TypeScript.",
    stack: ["React Flow", "Zustand", "Vite"],
    imgLink: convoflow,
    liveLink: "https://convo-flow-chi.vercel.app",
    codeLink: "https://github.com/Safdar-Ali-India/ConvoFlow",
  },
  {
    title: "React Chat Component",
    subtitle: "Polished chat UI — real-time messaging, media sharing, and read receipts. Reusable React component library.",
    stack: ["React", "TypeScript"],
    badge: "In progress",
    imgLink: chatComponent,
    imageFit: "contain",
    pendingCode: true,
  },
]

/** Production frontend roles — agency & product work */
export const productionProjects = [
  {
    title: "Adsclique Media",
    subtitle: "U.S. digital marketing agency site — custom theme, Swiper case studies, CMS-backed services hub.",
    stack: ["React", "WordPress"],
    imgLink: adsclique,
    liveLink: "https://adsclique.com",
  },
  {
    title: "Cube — AI Customer Engagement",
    subtitle: "Enterprise support UI at cubehq.ai — performance, accessibility, scalable component architecture.",
    stack: ["React", "TypeScript"],
    imgLink: cubehq,
    liveLink: "https://cubehq.ai",
  },
]

/** @deprecated use openSourceProjects */
export const personalProjects = openSourceProjects
