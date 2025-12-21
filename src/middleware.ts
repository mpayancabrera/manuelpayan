import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const cookieName = 'preferred-language';
  const response = NextResponse.next();

  // Si ya existe la cookie, no hacer nada
  if (request.cookies.get(cookieName)) {
    return response;
  }

  // Detectar idioma del navegador desde Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  const isSpanish = acceptLanguage.toLowerCase().includes('es');
  const detectedLanguage = isSpanish ? 'es' : 'en';

  // Establecer cookie con el idioma detectado
  response.cookies.set(cookieName, detectedLanguage, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 año
    sameSite: 'lax',
    httpOnly: false // Necesario para que JavaScript pueda leerla
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
