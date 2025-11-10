"use client"
import { DataGrid } from "@/organisms/DataGrid";
import { getPostList } from "@/services/wikiServices"
import styled from "styled-components";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";

const PostListPage = () => {

    const [data, setData] = useState<WikiPostSchema[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await getPostList();
            if (response) setData(response);
        }
        fetchData();
    } ,[]);

    return (
        <StyledContainer>
            <DataGrid columns={columns} data={data}/>
        </StyledContainer>

    );
}

export default PostListPage;

const StyledContainer = styled.div`

`;