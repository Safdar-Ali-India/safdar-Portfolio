import BackToBlogLink from "./BackToBlogLink";
import BackToHomeLink from "./BackToHomeLink";

/**
 * Back nav + centred title block.
 * Mobile: back on its own row so the title gets full width.
 * Desktop: balanced row so the title stays visually centred.
 */
export default function PageBackHeader({ back = "home", className = "", children }) {
  const Nav = back === "blog" ? BackToBlogLink : BackToHomeLink;

  return (
    <header className={`mb-10 ${className}`.trim()}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
        <div className="shrink-0 sm:pt-0.5">
          <Nav />
        </div>
        <div className="min-w-0 w-full flex-1">{children}</div>
        <div className="hidden w-11 shrink-0 sm:block sm:w-12" aria-hidden="true" />
      </div>
    </header>
  );
}
