"use client"
import { DataGrid } from "@/organisms/DataGrid";
import { getPostList, getTopicList } from "@/services/wikiServices"
import styled from "styled-components";
import { getColumns } from "./columns";
import { useEffect, useState } from "react";
import { WikiPostSchema, WikiTopicSchema } from "@/interfaces/WikiSchemas";

const PostListPage = () => {

    const [data, setData] = useState<WikiPostSchema[]>([])
    const [topicos, setTopicos] = useState<WikiTopicSchema[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await getPostList();
            if (response) setData(response);

            const topics_resp = await getTopicList();
            if (topics_resp) setTopicos(topics_resp)
        }
        fetchData();
    } ,[]);

    return (
        <StyledContainer>
            <DataGrid columns={getColumns(topicos)} data={data}/>
        </StyledContainer>

    );
}

export default PostListPage;

const StyledContainer = styled.div`

`;