import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

interface UserData {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export async function middleware(request: NextRequest) {
  // Get token from cookies
  const token = request.cookies.get('token')?.value;
  
  // Check if path starts with /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // If no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
    
    try {
      // Verify token and get user data
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'myJWTsecret'
      ) as UserData;
      
      // Check if user id is 1 (admin)
      if (decoded.id !== 1) {
        // Redirect to homepage if user is not admin
        return NextResponse.redirect(new URL('/', request.url));
      }
      
      // Allow access to admin pages for user with id 1
      return NextResponse.next();
    } catch (error) {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/auth', request.url));
    }
  }
  
  // Continue for non-admin routes
  return NextResponse.next();
}

// Configure the matcher to only run middleware on admin routes
export const config = {
  matcher: ['/admin/:path*'],
}; 