import { withAuth } from "next-auth/middleware"
import { useLocale } from "next-intl";
import { NextResponse } from "next/server"

export default withAuth(function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token);
    const locale = useLocale();

    if (req.nextUrl.pathname.startsWith(`/${locale}/admin`)) {
        return NextResponse.rewrite(new URL("/", req.url));
    }
},
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
)

export const config = { matcher: ["/admin"] }