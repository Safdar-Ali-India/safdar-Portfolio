import React from "react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
}

const NotFound = () => {
  return (
    <section className="bg-white dark:bg-night" aria-labelledby="not-found-heading">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="w-full lg:w-1/2">
          <p className="text-sm font-medium text-blue-600 dark:text-ink/80">404 error</p>
          <h1 id="not-found-heading" className="mt-3 text-2xl font-semibold text-gray-800 dark:text-ink md:text-3xl">
            404 — Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-ink/75">Sorry, the page you are looking for doesn&apos;t exist.</p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              href="/"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 rounded-lg gap-x-2 sm:w-auto bg-blue-700 text-white border border-blue-800 hover:bg-blue-800 dark:bg-ink dark:text-night dark:border-transparent dark:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 dark:focus-visible:outline-ink/70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180 shrink-0" aria-hidden="true" focusable="false">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              <span>Back to home</span>
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0" aria-hidden="true">
          <Image
            className="w-full max-w-lg lg:mx-auto"
            src="https://merakiui.com/images/components/illustration.svg"
            alt=""
            height={550}
            width={550}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default NotFound
