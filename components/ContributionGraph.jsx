"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { GITHUB_USERNAME } from "../lib/github-contributions";

/** Sujal-style grayscale scale */
const THEME = {
  light: ["#f4f4f5", "#d4d4d8", "#a1a1aa", "#52525b", "#18181b"],
  dark: ["#27272a", "#3f3f46", "#71717a", "#a1a1aa", "#fafafa"],
};

/** GitHub contribution heatmap — stretched to match BY THE NUMBERS width. */
export default function ContributionGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colorScheme = mounted && resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div
      className={[
        "w-full text-neutral-600 dark:text-ink/70",
        "[&_.react-activity-calendar]:w-full",
        "[&_.react-activity-calendar__scroll-container]:w-full [&_.react-activity-calendar__scroll-container]:overflow-visible",
        "[&_.react-activity-calendar__calendar]:!w-full [&_.react-activity-calendar__calendar]:h-auto",
        "[&_.react-activity-calendar__footer]:w-full",
      ].join(" ")}
    >
      <GitHubCalendar
        username={GITHUB_USERNAME}
        colorScheme={colorScheme}
        theme={THEME}
        fontSize={12}
        blockSize={12}
        blockMargin={3}
        blockRadius={2}
        style={{ width: "100%", maxWidth: "100%" }}
        labels={{
          totalCount: "{{count}} activities in {{year}}",
        }}
      />
    </div>
  );
}
