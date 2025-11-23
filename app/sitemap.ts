// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coluccilawfirm.com";

  const routes = [
    "", // Home
    "attorney", // Virtual SEO page
    "practice-areas", // Virtual SEO page
    "contact", // Virtual SEO page
  ];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.7,
  }));
}
