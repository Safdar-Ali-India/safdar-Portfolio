import MobileSnapCarousel from "./MobileSnapCarousel";
import ProjectCard from "./ProjectCard";

/**
 * Responsive project grid:
 * - Mobile: 1 column
 * - Tablet (md–lg): 2 columns; lone last card centered (e.g. 5 → 2+2+1)
 * - Desktop (xl+): 3 columns; partial last row centered (e.g. 5 → 3+2)
 */
export default function ProjectGrid({ projects }) {
  const n = projects.length;
  const xlRemainder = n % 3;
  const xlMain = xlRemainder === 0 ? projects : projects.slice(0, n - xlRemainder);
  const xlTail = xlRemainder === 0 ? [] : projects.slice(n - xlRemainder);

  return (
    <>
      {/* Mobile: peek carousel. Tablet: 2-column grid. */}
      <MobileSnapCarousel
        label="Projects"
        className="md:grid md:grid-cols-2 md:justify-items-center md:gap-8 xl:hidden [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:justify-self-center"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </MobileSnapCarousel>

      {/* Desktop xl — 3 columns with centered tail row */}
      <div className="hidden xl:block space-y-8">
        {xlMain.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 justify-items-center">
            {xlMain.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : null}

        {xlTail.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {xlTail.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
