import { createSearchAPI } from "fumadocs-core/search/server";
import { getSource } from "@/lib/source";

export const { GET } = createSearchAPI("advanced", {
  indexes: getSource("pt-BR").getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    id: page.url,
    url: page.url,
  })),
});
