import PageStructuredData from "../../components/seo/PageStructuredData";
import { featuredProjects } from "../../data/featured-projects";
import { buildProjectsGraph } from "../../lib/structured-data";

const SITE = "https://safdarali.in";

export const metadata = {
  title: "Projects",
  description:
    "Safdar Ali — React, Next.js, and TypeScript projects. Open source tools, VS Code extensions, and production frontend work. Bengaluru, India.",
  keywords: [
    "Safdar Ali projects",
    "Next.js developer portfolio",
    "React open source",
    "VS Code extension developer",
    "TypeScript projects India",
  ],
  alternates: {
    canonical: `${SITE}/projects`,
  },
  openGraph: {
    title: "Projects | Safdar Ali",
    url: `${SITE}/projects`,
    description:
      "Open source tools, VS Code extensions, and production frontend work — FrameSnap, ReviewMate, SafDash, and more.",
  },
};

export default function ProjectsLayout({ children }) {
  return (
    <>
      <PageStructuredData graph={buildProjectsGraph(featuredProjects)} />
      {children}
    </>
  );
}
