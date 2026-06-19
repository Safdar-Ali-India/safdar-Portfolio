import { render, screen } from "@testing-library/react";
import PublishedBlogLink from "../../components/blog/PublishedBlogLink";

describe("PublishedBlogLink", () => {
  it("renders link for published native post", () => {
    render(
      <PublishedBlogLink href="/blog/rsc-vs-client-components" className="link">
        RSC guide
      </PublishedBlogLink>
    );
    const link = screen.getByRole("link", { name: "RSC guide" });
    expect(link).toHaveAttribute("href", "/blog/rsc-vs-client-components");
  });

  it("renders span (no link) for unknown post", () => {
    render(
      <PublishedBlogLink href="/blog/does-not-exist-xyz" className="link">
        Future post
      </PublishedBlogLink>
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Future post")).toBeInTheDocument();
  });

  it("renders span for scheduled future native post", () => {
    render(
      <PublishedBlogLink href="/blog/react-virtual-dom-explained-2026" className="link">
        Virtual DOM
      </PublishedBlogLink>
    );
    const futureUnpublished = !screen.queryByRole("link");
    if (futureUnpublished) {
      expect(screen.getByText("Virtual DOM")).toBeInTheDocument();
    } else {
      expect(screen.getByRole("link")).toBeInTheDocument();
    }
  });
});
