import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

const btnClass =
  "inline-flex shrink-0 items-center justify-center w-11 h-9 sm:w-12 sm:h-8 rounded-md bg-neutral-700/10 text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400";

export default function BackToHomeLink() {
  return (
    <Link href="/" className={btnClass} aria-label="Back to home">
      <TbArrowBackUp className="text-xl shrink-0 dark:text-ink" aria-hidden />
    </Link>
  );
}
