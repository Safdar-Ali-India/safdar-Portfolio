"use client";

import React, { useEffect, useState } from "react";

const QUOTES = [
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    cite: "https://en.wikiquote.org/wiki/Linus_Torvalds",
  },
  {
    text: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    author: "Grace Hopper",
    cite: "https://en.wikiquote.org/wiki/Grace_Hopper",
  },
  {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
    cite: "https://en.wikiquote.org/wiki/Donald_Knuth",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    cite: "https://www.goodreads.com/quotes/386417-first-solve-the-problem-then-write-the-code",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    cite: "https://www.goodreads.com/quotes/360068-simplicity-is-the-soul-of-efficiency",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    cite: "https://www.goodreads.com/quotes/144383-any-fool-can-write-code-that-a-computer-can-understand",
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian Kernighan",
    cite: "https://en.wikiquote.org/wiki/Brian_Kernighan",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    cite: "https://www.goodreads.com/quotes/436173-the-only-way-to-do-great-work-is-to-love-what-you-do",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    cite: "https://www.goodreads.com/quotes/161431-innovation-distinguishes-between-a-leader-and-a-follower",
  },
];

function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * QUOTES.length));
  }, []);

  const current = QUOTES[index] ?? QUOTES[0];

  return (
    <>
      <span className="relative mx-36 flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75" />
      </span>
      <div className="mb-48 mt-10 px-10 py-12 text-center light:text-slate-800 lg:mb-28 lg:mt-10">
        <blockquote cite={current.cite} className="font-InterBold text-lg font-semibold dark:text-ink">
          <p>&quot;{current.text}&quot;</p>
          <footer className="mt-2 text-base font-normal not-italic light:text-slate-700 dark:text-ink/75">
            <span className="sr-only">Attributed to </span>
            {current.author}
          </footer>
        </blockquote>
      </div>
    </>
  );
}

export default Footer;
