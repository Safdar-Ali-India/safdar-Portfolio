import Link from "next/link";
import PageBackHeader from "../../components/PageBackHeader";
import ProjectGrid from "../../components/ProjectGrid";
import CollapsibleClientWork from "../../components/CollapsibleClientWork";
import DeferredSparkles from "../../components/ui/DeferredSparkles";
import { clientWork } from "../../data/client-work";
import { openSourceProjects, productionProjects } from "../../data/personal-projects";
import { dockPill } from "../../lib/ui-classes";

export default function ProjectsPage() {
  return (
    <section>
      <div className="w-full absolute inset-0 lg:h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticles-projects"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#777"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        <PageBackHeader className="mt-14" back="home">
          <h1 className="text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-ink light:text-black text-3xl">
            Projects
          </h1>
        </PageBackHeader>

        <p className="mt-5 max-w-xl mx-auto text-center text-sm text-neutral-600 dark:text-ink/70">
          React, Next.js, and TypeScript — open source, production, and client work.
        </p>

        <div className="mt-14">
          <h2
            id="open-source"
            className="text-xl font-bold text-center mb-8 dark:text-ink light:text-black scroll-mt-24"
          >
            Open Source &amp; Tools
          </h2>

          <ProjectGrid projects={openSourceProjects} />
        </div>

        <div className="mt-16">
          <h2
            id="production"
            className="text-xl font-bold text-center mb-8 dark:text-ink light:text-black scroll-mt-24"
          >
            Production Frontend
          </h2>

          <ProjectGrid projects={productionProjects} />
        </div>

        <CollapsibleClientWork studies={clientWork} />

        <div className="mt-16 text-center pb-4">
          <p className="text-sm text-neutral-600 dark:text-ink/75 mb-4">Interested in similar work?</p>
          <Link href="/contact" className={dockPill}>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
