import { getHighlighter } from "@shikijs/compat";
import { rehypeCode, remarkGfm } from "fumadocs-core/mdx-plugins";
import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen";
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkMath from "remark-math";
import { z } from "zod";
import { rehypeComponent } from "@/lib/rehype-component";

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypePlugins: [
      rehypeCode,
      rehypeSlug,
      rehypeComponent,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          getHighlighter: () =>
            getHighlighter({
              themes: ["github-dark", "github-light"],
            }),
          onVisitLine(node: { children: { length: number } }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: {
            properties: { className: string[] };
          }) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: {
            properties: { className: string[] };
          }) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
    ],
    remarkPlugins: [
      codeImport,
      remarkGfm,
      remarkMath,
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
  },
});

// Phase 2: prepare multi-locale doc sources.
// For now, both locales point to the existing directory. In Phase 2b, we'll
// move content into content/pt-br/docs and content/en/docs respectively.

export const { docs: docsPt, meta: metaPt } = defineDocs({
  dir: "content/pt-br/docs",
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.boolean().optional(),
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    }),
  },
});

export const { docs: docsEn, meta: metaEn } = defineDocs({
  dir: "content/en/docs",
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.boolean().optional(),
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    }),
  },
});
