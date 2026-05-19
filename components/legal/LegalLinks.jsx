import Link from "next/link";
import { LEGAL_PAGES } from "../../lib/legal-config";

/**
 * Compact legal links — import into Footer or contact page when you pick placement.
 * Example: <LegalLinks className="mt-6 justify-center" />
 */
export default function LegalLinks({ className = "" }) {
  return (
    <nav
      aria-label="Legal"
      className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-neutral-500 dark:text-ink/55 ${className}`}
    >
      <Link
        href={LEGAL_PAGES.privacy.path}
        className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-ink/90"
      >
        Privacy Policy
      </Link>
      <span className="text-neutral-300 dark:text-ink/25" aria-hidden="true">
        ·
      </span>
      <Link
        href={LEGAL_PAGES.terms.path}
        className="underline underline-offset-2 hover:text-neutral-800 dark:hover:text-ink/90"
      >
        Terms &amp; Conditions
      </Link>
    </nav>
  );
}
