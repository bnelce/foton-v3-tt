import { DocsLayout as DocsLayoutImpl } from "fumadocs-ui/layouts/docs";
import { getDocsOptions } from "@/config/layout";

interface DocsLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function DocsLayout({ children, params }: DocsLayoutProps) {
  return (
    <DocsLayoutImpl {...getDocsOptions(params.locale)}>{children}</DocsLayoutImpl>
  );
}

