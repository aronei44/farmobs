import { NextResponse } from 'next/server'

const checkUrl = (request, url) => {
  return request.nextUrl.pathname.startsWith(url)
}

export function middleware(request) {
  if(checkUrl(request, '/dashboard')){
    //     return NextResponse.redirect(new URL('/auth/login', request.url))
    console.log('ini jalan')
  }
}

export const config = {
  matcher : [
    '/dashboard/:path*',
    '/auth/:path*'
  ]
}
