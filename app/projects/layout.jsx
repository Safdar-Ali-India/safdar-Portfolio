import PageStructuredData from "../../components/seo/PageStructuredData";
import { featuredProjects } from "../../data/featured-projects";
import { buildProjectsGraph } from "../../lib/structured-data";

const SITE = "https://safdarali.in";

export const metadata = {
  title: "Projects",
  description:
    "Safdar Ali — professional case studies (WordPress, Shopify, Wix) and personal React & Next.js projects. Web development portfolio India.",
  keywords: [
    "Safdar Ali projects",
    "web development portfolio India",
    "WordPress developer portfolio",
    "Shopify developer",
    "React projects",
  ],
  alternates: {
    canonical: `${SITE}/projects`,
  },
  openGraph: {
    title: "Projects | Safdar Ali",
    url: `${SITE}/projects`,
    description: "Case studies and featured builds — agency work and personal apps.",
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
