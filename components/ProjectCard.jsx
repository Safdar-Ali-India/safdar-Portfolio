import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { VscExtensions } from "react-icons/vsc";

const external = { target: "_blank", rel: "noopener noreferrer" };

const outlineBtn =
  "inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-white/20 dark:bg-transparent dark:text-ink dark:hover:bg-white/[0.06]";

const solidBtn =
  "inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-white dark:text-neutral-950";

export default function ProjectCard({
  title,
  subtitle,
  imgLink,
  codeLink,
  liveLink,
  installLink,
  stack = [],
  badge,
  pendingCode = false,
  imageFit = "cover",
}) {
  const thumbAlt = `${title} — project preview`;
  const imageHref = liveLink || installLink || codeLink;
  const imageClass = imageFit === "contain" ? "object-contain object-center p-3" : "object-cover object-top";

  const imageInner = (
    <Image
      src={imgLink}
      fill
      className={imageClass}
      alt={thumbAlt}
      sizes="(max-width: 640px) 100vw, 28rem"
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <article className="flex w-full max-w-md flex-col rounded-2xl border border-neutral-200/80 bg-white/90 p-5 shadow-sm dark:border-white/[0.1] dark:bg-white/[0.04]">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-lg font-bold text-neutral-900 dark:text-ink">{title}</h3>
        {badge ? (
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-800 dark:bg-violet-900/40 dark:text-violet-200">
            {badge}
          </span>
        ) : null}
      </div>

      {stack.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600 dark:bg-white/[0.08] dark:text-ink/70"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}

      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-ink/80">{subtitle}</p>

      {imageHref ? (
        <Link
          href={imageHref}
          {...external}
          className={`group relative mt-4 block h-52 w-full overflow-hidden rounded-xl border border-neutral-200/80 dark:border-white/10 ${
            imageFit === "contain" ? "bg-[#fce7f3]" : "bg-neutral-100 dark:bg-neutral-800"
          }`}
          aria-label={`Open ${title}`}
        >
          {imageInner}
        </Link>
      ) : (
        <div
          className={`relative mt-4 h-52 w-full overflow-hidden rounded-xl border border-neutral-200/80 dark:border-white/10 ${
            imageFit === "contain" ? "bg-[#fce7f3]" : "bg-neutral-100 dark:bg-neutral-800"
          }`}
        >
          {imageInner}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {installLink ? (
          <Link href={installLink} {...external} className={outlineBtn}>
            <VscExtensions className="h-4 w-4 shrink-0" aria-hidden="true" />
            Install
          </Link>
        ) : liveLink && codeLink ? (
          <Link href={liveLink} {...external} className={outlineBtn}>
            <HiArrowTopRightOnSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
            Live demo
          </Link>
        ) : null}
        {codeLink ? (
          <Link href={codeLink} {...external} className={solidBtn}>
            <FaGithub className="h-4 w-4 shrink-0" aria-hidden="true" />
            GitHub
          </Link>
        ) : pendingCode ? (
          <span
            className={`${solidBtn} cursor-default opacity-70`}
            aria-label="Source code publishing soon"
          >
            <FaGithub className="h-4 w-4 shrink-0" aria-hidden="true" />
            Committing soon
          </span>
        ) : liveLink ? (
          <Link href={liveLink} {...external} className={solidBtn}>
            <HiArrowTopRightOnSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
            Visit
          </Link>
        ) : null}
      </div>
    </article>
  );
}
