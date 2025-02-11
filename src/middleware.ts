import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');
    const publicPaths = ['/login'];

    if (token) {
        return NextResponse.next();
    }

    if (!token && !publicPaths.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

//applicable paths
export const config = {
    matcher: [
        '/dashboard',
        "/"
    ],
};