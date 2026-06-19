import { render, screen } from "@testing-library/react";
import PageBackHeader from "../../components/PageBackHeader";

describe("PageBackHeader", () => {
  it("renders children", () => {
    render(
      <PageBackHeader>
        <h1>Page Title</h1>
      </PageBackHeader>
    );
    expect(screen.getByRole("heading", { name: "Page Title" })).toBeInTheDocument();
  });

  it("shows back to home link by default", () => {
    render(
      <PageBackHeader>
        <h1>Projects</h1>
      </PageBackHeader>
    );
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });

  it("shows back to blog link when back=blog", () => {
    render(
      <PageBackHeader back="blog">
        <h1>Article</h1>
      </PageBackHeader>
    );
    expect(screen.getByRole("link", { name: "All posts" })).toBeInTheDocument();
  });
});
