import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  // Verificar si ya existe una preferencia de idioma en las cookies
  const savedLanguage = request.cookies.get('preferred-language')?.value;

  if (savedLanguage) {
    return NextResponse.next();
  }

  // Detectar idioma del navegador desde el header Accept-Language
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage && acceptLanguage.toLowerCase().includes('es')) {
    const response = NextResponse.next();
    response.cookies.set('preferred-language', 'es', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 año
      sameSite: 'lax'
    });
    return response;
  }

  // Por defecto inglés
  const response = NextResponse.next();
  response.cookies.set('preferred-language', 'en', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax'
  });
  return response;
}

export const config = {
  matcher: '/:path*'
};
