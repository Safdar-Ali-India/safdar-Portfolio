const STATS = [
  { value: "70+", label: "YouTube Tutorials" },
  { value: "30+", label: "Projects Shipped" },
  { value: "4 Yrs", label: "Experience" },
];

/** Three equal stat tiles. One row on phones so the block stays short. */
export default function StatsRow() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex min-h-[4.75rem] flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-white/60 px-1.5 py-3 text-center dark:border-white/10 dark:bg-white/[0.04] sm:min-h-0 sm:px-4 sm:py-4"
        >
          <p className="font-InterBlack text-xl font-extrabold leading-none text-neutral-950 dark:text-ink sm:text-2xl">
            {stat.value}
          </p>
          <p className="mt-1.5 text-[11px] leading-tight text-neutral-500 dark:text-ink/60 sm:text-xs">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
