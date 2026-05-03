import type { MetadataRoute } from "next";

const baseUrl = "https://safdarali.in";

// If you add dynamic blog posts or project detail routes, fetch them here and merge into the array below.
// Example:
// const posts = await fetch(`${baseUrl}/api/posts`).then((r) => r.json());
// const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
//   url: `${baseUrl}/blog/${post.slug}`,
//   lastModified: new Date(post.updatedAt),
//   changeFrequency: "monthly",
//   priority: 0.6,
// }));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  return [...staticPages];
}
