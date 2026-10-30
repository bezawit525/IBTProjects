import { NextResponse } from "next/server";

export function middleware(request) {
  // Middleware is an early redirect only. Session signatures and permissions
  // are checked again in server pages, actions, and route handlers.
  const hasSessionCookie = Boolean(request.cookies.get("session")?.value);
  if (!hasSessionCookie) {
    const url = new URL("/signin", request.url);
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout/:path*", "/orders/:path*", "/kitchen/:path*"]
};
