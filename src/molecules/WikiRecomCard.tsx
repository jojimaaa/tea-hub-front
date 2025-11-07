import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import styled from "styled-components";

interface WikiRecomCardProps {
    post : WikiPostSchema,
} 

const WikiRecomCard = ({post} : WikiRecomCardProps) => {
    return (
        <StyledCard>
            {post.title}
            {post.author_name}
            {post.body.toString()}
        </StyledCard>
    );
}

export default WikiRecomCard;

const StyledCard = styled.div`
    border-radius: 6px;
    border-color: var(--secondary);
    border-width: 1px;

    display: flex;
    flex-direction: column;

    padding: 2%;
    width: 23%;
    height: 30%;
`;