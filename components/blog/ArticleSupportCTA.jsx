const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";

export default function ArticleSupportCTA() {
  return (
    <div className="mt-10 rounded-xl border border-neutral-200/90 bg-neutral-50/80 p-6 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="font-InterBold text-base font-bold text-neutral-950 dark:text-ink">If this helped you</p>
      <p className="mt-2 text-sm text-neutral-700 dark:text-ink/80">
        I publish free tutorials and write-ups like this in my spare time — no paywall on the guides. If it saved you
        an afternoon of trial and error, you can support the work:
      </p>
      <ul className="mt-4 space-y-3 text-sm">
        <li>
          <span aria-hidden="true">→ </span>
          <a
            href="https://buymeacoffee.com/safdarali"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a coffee at buymeacoffee.com/safdarali
          </a>
        </li>
        <li>
          <span aria-hidden="true">👉 </span>
          <a
            href="https://www.youtube.com/@safdarali_?sub_confirmation=1"
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to my YouTube channel
          </a>
          <span className="text-neutral-600 dark:text-ink/70"> — it&apos;s free; 70+ React &amp; Next.js tutorials</span>
        </li>
      </ul>
    </div>
  );
}
