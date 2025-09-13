import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getSource } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const locales: ("pt-BR" | "en")[] = ["pt-BR", "en"];
  const localizedDocs: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = locale === "en" ? "/en" : "";
    const src = getSource(locale);
    for (const page of src.getPages()) {
      localizedDocs.push({
        url: `${baseUrl}${prefix}/docs/${page.slugs.join("/")}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return [...routes, ...localizedDocs];
}
