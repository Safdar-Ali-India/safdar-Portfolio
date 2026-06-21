"use client";

import { useId, useState } from "react";
import ProjectGrid from "./ProjectGrid";

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
        <>
          <div
            id={panelId}
            className="mt-8 max-w-3xl mx-auto mb-8 rounded-xl border border-neutral-200/80 bg-neutral-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-xs text-neutral-600 dark:text-ink/70 text-center leading-relaxed">
              <span className="font-semibold text-neutral-800 dark:text-ink">Disclaimer:</span> I am not the owner
              of these websites. These projects were developed during my employment with various agencies and
              companies. All intellectual property rights belong to the respective clients and organizations.
            </p>
          </div>

          <ProjectGrid projects={studies} />
        </>
      ) : null}
    </section>
  );
}
