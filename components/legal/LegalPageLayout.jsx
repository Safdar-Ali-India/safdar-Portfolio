import Link from "next/link";
import PageBackHeader from "../PageBackHeader";
import DeferredSparkles from "../ui/DeferredSparkles";
import { LEGAL_LAST_UPDATED } from "../../lib/legal-config";

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";

const prose =
  "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const h2Class =
  "mt-12 scroll-mt-24 font-InterBold text-xl font-extrabold text-neutral-950 dark:text-ink sm:text-2xl";

export { linkClass, prose, h2Class };

export default function LegalPageLayout({ title, intro, children }) {
  return (
    <>
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticleslegal"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="home">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            Legal · Last updated {LEGAL_LAST_UPDATED}
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75 max-w-2xl mx-auto">
              {intro}
            </p>
          ) : null}
          <p className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-semibold text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/80 dark:hover:text-ink"
            >
              ← Home
            </Link>
          </p>
        </PageBackHeader>

        <div className={`${prose} space-y-6`}>{children}</div>
      </article>
    </>
  );
}
