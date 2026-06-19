import { featuredProjects } from "../../data/featured-projects";

describe("featured-projects", () => {
  it("has exactly 3 homepage featured projects", () => {
    expect(featuredProjects).toHaveLength(3);
  });

  it("FrameSnap is first with live and code links", () => {
    const framesnap = featuredProjects[0];
    expect(framesnap.title).toBe("FrameSnap");
    expect(framesnap.liveLink).toBe("https://framesnap.safdarali.in");
    expect(framesnap.codeLink).toBe("https://github.com/Safdar-Ali-India/FrameSnap");
    expect(framesnap.imgLink).toBeTruthy();
    expect(framesnap.subT.length).toBeGreaterThan(20);
  });

  it("Adsclique Media is second", () => {
    const ads = featuredProjects[1];
    expect(ads.title).toBe("Adsclique Media");
    expect(ads.liveLink).toBe("https://adsclique.com");
    expect(ads.codeLink).toBeUndefined();
  });

  it("Cube is third", () => {
    const cube = featuredProjects[2];
    expect(cube.title).toContain("Cube");
    expect(cube.liveLink).toBe("https://cubehq.ai");
  });

  it("every project has title, description, image, and live link", () => {
    for (const project of featuredProjects) {
      expect(project.title).toBeTruthy();
      expect(project.subT).toBeTruthy();
      expect(project.imgLink).toBeTruthy();
      expect(project.liveLink).toMatch(/^https?:\/\//);
    }
  });
});
