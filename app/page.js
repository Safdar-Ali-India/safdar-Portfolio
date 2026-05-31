import HomePage from "../components/HomePage";
import PageStructuredData from "../components/seo/PageStructuredData";
import { buildHomePageGraph } from "../lib/structured-data";

const SITE = "https://safdarali.in";

export const metadata = {
  description:
    "Safdar Ali — software engineer and Next.js developer in Bengaluru, India. React developer, YouTube educator, technical writer. View projects, case studies, and hire a frontend developer.",
  keywords: [
    "Safdar Ali",
    "Safdar Ali developer",
    "Safdar Ali YouTube",
    "Next.js developer Bengaluru",
    "React developer India",
    "frontend developer India",
    "hire frontend developer India",
    "web development portfolio India",
    "Safdar Ali YouTube tutorials",
  ],
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    url: SITE,
    title: "Safdar Ali — Next.js & React developer | Bengaluru, India",
    description:
      "Portfolio of Safdar Ali: Next.js, React, and frontend engineering. Projects, articles, and contact.",
  },
};

export default function Page() {
  return (
    <>
      <PageStructuredData graph={buildHomePageGraph()} />
      <HomePage />
    </>
  );
}
