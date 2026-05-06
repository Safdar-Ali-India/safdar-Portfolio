"use client";

import { useEffect, useState } from "react";
import { SparklesCore } from "./sparkles";

export default function DeferredSparkles(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const reveal = () => {
      if (!cancelled) setShow(true);
    };

    // Don’t compete with LCP on cold loads (esp. Incognito).
    // Prefer idle, otherwise fall back quickly.
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(reveal, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const t = window.setTimeout(reveal, 350);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  if (!show) return null;
  return <SparklesCore {...props} />;
}

