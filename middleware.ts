import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

let locales = ["en-US", "pt-PT", "pt-BR"];

function getLocale(request: NextRequest) {
  let headers = { "accept-language": "pt-BR,pt;q=0.5" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "pt-BR";

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log("pathname", pathname);
  console.log("locales", locales);
  console.log("pathnameHasLocale", pathnameHasLocale);

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);

  console.log("locale", locale);
  console.log("pathname", pathname);
  console.log("request.nextUrl", request.nextUrl);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!images|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
