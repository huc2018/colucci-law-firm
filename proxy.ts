import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const pathname = request.nextUrl.pathname;

  let siteLang = "zh-CN";
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
