"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Importante para tabelas, riscado, autolinks, etc.

interface MarkdownRendererProps {
  placeHolder? : string;
  markdownContent: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  placeHolder = "", 
  markdownContent,
  className 
}) => {
  return (
    <div className={`${markdownContent ? "" : placeHolder ? "markdown-placeholder" : ""} ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
      >
        {markdownContent ? markdownContent : placeHolder}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;