import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DynamicLink } from "@/components/dynamic-link";
import { Mdx } from "@/components/mdx-components";
import { getSource } from "@/lib/source";

interface DocPageParams {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
}

export async function generateStaticParams() {
  const locales = ["pt-BR", "en"] as const;
  const params: { locale: string; slug?: string[] }[] = [];

  for (const locale of locales) {
    const src = getSource(locale);
    for (const page of src.getPages()) {
      params.push({ locale, slug: page.slugs });
    }
  }

  return params;
}

export async function generateMetadata(
  props: DocPageParams,
): Promise<Metadata> {
  const params = await props.params;
  const src = getSource(params.locale);
  let page = src.getPage(params.slug);

  if (!page) {
    // Fallback to the other locale if missing
    const fallback = params.locale?.toLowerCase().startsWith("pt") ? "en" : "pt-BR";
    page = getSource(fallback).getPage(params.slug);
  }

  if (!page) return {};

  const isEn = params.locale?.toLowerCase().startsWith("en");
  const prefix = isEn ? "/en" : "";
  const slugPath = `/${["docs", ...(params.slug ?? [])].join("/")}`;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      languages: {
        "pt-BR": slugPath,
        "en-US": `/en${slugPath}`,
      },
    },
  };
}

export default async function DocPage(props: DocPageParams) {
  const params = await props.params;
  const src = getSource(params.locale);
  let page = src.getPage(params.slug);

  if (!page) {
    const fallback = params.locale?.toLowerCase().startsWith("pt") ? "en" : "pt-BR";
    page = getSource(fallback).getPage(params.slug);
  }

  if (!page) notFound();

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <div className="flex flex-col gap-2">
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-2.5">
          {page.data.description}
        </DocsDescription>
        <div className="flex items-center gap-2">
          {page.data.links?.doc ? (
            <DynamicLink href={page.data.links.doc}>
              {params.locale?.toLowerCase().startsWith("en") ? "Docs" : "Documentação"}
            </DynamicLink>
          ) : null}
          {page.data.links?.api ? (
            <DynamicLink href={page.data.links.api}>API</DynamicLink>
          ) : null}
        </div>
      </div>
      <DocsBody>
        <Mdx page={page} />
      </DocsBody>
    </DocsPage>
  );
}
