"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { VscExtensions } from "react-icons/vsc";

const external = { target: "_blank", rel: "noopener noreferrer" };

const outlineBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-3.5 py-2 text-xs font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:border-white/20 dark:bg-transparent dark:text-ink dark:hover:bg-white/[0.06]";

const solidBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-3.5 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-white dark:text-neutral-950";

export default function FeaturedProjectCard({
  title,
  subtitle,
  subT,
  imgLink,
  codeLink,
  liveLink,
  installLink,
  stack = [],
  badge,
  priority = false,
}) {
  const description = subtitle ?? subT ?? "";
  const imageHref = liveLink || installLink || codeLink;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/90 shadow-sm dark:border-white/[0.1] dark:bg-white/[0.04]">
      {imageHref ? (
        <Link
          href={imageHref}
          {...external}
          className="relative block h-44 w-full shrink-0 bg-neutral-100 dark:bg-neutral-800"
          aria-label={`Open ${title}`}
        >
          <Image
            src={imgLink}
            alt={`${title} — project screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width:768px) 100vw, 33vw"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            decoding="async"
          />
        </Link>
      ) : (
        <div className="relative h-44 w-full shrink-0 bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={imgLink}
            alt={`${title} — project screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width:768px) 100vw, 33vw"
            priority={priority}
            loading={priority ? undefined : "lazy"}
            decoding="async"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-bold text-base text-neutral-950 dark:text-ink leading-snug">{title}</h3>
          {badge ? (
            <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-800 dark:bg-violet-900/40 dark:text-violet-200">
              {badge}
            </span>
          ) : null}
        </div>

        {stack.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
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

        <p className="flex-1 text-sm leading-relaxed text-neutral-600 dark:text-ink/75 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {installLink ? (
            <Link href={installLink} {...external} className={`${outlineBtn} flex-1 sm:flex-none`}>
              <VscExtensions className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Install
            </Link>
          ) : liveLink && codeLink ? (
            <Link href={liveLink} {...external} className={`${outlineBtn} flex-1 sm:flex-none`}>
              <HiArrowTopRightOnSquare className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Live demo
            </Link>
          ) : null}
          {codeLink ? (
            <Link href={codeLink} {...external} className={`${solidBtn} flex-1 sm:flex-none`}>
              <FaGithub className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              GitHub
            </Link>
          ) : liveLink ? (
            <Link href={liveLink} {...external} className={`${solidBtn} flex-1 sm:flex-none`}>
              <HiArrowTopRightOnSquare className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Visit
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
