import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }) =>
    React.createElement("img", {
      src: typeof src === "string" ? src : src?.src ?? "",
      alt,
      ...props,
    }),
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }) =>
    React.createElement(
      "a",
      { href: typeof href === "string" ? href : href?.pathname ?? "#", ...props },
      children
    ),
}));
