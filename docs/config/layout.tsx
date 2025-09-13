import type { DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { CheckIcon } from "lucide-react";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { getSource } from "@/lib/source";

export function getBaseOptions(locale?: string): BaseLayoutProps {
  const isEn = locale?.toLowerCase().startsWith("en");
  const docsUrl = isEn ? "/en/docs" : "/docs";
  return {
    nav: {
      title: (
        <>
          <Icons.logo className="size-4" />
          <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
            {siteConfig.name}
          </span>
        </>
      ),
    },
    links: [
      { text: "Docs", url: docsUrl },
      // Simple language switcher
      { text: "PT-BR", url: "/docs" },
      { text: "EN", url: "/en/docs" },
      {
        type: "icon",
        url: siteConfig.links.github,
        text: "Github",
        icon: <Icons.gitHub className="size-4" />,
        external: true,
      },
    ],
  };
}

export const docsOptions: DocsLayoutProps = {
  ...getBaseOptions("pt-BR"),
  tree: getSource("pt-BR").pageTree,
  sidebar: { defaultOpenLevel: 1 },
};

export function getDocsOptions(locale?: string): DocsLayoutProps {
  return {
    ...getBaseOptions(locale),
    tree: getSource(locale).pageTree,
    sidebar: { defaultOpenLevel: 1 },
  };
}
