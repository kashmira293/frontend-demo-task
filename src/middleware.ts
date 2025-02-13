import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('token');
    const publicPaths = ['/login'];


    if (req.nextUrl.pathname === '/') {
        if (token) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        } else {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    // If the user is trying to access a protected route and is not authenticated
    if (!token && !publicPaths.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
   
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/login'
    ],
};