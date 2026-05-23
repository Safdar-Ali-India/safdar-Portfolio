import BackToHomeLink from "../../components/BackToHomeLink";
import ProjectCard from "../../components/ProjectCard";
import CaseStudyCard from "../../components/CaseStudyCard";
import DeferredSparkles from "../../components/ui/DeferredSparkles";
import { caseStudies } from "../../data/case-studies";
import { personalProjects } from "../../data/personal-projects";

export default function ProjectsPage() {
  return (
    <section>
      <div className="w-full absolute inset-0 lg:h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticles-projects"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#777"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pb-20">
        <div className="relative mt-14">
          <h1 className="text-center font-InterBold uppercase font-extrabold font-InterBlack dark:text-ink light:text-black text-3xl">
            Projects
          </h1>
          <BackToHomeLink />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-4 dark:text-ink light:text-black">
            Professional Case Studies
          </h2>

          <div className="mb-8 p-4 bg-neutral-800/20 border border-neutral-700/30 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-neutral-600 dark:text-ink/80 text-center">
              <span className="font-semibold text-neutral-800 dark:text-ink">Disclaimer:</span> I am not the owner of
              these websites. These projects were developed during my employment with various agencies and companies.
              All intellectual property rights belong to the respective clients and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2
            id="featured-projects"
            className="text-2xl font-bold text-center mb-8 dark:text-ink light:text-black scroll-mt-24"
          >
            Personal & Featured Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-x-8">
            {personalProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                imgLink={project.imgLink}
                codeLink={project.codeLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
