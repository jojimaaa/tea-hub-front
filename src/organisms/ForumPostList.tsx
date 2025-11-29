import { ForumPostBase, ForumPostDTO } from "@/interfaces/ForumSchemas";
import styled from "styled-components";
import { DataGrid } from "./DataGrid";
import { forumPostColumns } from "@/molecules/ForumPostListColumns";

interface ForumPostListProps {
    className? : string,
    posts : ForumPostBase[],
}

const ForumPostList = ({className, posts} : ForumPostListProps) => {
    if (posts && posts.length == 0) return (<StyledContainer className={className}> Falha ao achar os posts </StyledContainer>)

    return (
        <StyledContainer className={className}>
            <DataGrid 
                columns={forumPostColumns} 
                data={posts}                
            />

        </StyledContainer>
    );
}

export default ForumPostList;

const StyledContainer = styled.div`
    
`;