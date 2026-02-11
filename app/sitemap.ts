// app/sitemap.ts
import type { MetadataRoute } from "next";
import { stat } from "fs/promises";
import path from "path";
import { practiceSlugs } from "./practice-areas/data";

async function resolveLastModified(): Promise<Date> {
  const filesToCheck = [
    path.join(process.cwd(), "constants.ts"),
    path.join(process.cwd(), "app", "practice-areas", "data.ts"),
    path.join(process.cwd(), "app", "layout.tsx"),
  ];

  const stats = await Promise.all(
    filesToCheck.map(async (filePath) => {
      try {
        return await stat(filePath);
      } catch {
        return null;
      }
    }),
  );

  const latestMs = stats.reduce((latest, item) => {
    if (!item) return latest;
    return Math.max(latest, item.mtimeMs);
  }, 0);

  return latestMs > 0 ? new Date(latestMs) : new Date();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://coluccilawfirm.com";
  const lastModified = await resolveLastModified();

  const languageRoutes = ["zh", "en"];
  const routes = languageRoutes.flatMap((lang) => [
    `${lang}`,
    ...practiceSlugs.map((slug) => `${lang}/practice-areas/${slug}`),
  ]);

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "zh" || route === "en" ? 1.0 : 0.7,
  }));
}
