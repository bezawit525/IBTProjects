import { NextResponse } from 'next/server';

// LAYER 1 (optimistic only): bounce visitors with no session cookie.
// This is NOT the security check - it only looks for a cookie's presence.
// Real checks live in requireUser() (pages) and the actions/handlers.
export function middleware(request) {
  if (!request.cookies.get('session')) {
    const url = new URL('/signin', request.url);
    url.searchParams.set('next', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/dashboard/:path*'] };
