import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MarkdownRenderer from "@/molecules/MarkdownRenderer";
import styled from "styled-components";

export const StyledIconButton = styled(Button)`
    width: min-content;
    &:hover {
        cursor: pointer;
    }
    color: ${props => (props.color) || "var(--primary-foreground)"}
`;

export const StyledSmallButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    gap: 30px;
`;

export const StyledMediumButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-content: center;
    width: 100%;
    gap: 40px;
`;

export const StyledErrorLabel = styled(Label)`
    color: var(--error-primary);
    font-family: var(--font-montserrat)
`;

export const StyledMarkdownBody = styled(MarkdownRenderer)`
    font-family: var(--font-arial, sans-serif);
    font-size: 17px;
    color: var(--primary-foreground);
    overflow-wrap: break-word;
    line-height: 1.6; // Melhora a leitura do texto

    /* --- ESTILOS PARA O MARKDOWN RENDERIZADO --- */

    /* Títulos */
    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
        line-height: 1.2;
    }

    h1 { font-size: 2.25em; border-bottom: 1px solid #eaeaea; padding-bottom: 0.3em; }
    h2 { font-size: 1.75em; border-bottom: 1px solid #eaeaea; padding-bottom: 0.3em; }
    h3 { font-size: 1.5em; }
    h4 { font-size: 1.25em; }

    /* Parágrafos */
    p {
        margin-bottom: 1.2em;
    }

    /* Listas (O Reset do Tailwind remove os bullets, aqui colocamos de volta) */
    ul, ol {
        margin-bottom: 1.2em;
        padding-left: 1.5em; /* Espaço para o bullet */
        list-style-position: outside;
    }
    
    ul { list-style-type: disc; }
    ol { list-style-type: decimal; }

    li {
        margin-bottom: 0.5em;
    }

    /* Links */
    a {
        color: #0070f3; /* Cor de destaque (ajuste para o seu tema) */
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        
        &:hover {
            text-decoration-thickness: 2px;
        }
    }

    /* Citações (Blockquotes) */
    blockquote {
        border-left: 4px solid #ddd;
        padding-left: 1em;
        margin-left: 0;
        margin-right: 0;
        font-style: italic;
        color: #555;
    }

    /* Código Inline */
    code {
        background-color: rgba(0,0,0,0.05);
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-family: monospace;
        font-size: 0.9em;
    }

    /* Blocos de Código */
    pre {
        background-color: rgba(0,0,0,0.05);
        padding: 1em;
        border-radius: 5px;
        border-width: 1px;
        margin: 10px;
        overflow-x: auto;
        margin-bottom: 1.5em;
        
        code {
            background-color: transparent;
            padding: 0;
            font-size: 0.9em;
            color: inherit;
        }
    }

    /* Imagens */
    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 1.5em 0;
    }
    
    /* Linha Horizontal */
    hr {
        border: 0;
        border-top: 1px solid #eaeaea;
        margin: 2em 0;
    }
`;