import React from "react"
import { MAILTO_HREF } from "../lib/site"

const Contact = () => {
  return (
    <section className="mb-14" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="sr-only">
        Contact Safdar Ali
      </h2>
      <div className="py-8 lg:pt-16 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-12 text-center text-sm text-neutral-600 dark:text-ink">
          Prefer email?{" "}
          <a
            href={MAILTO_HREF}
            className="font-medium underline underline-offset-2 text-neutral-900 decoration-neutral-500 hover:text-neutral-950 dark:text-ink dark:decoration-white/50 dark:hover:text-ink"
          >
            Open in your mail app
          </a>
          {" "}
          — no address shown here to reduce spam.
        </p>
        <form
          method="POST"
          action="https://getform.io/f/raeqwwma"
          className="space-y-8"
          aria-label="Send a message to Safdar Ali"
        >
          <div>
            <label htmlFor="email" className="block text-neutral-600 dark:text-ink/90 text-xs font-InterBold uppercase font-bold my-2">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block p-3 w-full text-sm rounded-lg border border-neutral-300 bg-white text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600 dark:border-white/[0.12] dark:bg-white/[0.05] dark:text-ink dark:placeholder:text-ink/45 dark:focus:ring-white/20 dark:focus:border-white/25"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="fullname" className="block text-neutral-600 dark:text-ink/90 text-xs font-InterBold uppercase font-bold my-2">
              Full name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              autoComplete="name"
              className="block p-3 w-full text-sm rounded-lg border border-neutral-300 bg-white text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600 dark:border-white/[0.12] dark:bg-white/[0.05] dark:text-ink dark:placeholder:text-ink/45 dark:focus:ring-white/20 dark:focus:border-white/25"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-neutral-600 dark:text-ink/90 text-xs font-InterBold uppercase font-bold my-2">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              autoComplete="off"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-600 dark:border-white/[0.12] dark:bg-white/[0.05] dark:text-ink dark:placeholder:text-ink/45 dark:focus:ring-white/20 dark:focus:border-white/25"
              placeholder="Can you help me ship this project?..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full justify-center gap-x-4 font-medium rounded-xl border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-white dark:border-white/[0.12] dark:bg-white/[0.08] dark:text-ink dark:hover:bg-white/[0.12] transition-colors"
          >
            Send message
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 shrink-0" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
