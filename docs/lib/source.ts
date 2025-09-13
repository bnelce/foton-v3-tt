import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { docsPt, metaPt, docsEn, metaEn } from "@/.source";

export function getSource(locale?: string) {
  const isPt = !locale || locale.toLowerCase().startsWith("pt");
  return loader({
    baseUrl: "/docs",
    source: createMDXSource(isPt ? docsPt : docsEn, isPt ? metaPt : metaEn),
  });
}

// Backward-compatible default export using PT-BR as base
export const source = getSource("pt-BR");
