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
    <div className={`markdown-body ${className || ''}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;