import ProjectCard from "./ProjectCard";

const COLS = 3;

/**
 * 3-column project grid on xl; incomplete last row is centered (e.g. 5 → 3 + 2 centered).
 */
export default function ProjectGrid({ projects }) {
  const remainder = projects.length % COLS;
  const splitAt = remainder === 0 ? projects.length : projects.length - remainder;
  const fullRow = projects.slice(0, splitAt);
  const lastRow = projects.slice(splitAt);

  return (
    <div className={fullRow.length && lastRow.length ? "space-y-8" : ""}>
      {fullRow.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {fullRow.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      ) : null}

      {lastRow.length > 0 ? (
        <div
          className={
            lastRow.length === 1
              ? "flex justify-center"
              : lastRow.length === 2
                ? "mx-auto grid max-w-[59rem] grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center"
                : "flex flex-wrap justify-center gap-8"
          }
        >
          {lastRow.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
