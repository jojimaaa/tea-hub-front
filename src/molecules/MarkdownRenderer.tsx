"use client"; // Continua a ser um Client Component

import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react'; // <--- MUDADO DE useMemo

// Define a interface para as props do componente
interface MarkdownRendererProps {
  markdownContent: string;
  className?: string; // <--- 1. ACEITAR A PROP className
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  markdownContent, 
  className // <--- 2. RECEBER A PROP
}) => {
  
  // Usamos useState e useEffect para garantir que isto só roda no cliente
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    // Esta lógica agora só roda no navegador, após a montagem do componente
    // Evita erros de "window is not defined" no servidor
    
    // 3. Converte Markdown -> HTML
    const rawHtml = marked.parse(markdownContent) as string;

    // 4. SANITIZA o HTML
    const sanitized = DOMPurify.sanitize(rawHtml);
    
    setSanitizedHtml(sanitized);
  }, [markdownContent]); // Recalcula sempre que o markdown mudar

  return (
    <div
      // 5. APLICA A CLASSE
      // Combina a classe base "markdown-body" com a classe do styled-components
      className={`markdown-body ${className || ''}`}
      
      // 6. Renderiza o HTML que agora é 100% seguro
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default MarkdownRenderer;