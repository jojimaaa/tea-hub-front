import { ForumCommentDTO } from "@/interfaces/ForumSchemas";
import Comment from "@/molecules/Comment";
import styled from "styled-components";

const CommentList = ({comments} : {comments: ForumCommentDTO[]}) => {
    return (
        <StyledContainer>
            {comments.map((comment) => {
                return (<Comment key={comment.id} comment={comment} />);
            })}
        </StyledContainer>
    )
}

export default CommentList;

const StyledContainer = styled.div`
    width: 100%;
`;
