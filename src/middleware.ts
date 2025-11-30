import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const token = request.cookies.get('access-token')?.value;
    const { pathname } = request.nextUrl;

    if (!token && pathname.startsWith('/wiki')) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('from', pathname);
            
            return NextResponse.redirect(loginUrl);
        }
    return NextResponse.next();
}

// 4. Configuração do Matcher (IMPORTANTE)
//    Isto diz ao middleware para rodar APENAS em rotas que
//    começam com /wiki.
//    Ele não vai mais rodar em /login, /, etc.
export const config = {
  matcher: [
    // '/wiki',
    // Protege /wiki e tudo dentro dele (ex: /wiki/artigo/123)
    // Adicione outras rotas para proteger aqui:
    // '/dashboard/:path*',
  ],
}