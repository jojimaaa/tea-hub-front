"use client"
import useAuth from "@/hooks/useAuth";
import { private_refresh } from "@/services/authServices";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import html from 'remark-html';
// import { remark } from 'remark';
import { useEffect } from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import MarkdownRenderer from "@/molecules/MarkdownRenderer";
import { StyledMarkdownBody } from "@/atoms/StyledAtoms";

export default function Home() {
    const {auth} = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const reloginTest = async () => {
        try {
            await private_refresh();
            console.log("SUCESSO")
        }
        catch (e) {
            console.log("RELOGIN")
            console.log(pathname);
            router.replace(`/login?from=${pathname}`);
        }
    }

    const markdown = "A adolescência é uma fase de grandes mudanças para qualquer pessoa — e, no TEA, ela vem acompanhada de **novos desafios sociais e emocionais**.\n\nQuestões que costumam aparecer:\n\n- Maior consciência das diferenças em relação aos colegas.\n- Interesse por amizades e relacionamentos, mas dificuldade em entender regras sociais.\n- Aumento da ansiedade e, às vezes, sintomas depressivos.\n\nComo apoiar o adolescente autista:\n\n- Manter canais de diálogo abertos, respeitando seu tempo.\n- Buscar profissionais que tenham experiência com TEA na adolescência.\n- Incentivar grupos e atividades em que ele possa se sentir pertencente.\n\n> Com apoio adequado, a adolescência também pode ser um período de **autoconhecimento e fortalecimento da identidade**.";

    return (
        <Container>
            <StyledMarkdownBody markdownContent={markdown}/>
            <button onClick={reloginTest}>refresh private</button>
        </Container>
    );
}
function remark() {
    throw new Error("Function not implemented.");
}

const Container = styled.div`
    padding: 10px;
`;
