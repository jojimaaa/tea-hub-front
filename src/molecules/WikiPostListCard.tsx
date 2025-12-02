import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";
import relogio from "@/assets/relogio.png";

interface WikiPostCardProps {
    post : WikiPostSchema,
} 

const WikiPostListCard = ({post} : WikiPostCardProps) => {

    const route = useRouter();

    return (
        <StyledCard onClick={()=>route.push(`/wiki/post/${post.id}`)}>
            <StyledContainer>
                <StyledContainerImage>
                    <StyledImage
                        fill src={post.image_url} alt=''
                    />
                </StyledContainerImage>

                <StyledContainerTextos>
                    <TopicLabel>{post.topic.name}</TopicLabel>
                    <TitleLabel>{post.title}</TitleLabel>
                    <StyledText>{post.body.toString()}</StyledText>
                    <StyledContainerAuthorData>
                        <StyledContainerImg>
                            <StyledImg alt="" src={relogio}/>
                        </StyledContainerImg>
                        <StyledDate>{post.created_date.toString().split("T")[0]}</StyledDate>
                        <StyledAuthorLabel>{post.author_name}</StyledAuthorLabel>
                    </StyledContainerAuthorData>
                </StyledContainerTextos>
            </StyledContainer>
        </StyledCard>
    );
}

export default WikiPostListCard;

const StyledCard = styled.div`
    border-bottom: 0.5px solid black;
    width: 70%;
    height: 200px;
    display: flex;
    flex-direction: row;
    margin-top:20px;
    cursor: pointer;

`;

const TitleLabel = styled.text`
    font-family: var(--font-lexend-exa);
    font-size: 24px;
    overflow: hidden;                /* 1. Esconde o texto que transborda */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.0;
    margin-bottom: 5px;
    color: black;
`;

const TopicLabel = styled.text`
    font-family: var(--font-roboto);
    font-size: 14px;
    color:#8897AA;
`;

const StyledText = styled.text`
    overflow: hidden;                /* 1. Esconde o texto que transborda */
    display: -webkit-box;
    font-family: var(--font-arial);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 16px;
`;

const StyledAuthorLabel = styled.text`
    color:#8897AA;
`;

const StyledImage = styled(Image)`
    object-fit: cover;
`;

const StyledImg = styled(Image)`
    width: 100%;
    height: 100%;
`;

const StyledContainerImg = styled.div`
    width: 24px;
    height: 100%;
    position: relative;
    margin-right: 4px;
`;

const StyledDate = styled.text`
    margin-right: 20px;
    color: #8897AA;
`;

const StyledContainerImage = styled.div`
    width: 36%;
    height: 100%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
`;

const StyledContainerTextos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 35px;
    width: 70%;
`;

const StyledContainer = styled.div`
    height: 92%;
    width: 100%;
    margin-bottom: 4%;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

const StyledContainerAuthorData = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: auto;
`;
