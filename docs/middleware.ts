import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ["pt-BR", "en"] as const;
const DEFAULT_LOCALE = "pt-BR" as const;

function detectLocale(req: NextRequest): (typeof LOCALES)[number] {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && LOCALES.includes(cookie as any)) return cookie as any;

  const header = req.headers.get("accept-language")?.toLowerCase() ?? "";
  if (header.startsWith("en")) return "en";
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore API, public files, Next internals, and the registry JSONs
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/r/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if the path already includes a supported locale prefix
  const hasLocalePrefix = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );

  if (!hasLocalePrefix) {
    const locale = detectLocale(req);
    // Rewrite internally to the locale-specific path while keeping the URL clean for default locale
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

