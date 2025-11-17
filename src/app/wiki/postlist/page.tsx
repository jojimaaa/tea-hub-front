"use client"
import { DataGrid } from "@/organisms/DataGrid";
import { getPostList } from "@/services/wikiServices"
import styled from "styled-components";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { WikiPostSchema } from "@/interfaces/WikiSchemas";
import WikiSearchBar from "@/organisms/WikiSearchBar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Search } from "lucide-react";

const PostListPage = () => {

    const [data, setData] = useState<WikiPostSchema[]>([])
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPostList();
            if (response) {
                setData(response);
            }
        }
        fetchData();
    } ,[]);

    const searchFormSchema = z.object({
        search: z.string(),
    });

    const searchForm = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: { search: ""}
    });

    return (
        <StyledContainer>
        <WikiSearchBar 
            placeholder="Procurar por Tópico ou Titulo"
            value={"search"}
            searchForm={searchForm}
        />
            <DataGrid columns={columns} data={data}/>
        </StyledContainer>

    );
}

export default PostListPage;

const StyledContainer = styled.div`

`;