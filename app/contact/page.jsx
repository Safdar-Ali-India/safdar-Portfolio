import Link from "next/link";
import BackToHomeLink from "../../components/BackToHomeLink";
import { SparklesCore } from "../../components/ui/sparkles";
import Contact from "../../components/Contact";

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
    <div>
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <SparklesCore
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
          <h1 className="text-center font-InterBold uppercase font-extrabold dark:text-ink light:text-black text-3xl">
            Contact
          </h1>
          <BackToHomeLink />
        </div>

        <p className="mt-8 text-center max-w-xl mx-auto text-neutral-600 dark:text-ink">
          For <strong>hire</strong>, freelance, or collaboration: use the form below. I&apos;m based in{" "}
          <strong>Bengaluru</strong> and work with teams across India and remotely.
        </p>

        <Contact />

        <p className="text-center text-sm text-neutral-500 dark:text-ink/65 mt-4">
          Prefer the homepage?{" "}
          <Link href="/#contact" className="underline text-neutral-800 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink">
            Same form here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
