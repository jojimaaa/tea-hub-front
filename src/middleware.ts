import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 1. Tenta pegar o token do cookie
  const token = request.cookies.get('access-token')?.value;
  const { pathname } = request.nextUrl;

  // 2. Se não houver token E o usuário tentar acessar uma rota protegida
  if (!token && pathname.startsWith('/wiki')) {
    // 3. Redireciona para /login, guardando a URL que ele tentou acessar
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname); // Passa a URL de origem
    
    return NextResponse.redirect(loginUrl);
}

// Se tiver token ou for uma rota pública, deixa continuar
  return NextResponse.next();
}

// 4. Configuração do Matcher (IMPORTANTE)
//    Isto diz ao middleware para rodar APENAS em rotas que
//    começam com /wiki.
//    Ele não vai mais rodar em /login, /, etc.
export const config = {
  matcher: [
    '/wiki',
    // Protege /wiki e tudo dentro dele (ex: /wiki/artigo/123)
    // Adicione outras rotas para proteger aqui:
    // '/dashboard/:path*',
  ],
}