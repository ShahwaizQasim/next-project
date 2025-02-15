import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);
    console.log("middleware file is running");

    const token = await getToken({ req: request, secret: "12345" });

    const { pathname } = request.nextUrl;

    if (token && (pathname === "/login" || pathname === "/signup")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!token && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/login", "/signup", "/dashboard/:path*"],
};
