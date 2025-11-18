"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Importante para tabelas, riscado, autolinks, etc.

interface MarkdownRendererProps {
  markdownContent: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  markdownContent, 
  className 
}) => {
  return (
    // Envolvemos o ReactMarkdown numa div para aplicar a className do styled-components
    // O ReactMarkdown irá gerar as tags html (p, h1, ul, etc) dentro desta div
    <div className={`markdown-body ${className || ''}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Se precisar de componentes personalizados (ex: Next.js Link para links internos),
          // é aqui que os configura. Para estilos gerais, o CSS aninhado no pai é melhor.
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;