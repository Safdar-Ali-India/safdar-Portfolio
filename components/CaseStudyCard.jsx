"use client";

import { useState } from "react";
import Image from "next/image";

export default function CaseStudyCard({ study, index }) {
  const [showFullOutcome, setShowFullOutcome] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descId = `case-study-${index}-description`;
  const outcomeId = `case-study-${index}-outcome`;

  const imageBlock = (
    <div className="relative h-48 w-full cursor-pointer overflow-hidden bg-neutral-200 dark:bg-neutral-800">
      <Image
        src={study.imgLink}
        alt={`${study.title} — case study preview`}
        fill
        className="object-cover transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        decoding="async"
      />
    </div>
  );

  return (
    <article className="bg-gray-50 dark:bg-white/[0.04] border border-black/[0.1] dark:border-white/[0.1] rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-neutral-400/10 dark:hover:shadow-white/5 transition-all duration-300">
      {study.liveLink ? (
        <a
          href={study.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-t-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          aria-label={`${study.title} — open live site (new tab)`}
        >
          {imageBlock}
        </a>
      ) : (
        <div className="block rounded-t-xl" aria-label={`${study.title} — preview`}>
          {imageBlock}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-ink">{study.title}</h3>
          <div className="flex gap-2">
            {study.date && (
              <span className="text-xs px-2 py-1 text-center bg-neutral-200 dark:bg-white/[0.08] rounded-full text-neutral-800 dark:text-ink/90">
                {study.date}
              </span>
            )}
            {study.location && (
              <span className="text-xs px-2 text-center py-1 bg-neutral-200 dark:bg-white/[0.08] rounded-full text-neutral-600 dark:text-ink/75">
                {study.location}
              </span>
            )}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-1">Role</p>
          <p className="text-sm text-neutral-700 dark:text-ink/90">{study.role}</p>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-neutral-200 dark:bg-white/[0.08] rounded text-neutral-700 dark:text-ink/85"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-1">What I Did</p>
          <p
            id={descId}
            className={`text-sm text-neutral-600 dark:text-ink/80 ${!showFullDescription ? "line-clamp-4" : ""}`}
          >
            {study.description}
          </p>
          {study.description.length > 120 && (
            <button
              type="button"
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-xs text-neutral-600 hover:text-gray-300 mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 rounded"
              aria-expanded={showFullDescription}
              aria-controls={descId}
            >
              {showFullDescription ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-neutral-500 dark:text-ink/60 uppercase mb-1">Outcome</p>
          <p
            id={outcomeId}
            className={`text-sm text-neutral-600 dark:text-ink/80 ${!showFullOutcome ? "line-clamp-2" : ""}`}
          >
            {study.outcome}
          </p>
          {study.note ? <p className="mt-2 text-xs text-neutral-500 dark:text-ink/65">{study.note}</p> : null}
          {study.outcome.length > 80 && (
            <button
              type="button"
              onClick={() => setShowFullOutcome(!showFullOutcome)}
              className="text-xs text-neutral-600 hover:text-gray-300 mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 rounded"
              aria-expanded={showFullOutcome}
              aria-controls={outcomeId}
            >
              {showFullOutcome ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-auto">
          {study.liveLink ? (
            <a
              href={study.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-black px-4 py-2 text-center text-sm font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:bg-white dark:text-black"
            >
              View live site →
            </a>
          ) : (
            <span className="block w-full cursor-not-allowed rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 text-center text-sm font-semibold text-neutral-500 dark:border-white/15 dark:bg-white/[0.06] dark:text-ink/50">
              No public demo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
