import { openSourceProjects, productionProjects } from "../../data/personal-projects";
import { clientWork } from "../../data/client-work";

describe("openSourceProjects", () => {
  it("lists four flagship open-source projects in priority order", () => {
    expect(openSourceProjects.map((p) => p.title)).toEqual([
      "FrameSnap",
      "ReviewMate",
      "SafDash",
      "ConvoFlow",
      "React Chat Component",
    ]);
  });

  it("FrameSnap has live site and GitHub", () => {
    const framesnap = openSourceProjects[0];
    expect(framesnap.liveLink).toBe("https://framesnap.safdarali.in");
    expect(framesnap.codeLink).toBe("https://github.com/Safdar-Ali-India/FrameSnap");
  });

  it("ReviewMate has Install and GitHub links", () => {
    const reviewmate = openSourceProjects[1];
    expect(reviewmate.installLink).toContain("ReviewMate");
    expect(reviewmate.codeLink).toBe("https://github.com/Safdar-Ali-India/ReviewMate");
    expect(reviewmate.badge).toMatch(/Marketplace/i);
  });

  it("SafDash has live URL and GitHub", () => {
    const safdash = openSourceProjects[2];
    expect(safdash.liveLink).toBe("https://saf-dash.vercel.app");
    expect(safdash.codeLink).toBe("https://github.com/Safdar-Ali-India/SafDash");
  });

  it("ConvoFlow has live demo and GitHub", () => {
    const convo = openSourceProjects[3];
    expect(convo.liveLink).toBe("https://convo-flow-chi.vercel.app");
    expect(convo.codeLink).toBe("https://github.com/Safdar-Ali-India/ConvoFlow");
  });

  it("React Chat Component is in progress without repo yet", () => {
    const chat = openSourceProjects[4];
    expect(chat.pendingCode).toBe(true);
    expect(chat.badge).toMatch(/progress/i);
  });
});

describe("productionProjects", () => {
  it("includes Adsclique and Cube", () => {
    expect(productionProjects).toHaveLength(2);
    expect(productionProjects[0].title).toContain("Adsclique");
    expect(productionProjects[1].title).toContain("Cube");
  });
});

describe("clientWork", () => {
  it("has five collapsible client projects", () => {
    expect(clientWork).toHaveLength(5);
    expect(clientWork.map((c) => c.title)).toEqual([
      "Lorazzo",
      "Dr. Disha Dinakar",
      "M Salon Beverly Hills",
      "Sommet Beauty",
      "IndependentMed",
    ]);
  });

  it("includes Lorazzo and Dr. Disha Dinakar live links", () => {
    expect(clientWork[0].liveLink).toBe("https://lorazzo.com");
    expect(clientWork[1].liveLink).toBe("https://drdishadinakar.com");
  });
});
