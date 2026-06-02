import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin/dashboard");
  if (!isAdminRoute) return NextResponse.next();

  const hasSession = request.cookies.get("admin_session")?.value === "true";
  if (hasSession) return NextResponse.next();

  return NextResponse.redirect(new URL("/admin", request.url));
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
