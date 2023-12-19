import { NextRequest, NextResponse } from "next/server";

let defaultLocale = process.env.DEBUG_LANGUAGE || "en";
let tldLocales = [
  {
    tld: ".com",
    locale: "en",
  },
  {
    tld: ".com.br",
    locale: "pt-br",
  },
];

function getDomainLocale(hostname: string) {
  const { locale } = tldLocales.find(({ tld }) => hostname.endsWith(tld)) || {
    locale: defaultLocale,
  };

  return locale;
}

export function middleware(request: NextRequest) {
  const selectedLanguage = request.headers.get("X-Selected-Language");
  const { hostname } = request.nextUrl;

  const domainLocale = getDomainLocale(hostname);

  if (domainLocale === selectedLanguage) {
    return;
  }

  let response = NextResponse.next();
  response.headers.set("X-Selected-Language", domainLocale);

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!images|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
