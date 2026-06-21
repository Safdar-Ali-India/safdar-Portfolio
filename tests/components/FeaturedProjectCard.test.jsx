import { render, screen } from "@testing-library/react";
import FeaturedProjectCard from "../../components/FeaturedProjectCard";

const shortProject = {
  title: "Test Project",
  subtitle: "Short description.",
  imgLink: { src: "/test.png" },
  liveLink: "https://example.com",
  codeLink: "https://github.com/example/repo",
};

describe("FeaturedProjectCard", () => {
  it("renders title and description", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    expect(screen.getByRole("heading", { name: "Test Project" })).toBeInTheDocument();
    expect(screen.getByText("Short description.")).toBeInTheDocument();
  });

  it("links thumbnail to live site", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    const thumb = screen.getByRole("link", { name: "Open Test Project" });
    expect(thumb).toHaveAttribute("href", "https://example.com");
    expect(thumb).toHaveAttribute("target", "_blank");
  });

  it("shows Live demo and GitHub CTAs", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    expect(screen.getByRole("link", { name: /Live demo/i })).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/example/repo"
    );
  });

  it("shows Install for extension projects", () => {
    render(
      <FeaturedProjectCard
        title="ReviewMate"
        subtitle="VS Code extension."
        imgLink={{ src: "/test.png" }}
        installLink="https://github.com/example/setup"
        codeLink="https://github.com/example/repo"
        badge="Marketplace soon"
      />
    );
    expect(screen.getByRole("link", { name: /Install/i })).toBeInTheDocument();
    expect(screen.getByText("Marketplace soon")).toBeInTheDocument();
  });

  it("shows Visit when only liveLink is provided", () => {
    render(
      <FeaturedProjectCard
        title="Client Site"
        subtitle="Production build."
        imgLink={{ src: "/test.png" }}
        liveLink="https://example.com"
      />
    );
    expect(screen.getByRole("link", { name: "Visit" })).toHaveAttribute("href", "https://example.com");
  });
});
