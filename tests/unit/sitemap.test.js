import sitemap from "../../app/sitemap";

const BASE = "https://safdarali.in";

describe("sitemap", () => {
  it("includes core static pages", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls).toContain(BASE);
    expect(urls).toContain(`${BASE}/about`);
    expect(urls).toContain(`${BASE}/projects`);
    expect(urls).toContain(`${BASE}/blog`);
    expect(urls).toContain(`${BASE}/contact`);
    expect(urls).toContain(`${BASE}/skills`);
    expect(urls).toContain(`${BASE}/privacy-policy`);
    expect(urls).toContain(`${BASE}/terms`);
  });

  it("includes only published native blog URLs", () => {
    const entries = sitemap();
    const blogUrls = entries.filter((e) => e.url.includes("/blog/")).map((e) => e.url);

    expect(blogUrls.length).toBeGreaterThan(0);
    for (const url of blogUrls) {
      expect(url).toMatch(/^https:\/\/safdarali\.in\/blog\//);
    }
  });

  it("every entry has url and lastModified", () => {
    const entries = sitemap();
    for (const entry of entries) {
      expect(entry.url).toBeTruthy();
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });

  it("homepage has highest priority", () => {
    const entries = sitemap();
    const home = entries.find((e) => e.url === BASE);
    const maxPriority = Math.max(...entries.map((e) => e.priority ?? 0));
    expect(home?.priority).toBe(maxPriority);
  });
});
