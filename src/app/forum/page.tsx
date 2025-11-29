"use client"
import { PrimaryBaseButton } from "@/atoms/StyledAtoms";
import { useAsyncFn } from "@/hooks/useAsync";
import { ForumFilterSchema, ForumPostBase } from "@/interfaces/ForumSchemas";
import ForumHomeTitle from "@/organisms/ForumHomeTitle";
import ForumPostList from "@/organisms/ForumPostList";
import ForumSearchFilter from "@/organisms/ForumSearchFilter";
import { getForumPosts } from "@/services/forumServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Form, useForm } from "react-hook-form";
import styled from "styled-components";
import z from "zod";

const forumPostFormSchema = z.object({
    title: z.string().optional(),
    topic_id: z.string().optional(),
});

const ForumHomePage = () => {
    const [posts, setPosts] = useState<ForumPostBase[]>([]);

    const {loading, error, execute : getForumPostsAsync} = useAsyncFn(getForumPosts);

    const forumPostForm = useForm<z.infer<typeof forumPostFormSchema>>({
        resolver: zodResolver(forumPostFormSchema),
        defaultValues: {
            title: "",
            topic_id: ""
        }
    });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const posts = await getForumPostsAsync(forumPostForm.getValues())
                if (posts) setPosts(posts);
            } catch (error) {
                
            }
        }
        
        fetchPosts();
        
        forumPostForm.register("title");
        forumPostForm.register("topic_id");
    }, [])
    
    const onSubmit = async (values : ForumFilterSchema) => {
        console.log("aqui")
        const posts = await getForumPostsAsync(values)
        if (posts) setPosts(posts);

    }

    return (
        <StyledContainer>
            <ForumHomeTitle/>
            <RowBox>
                <StyledFilterBar
                    form={forumPostForm}
                />
                <PrimaryBaseButton onClick={(e) => forumPostForm.handleSubmit(onSubmit)(e)}>Buscar</PrimaryBaseButton>
            </RowBox>
            {error ? <>"ERRO" {error} </> : loading ? "Loading" : <StyledList posts={posts}/>}
        </StyledContainer>
    );
}

export default ForumHomePage;

const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: end;
    justify-content: center;
    width: 100%;
    gap: 20px;
`;

const StyledContainer = styled.div`
    padding-inline: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

const StyledList = styled(ForumPostList)`
    margin-top: 20px;
    width: 100%;
`;

const StyledFilterBar = styled(ForumSearchFilter)`
    width: 70%;
`;



