import { featuredProjects } from "../../data/featured-projects";

describe("featured-projects", () => {
  it("has exactly 3 homepage featured projects", () => {
    expect(featuredProjects).toHaveLength(3);
  });

  it("FrameSnap is first with live and GitHub", () => {
    const framesnap = featuredProjects[0];
    expect(framesnap.title).toBe("FrameSnap");
    expect(framesnap.liveLink).toBe("https://framesnap.safdarali.in");
    expect(framesnap.codeLink).toBe("https://github.com/Safdar-Ali-India/FrameSnap");
  });

  it("ReviewMate is second with GitHub only until Marketplace launch", () => {
    const reviewmate = featuredProjects[1];
    expect(reviewmate.title).toBe("ReviewMate");
    expect(reviewmate.codeLink).toBe("https://github.com/Safdar-Ali-India/ReviewMate");
    expect(reviewmate.installLink).toBeUndefined();
    expect(reviewmate.badge).toMatch(/Marketplace/i);
  });

  it("SafDash is third with live and GitHub", () => {
    const safdash = featuredProjects[2];
    expect(safdash.title).toBe("SafDash");
    expect(safdash.liveLink).toBe("https://saf-dash.vercel.app");
    expect(safdash.codeLink).toBe("https://github.com/Safdar-Ali-India/SafDash");
  });

  it("every project has title, description, image, and links", () => {
    for (const project of featuredProjects) {
      expect(project.title).toBeTruthy();
      expect(project.subtitle).toBeTruthy();
      expect(project.imgLink).toBeTruthy();
      expect(project.liveLink || project.codeLink || project.installLink).toMatch(/^https?:\/\//);
    }
  });
});
