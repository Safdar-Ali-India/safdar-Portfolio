"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dockPill } from "../lib/ui-classes";

const external = { target: "_blank", rel: "noopener noreferrer" };

export default function FeaturedProjectCard({ title, subT, imgLink, liveLink, codeLink }) {
  const [expanded, setExpanded] = useState(false);
  const needsReadMore = subT.length > 140;

  return (
    <article className="flex flex-col rounded-2xl border border-slate-400/55 bg-white/90 backdrop-blur-md overflow-hidden shadow-sm transition-shadow hover:shadow-md dark:border-white/[0.1] dark:bg-white/[0.04] dark:hover:shadow-white/5">
      <Link
        href={liveLink}
        {...external}
        className="group relative block h-48 w-full bg-neutral-100 dark:bg-neutral-800"
        aria-label={`View ${title}`}
      >
        <Image
          src={imgLink}
          alt={`${title} — project screenshot`}
          fill
          className="object-cover object-top transition-opacity group-hover:opacity-90"
          sizes="(max-width:768px) 100vw, 33vw"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <h3 className="font-bold text-lg text-neutral-950 dark:text-ink leading-snug">{title}</h3>

        <div className="flex-1">
          <p
            className={`text-sm text-neutral-700 dark:text-ink/75 leading-relaxed ${
              expanded ? "" : "line-clamp-3"
            }`}
          >
            {subT}
          </p>
          {needsReadMore ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-1.5 text-xs font-semibold text-neutral-500 underline underline-offset-2 hover:text-neutral-800 dark:text-ink/55 dark:hover:text-ink"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          ) : null}
        </div>

        <div className={`flex gap-2 pt-1 ${codeLink ? "flex-col sm:flex-row" : ""}`}>
          <Link href={liveLink} {...external} className={`${dockPill} w-full justify-center text-xs py-2`}>
            View project →
          </Link>
          {codeLink ? (
            <Link href={codeLink} {...external} className={`${dockPill} w-full justify-center text-xs py-2`}>
              Source code →
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
