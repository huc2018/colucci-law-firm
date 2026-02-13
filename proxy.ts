import { NextRequest, NextResponse } from "next/server";

function pickSiteLangFromAcceptLanguage(acceptLanguage: string | null): "zh-CN" | "en-US" {
  if (!acceptLanguage) {
    return "en-US";
  }

  return /\bzh(?:-[A-Za-z]{2,4})?\b/i.test(acceptLanguage) ? "zh-CN" : "en-US";
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const pathname = request.nextUrl.pathname;

  let siteLang = pickSiteLangFromAcceptLanguage(request.headers.get("accept-language"));
  if (pathname.startsWith("/en")) {
    siteLang = "en-US";
  } else if (pathname.startsWith("/zh")) {
    siteLang = "zh-CN";
  }

  requestHeaders.set("x-site-lang", siteLang);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|apple-touch-icon.png|icon.png|.*\\..*).*)",
  ],
};
