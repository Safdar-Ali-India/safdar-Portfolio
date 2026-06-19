import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeaturedProjectCard from "../../components/FeaturedProjectCard";

const shortProject = {
  title: "Test Project",
  subT: "Short description.",
  imgLink: { src: "/test.png" },
  liveLink: "https://example.com",
};

const longSubT =
  "Free video thumbnail generator I built and open-sourced — drop MP4/WebM/MOV, scrub or auto-snap frames, export HD PNG or ZIP. Runs entirely in your browser: no upload, no signup, no watermark.";

describe("FeaturedProjectCard", () => {
  it("renders title and description", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    expect(screen.getByRole("heading", { name: "Test Project" })).toBeInTheDocument();
    expect(screen.getByText("Short description.")).toBeInTheDocument();
  });

  it("links thumbnail to live site", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    const thumb = screen.getByRole("link", { name: "View Test Project" });
    expect(thumb).toHaveAttribute("href", "https://example.com");
    expect(thumb).toHaveAttribute("target", "_blank");
  });

  it("shows View project CTA", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    expect(screen.getByRole("link", { name: /View project/i })).toHaveAttribute(
      "href",
      "https://example.com"
    );
  });

  it("shows Source code when codeLink provided", () => {
    render(
      <FeaturedProjectCard
        {...shortProject}
        codeLink="https://github.com/Safdar-Ali-India/FrameSnap"
      />
    );
    expect(screen.getByRole("link", { name: /Source code/i })).toHaveAttribute(
      "href",
      "https://github.com/Safdar-Ali-India/FrameSnap"
    );
  });

  it("hides Source code when no codeLink", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    expect(screen.queryByRole("link", { name: /Source code/i })).not.toBeInTheDocument();
  });

  it("shows Read more for long descriptions and toggles", async () => {
    const user = userEvent.setup();
    render(<FeaturedProjectCard {...shortProject} subT={longSubT} />);

    expect(screen.getByRole("button", { name: "Read more" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Read more" }));
    expect(screen.getByRole("button", { name: "Read less" })).toBeInTheDocument();
  });

  it("does not show Read more for short descriptions", () => {
    render(<FeaturedProjectCard {...shortProject} />);
    expect(screen.queryByRole("button", { name: "Read more" })).not.toBeInTheDocument();
  });
});
