import Link from "next/link";
import BackToHomeLink from "../../components/BackToHomeLink";
import DeferredSparkles from "../../components/ui/DeferredSparkles";
import Contact from "../../components/Contact";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildContactPageGraph } from "../../lib/structured-data";

const SITE = "https://safdarali.in";

export const metadata = {
  title: "Contact",
  description:
    "Contact Safdar Ali — Next.js and React developer in Bengaluru, India. Hire a frontend developer, collaborations, or general enquiries via the form.",
  keywords: ["contact Safdar Ali", "hire frontend developer India", "Bengaluru web developer", "frontend developer contact"],
  alternates: {
    canonical: `${SITE}/contact`,
  },
  openGraph: {
    title: "Contact | Safdar Ali",
    url: `${SITE}/contact`,
    description: "Reach Safdar Ali for freelance, full-time, or collaboration opportunities.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageStructuredData graph={buildContactPageGraph()} />
    <div>
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlescontact"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h1 className="text-center font-InterBold text-3xl font-extrabold text-neutral-950 dark:text-ink light:text-black">
            Let&apos;s build something.
          </h1>
          <BackToHomeLink />
        </div>

        <p className="mt-8 max-w-xl mx-auto text-center text-neutral-600 dark:text-ink">
          Frontend engineer in <strong>Bengaluru</strong>. Use the form for roles, freelance, or collaboration—I&apos;ll reply when I can.
        </p>

        <Contact />

        <div className="mt-10 border-t border-neutral-200 pt-8 dark:border-white/10">
          <p className="mb-4 text-xs uppercase tracking-widest text-neutral-400 dark:text-ink/40">Find me on</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@safdarali_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/70 dark:hover:text-ink"
            >
              YouTube
            </a>
            <a
              href="https://www.linkedin.com/in/safdarali25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/70 dark:hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Safdar-Ali-India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/70 dark:hover:text-ink"
            >
              GitHub
            </a>
            <a
              href="https://dev.to/safdarali25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/70 dark:hover:text-ink"
            >
              DEV.to
            </a>
            <a
              href="https://www.instagram.com/codewithsafdar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/70 dark:hover:text-ink"
            >
              Instagram
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-neutral-500 dark:text-ink/65 mt-4">
          Prefer the homepage?{" "}
          <Link href="/#contact" className="underline text-neutral-800 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink">
            Same form here
          </Link>
          .
        </p>
      </div>
    </div>
    </>
  );
}
