"use client"
import { getPostList, getTopicList } from "@/services/wikiServices"
import styled from "styled-components";
import { useEffect, useState } from "react";
import { WikiPostSchema, WikiTopicSchema } from "@/interfaces/WikiSchemas";
import WikiSearchBar from "@/organisms/WikiSearchBar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import WikiPostListCard from "@/molecules/WikiPostListCard";


const PostListPage = () => {

    const [data, setData] = useState<WikiPostSchema[]>([]);
    const [topicList, setTopicList] = useState<WikiTopicSchema[]>([]);

    const searchFormSchema = z.object({
        search: z.string(),
        topic: z.string()
    });

    const searchForm = useForm<z.infer<typeof searchFormSchema>>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: { search: "", topic:"Todos"}
    });

    const search = searchForm.watch("search");
    const topic = searchForm.watch("topic");

    useEffect(() => {
        const fetchListData = async () => {
            const response = await getTopicList();
            if (response) {
                setTopicList(response);
            }
        }
        fetchListData();
    } ,[]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPostList(searchForm.getValues());
            if (response) {
                setData(response);
            }
        }
        fetchData()
    } ,[search, topic]);

    return (
        <StyledContainer>

            <WikiSearchBar 
                placeholder="Procurar por Tópico ou Titulo"
                searchForm={searchForm}
                topicList={topicList}
            />
            <StyledContainerList>
                {(data.length != 0) && 
                    data.map((post) => <WikiPostListCard key={post.id} post={post}/>)
                }
            </StyledContainerList>
            
        </StyledContainer>

    );
}

export default PostListPage;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const StyledContainerList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;