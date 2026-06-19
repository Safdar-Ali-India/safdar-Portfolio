import {
  formatBlogMonthLabel,
  getPublishInstant,
  isPublished,
  publishedAtDateOnly,
  scheduleSlotAt0900Ist,
  sortByPublishedDesc,
  toOpenGraphPublishedTime,
} from "../../lib/blog-schedule";

describe("blog-schedule", () => {
  describe("getPublishInstant", () => {
    it("returns 0 for empty publishedAt", () => {
      expect(getPublishInstant("")).toBe(0);
      expect(getPublishInstant(null)).toBe(0);
    });

    it("parses date-only as midnight IST", () => {
      const ms = getPublishInstant("2026-06-01");
      expect(new Date(ms).toISOString()).toBe("2026-05-31T18:30:00.000Z");
    });

    it("parses ISO with IST offset", () => {
      const ms = getPublishInstant("2026-06-02T09:00:00+05:30");
      expect(new Date(ms).toISOString()).toBe("2026-06-02T03:30:00.000Z");
    });
  });

  describe("publishedAtDateOnly", () => {
    it("returns YYYY-MM-DD slice", () => {
      expect(publishedAtDateOnly("2026-06-02T09:00:00+05:30")).toBe("2026-06-02");
      expect(publishedAtDateOnly("2026-05-31")).toBe("2026-05-31");
    });
  });

  describe("toOpenGraphPublishedTime", () => {
    it("returns UTC ISO string", () => {
      expect(toOpenGraphPublishedTime("2026-06-01")).toBe("2026-05-31T18:30:00.000Z");
    });
  });

  describe("isPublished", () => {
    it("returns true when publishedAt is missing", () => {
      expect(isPublished(undefined)).toBe(true);
    });

    it("returns false before publish instant", () => {
      const before = new Date("2026-06-01T08:00:00+05:30");
      expect(isPublished("2026-06-02T09:00:00+05:30", before)).toBe(false);
    });

    it("returns true at publish instant", () => {
      const at = new Date("2026-06-02T09:00:00+05:30");
      expect(isPublished("2026-06-02T09:00:00+05:30", at)).toBe(true);
    });

    it("returns true after publish instant", () => {
      const after = new Date("2026-12-01T00:00:00+05:30");
      expect(isPublished("2026-06-01", after)).toBe(true);
    });
  });

  describe("sortByPublishedDesc", () => {
    it("sorts newest first", () => {
      const posts = [
        { publishedAt: "2026-01-01" },
        { publishedAt: "2026-06-01" },
        { publishedAt: "2026-03-01" },
      ];
      const sorted = sortByPublishedDesc(posts);
      expect(sorted.map((p) => p.publishedAt)).toEqual(["2026-06-01", "2026-03-01", "2026-01-01"]);
    });

    it("does not mutate input", () => {
      const posts = [{ publishedAt: "2026-01-01" }, { publishedAt: "2026-06-01" }];
      sortByPublishedDesc(posts);
      expect(posts[0].publishedAt).toBe("2026-01-01");
    });
  });

  describe("formatBlogMonthLabel", () => {
    it("formats month and year", () => {
      expect(formatBlogMonthLabel("2026-06-02T09:00:00+05:30")).toBe("Jun 2026");
      expect(formatBlogMonthLabel("2026-12-01")).toBe("Dec 2026");
    });
  });

  describe("scheduleSlotAt0900Ist", () => {
    it("slot 0 is first Tuesday 09:00 IST", () => {
      expect(scheduleSlotAt0900Ist(0)).toBe("2026-06-02T09:00:00+05:30");
    });

    it("slot 1 is Thursday same week", () => {
      expect(scheduleSlotAt0900Ist(1)).toBe("2026-06-04T09:00:00+05:30");
    });

    it("slot 2 is Tuesday next week", () => {
      expect(scheduleSlotAt0900Ist(2)).toBe("2026-06-09T09:00:00+05:30");
    });
  });
});
