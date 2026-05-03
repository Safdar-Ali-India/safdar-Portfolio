import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

export default function BackToHomeLink() {
  return (
    <Link
      href="/"
      className="absolute -top-2 left-0 inline-flex items-center justify-center w-12 h-8 rounded-md bg-neutral-700/10 text-inherit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400"
      aria-label="Back to home"
    >
      <TbArrowBackUp className="dark:text-ink light:text-black text-xl shrink-0" aria-hidden />
    </Link>
  );
}
