"use client"
import { StyledIconButton, StyledMediumButtonRow } from '@/atoms/StyledAtoms';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { useAsyncFn } from '@/hooks/useAsync';
import useAuth from '@/hooks/useAuth';
import useForumPost from '@/hooks/useForumPost';
import { CommentSchema, ForumNewCommentSchema } from '@/interfaces/ForumSchemas';
import CommentForm from '@/molecules/CommentForm';
import MarkdownRenderer from '@/molecules/MarkdownRenderer';
import CommentList from '@/organisms/CommentList';
import { createComment } from '@/services/forumServices';
import { formatMediumDate } from '@/utils/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit, Heart, Reply, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import z from 'zod';

interface ForumPostParams {
    params : Promise<{
        slug : string
    }>
}
const commentFormSchema = z.object({
        new_comment_body: z.string().min(1, "Uma mensagem é necessaria para criar um comentário."),
});

export default function WikiPost({params} : ForumPostParams) {
    const router = useRouter();
    const {auth} = useAuth();
    const {loading, error, post, getReplies, rootComments, createLocalComment} = useForumPost();
    const {loading : commentLoading, error : commentError, execute : createCommentExecute} = useAsyncFn(createComment);


    const commentForm = useForm<z.infer<typeof commentFormSchema>>({
        resolver: zodResolver(commentFormSchema),
        defaultValues: {new_comment_body: ""}
    });
    
    useEffect(() => {
            commentForm.register("new_comment_body");
    }, []);
    
    const onSubmit = async (values : ForumNewCommentSchema) => {
        console.log(values);
        let response : (CommentSchema | undefined);
        if (post) response = await createCommentExecute(values.new_comment_body, "root", post?.id, auth.username);
        if (response) createLocalComment(response);
        commentForm.setValue("new_comment_body", "");
    }

    if(!params) return <>NOT FOUND!</>

    if(loading) return(
    <Centralizer>
        <StyledSpinner/>
        <StyledLabel>Carregando Post</StyledLabel>
        <StyledBody>Por favor, aguarde.</StyledBody>
    </Centralizer>)

    if(!post) return (
    <StyledNotFoundContainer>
        <StyledLabel>Post não encontrado</StyledLabel>
        <BackButton onClick={() => router.push("/")}>Voltar para Home</BackButton>
    </StyledNotFoundContainer>)

    return (
        <StyledContainer>
            <StyledLabel>{post?.title}</StyledLabel>
            <StyledGrid>
                <StyledPostInfo>{`Autor: ${post.user.name}`}</StyledPostInfo>
                <StyledPostInfo>{`Criado em: ${formatMediumDate(post.created_at)}`}</StyledPostInfo>
            </StyledGrid>
            <StyledTopicLabel>{post.topic.name}</StyledTopicLabel>
            {/* <StyledBody>{post.body}</StyledBody> */}
            <MarkdownRenderer markdownContent={post.body}/>
            <StyledMediumButtonRow>
                <StyledIconButton aria-label="Like" size={"icon"}><Heart/></StyledIconButton>
                <StyledIconButton size={"icon"} aria-label="Edit"><Edit/></StyledIconButton>
                <StyledIconButton color={"var(--error-primary)"} size={"icon"} aria-label="delete"><Trash2/></StyledIconButton>
            </StyledMediumButtonRow>
            <StyledCommentLabel>Comentários</StyledCommentLabel>
            {auth && auth.username && <StyledCommentForm
                loading={commentLoading}
                fieldErrors={commentForm.formState.errors}
                error={commentError}
                register={commentForm.register}
                value={"new_comment_body"}
                setValue={commentForm.setValue}
                handleSubmit={commentForm.handleSubmit(onSubmit)}
            />}
            {rootComments && rootComments.length > 1 && (<CommentList comments={rootComments}/>)}
        </StyledContainer>
    );
}

const StyledSpinner = styled(Spinner)`
    width: 30px;
    height: 30px;
`;

const StyledGrid = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    gap: 5%;
`;

const StyledTopicLabel = styled(Label)`
    border-radius: 10px;
    color: var(--primary);
    font-size: 13px;
    font-weight: 300;
    background-color: var(--secondary);
    padding: 6px;
    width: min-content;
    display: flex;
    align-content: center;  

    margin-bottom: 10px;
`;

const Centralizer = styled.div`
    flex-direction: column;
    display: flex;
    height: 95vh;
    gap: 15px;
    align-items: center;
    justify-content: center;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    height: 100vh;
`;
const StyledNotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2%;
    height: 100vh;
    align-items: center;
    align-content: space-evenly;
    justify-content: center;
    justify-items: center;
`;

const StyledLabel = styled(Label)`
    font-family: var(--font-lexend-exa);
    color: var(--primary-foreground);
    font-size: 25px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    overflow-wrap: break-word;
`;
const StyledCommentLabel = styled(Label)`
    font-family: var(--font-lexend-exa);
    color: var(--primary-foreground);
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-color: var(--primary-foreground);
    overflow-wrap: break-word;
`;

const StyledPostInfo = styled(Label)`
    font-family: var(--font-arial);
    font-size: 15px;
    color: var(--secondary);
`;

const StyledBody = styled(Label)`
    font-family: var(--font-arial);
    font-size: 17px;
    color: var(--primary-foreground);
    .break-line::after {
        content: "\A"; /* Inserts a new-line character */
        white-space: pre; /* Preserves whitespace, including new-lines */
    }
`;

const BackButton = styled(Button)`
    border-radius: 10px;
    background-color: var(--primary-foreground);
    color: var(--primary);
    font-family: var(--font-montserrat);
    font-size: 20px;
    padding: 2px;
    width: 30%;
`;

const StyledCommentForm = styled(CommentForm)`  
    margin-bottom: 10px;
`