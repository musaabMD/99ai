import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // For now, just allow all requests to pass through
  // This avoids the Edge Runtime compatibility issues with Clerk
  
  // Alternative approach for basic route protection (if needed later):
  // const protectedRoutes = ['/dashboard', '/profile']
  // const isProtectedRoute = protectedRoutes.some(route => 
  //   request.nextUrl.pathname.startsWith(route)
  // )
  // 
  // if (isProtectedRoute) {
  //   // Check for auth cookie or redirect to sign-in
  //   const authCookie = request.cookies.get('__clerk_db_jwt')
  //   if (!authCookie) {
  //     return NextResponse.redirect(new URL('/sign-in', request.url))
  //   }
  // }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
