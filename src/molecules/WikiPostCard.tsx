import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface WikiPostCardProps {
    post : WikiPostSchema,
} 

const WikiPostCard = ({post} : WikiPostCardProps) => {

    const route = useRouter();

    return (
        <StyledCard>
            <TitleLabel
                onClick={()=>route.push(`/wiki/post/${post.id}`)}
            >{post.title}</TitleLabel>
            <StyledAuthorLabel>{post.author_name}</StyledAuthorLabel>
            <StyledText>{post.body.toString()}</StyledText>
        </StyledCard>
    );
}

export default WikiPostCard;

const StyledCard = styled.div`
    border-radius: 6px;
    border-color: var(--secondary);
    border-width: 1px;

    display: flex;
    flex-direction: column;

    padding: 2%;
    width: 23%;
    height: 210px;
`;

const TitleLabel = styled.text`
    font-family: var(--font-wiki-title);
    font-weight: 200;
    font-size: 21px;
    border-width: 0px 0px 1px 0px;
    border-color: var(--secondary);
    margin-bottom: 10px;
    text-align: start;
    width: 100%;
    &:hover{
        cursor: pointer;
    };

    white-space: nowrap;     /* 1. Força o texto a ficar em uma linha só */
    overflow: hidden;        /* 2. Esconde o texto que transborda */
    text-overflow: ellipsis; /* 3. Adiciona o "..." no final */
`;

const StyledText = styled.text`
    font-family: var(--font-text);
    font-weight: 300;
    font-size: 15px;

    overflow: hidden;                /* 1. Esconde o texto que transborda */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;           /* 2. O NÚMERO DE LINHAS QUE VOCÊ QUER MOSTRAR (mude para 2, 4, etc.) */
`;

const StyledAuthorLabel = styled.text`
    font-family: var(--font-text);
    font-weight: 300;
    font-size: 15px;
    margin-bottom: 10px;
`;