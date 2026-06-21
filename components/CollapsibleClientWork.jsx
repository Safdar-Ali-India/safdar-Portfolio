"use client";

import { useId, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function CollapsibleClientWork({ studies }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const names = studies.map((s) => s.title).join(" · ");

  return (
    <section className="mt-16" aria-labelledby="client-work-heading">
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 id="client-work-heading" className="text-xl font-bold dark:text-ink scroll-mt-24">
          Selected Client Work
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-ink/55">{names}</p>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-white/20 dark:bg-transparent dark:text-ink dark:hover:bg-white/[0.06]"
        >
          {open ? "Show less" : "View more"}
          <span aria-hidden="true" className={`inline-block transition-transform ${open ? "rotate-180" : ""}`}>
            ↓
          </span>
        </button>
      </div>

      {open ? (
        <div id={panelId} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {studies.map((study) => (
            <ProjectCard key={study.title} {...study} />
          ))}
        </div>
      ) : null}

      <p className="mt-6 text-center text-[11px] text-neutral-400 dark:text-ink/45">
        Agency employment · client IP
      </p>
    </section>
  );
}
