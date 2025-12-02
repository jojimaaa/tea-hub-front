import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";

interface WikiPostCardProps {
    post : WikiPostSchema,
} 

const WikiPostCard = ({post} : WikiPostCardProps) => {

    const route = useRouter();

    return (
        <StyledCard onClick={()=>route.push(`/wiki/post/${post.id}`)}>
            <StyledImage
                fill src={post.image_url} alt=''
            >
            </StyledImage>
            <StyledContainerTextos>
                <TitleLabel>{post.title}</TitleLabel>
                <StyledAuthorLabel>{post.author_name}</StyledAuthorLabel>
                <StyledText>{post.body.toString()}</StyledText>
            </StyledContainerTextos>
        </StyledCard>
    );
}

export default WikiPostCard;

const StyledCard = styled.div`
    border-radius: 6px;
    border:1px solid black;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 22%;
    height: 200px;
    overflow: hidden;
    box-shadow: 0 10px 18px rgba(0,0,0,0.20);
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.6)
        );
        z-index: 2;
        pointer-events: none;
    }

    &:hover {
        transform: scale(1.1) translateZ(0);
    }

    &:hover::before{
        opacity: 0.2;
    }


`;

const TitleLabel = styled.text`
    font-family: var(--font-lexend-exa);
    font-weight: 200;
    font-size: 18px;
    border-color: var(--secondary);
    text-align: start;
    width: 100%;

    white-space: nowrap;     /* 1. Força o texto a ficar em uma linha só */
    overflow: hidden;        /* 2. Esconde o texto que transborda */
    text-overflow: ellipsis; /* 3. Adiciona o "..." no final */
`;

const StyledText = styled.text`
    font-family: var(--font-arial);
    font-size: 15px;
    overflow: hidden;                /* 1. Esconde o texto que transborda */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;           /* 2. O NÚMERO DE LINHAS QUE VOCÊ QUER MOSTRAR (mude para 2, 4, etc.) */
`;

const StyledAuthorLabel = styled.text`
    font-family: var(--font-arial);
    font-size: 10px;
    overflow: hidden;                /* 1. Esconde o texto que transborda */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
`;

const StyledImage = styled(Image)`
`;

const StyledContainerTextos = styled.div`
    position: absolute;
    color: white;
    z-index: 3;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    bottom:0;
    margin-bottom: 5px;
    margin-left: 5px;
`;