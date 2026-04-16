import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tech-hive.in",
      lastModified: new Date("2026-04-16"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
