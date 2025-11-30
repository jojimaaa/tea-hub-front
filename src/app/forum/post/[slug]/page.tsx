"use client"
import LikeButton from '@/atoms/LikeButton';
import { StyledEdit, StyledIconButton, StyledMarkdownBody, StyledMediumButtonRow } from '@/atoms/StyledAtoms';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { Spinner } from '@/components/ui/spinner';
import { useAsyncFn } from '@/hooks/useAsync';
import useAuth from '@/hooks/useAuth';
import useForumPost from '@/hooks/useForumPost';
import { ForumCommentDTO, ForumPostDTO, ICommentForm, IEditPostForm } from '@/interfaces/ForumSchemas';
import TextButtonForm from '@/molecules/CommentForm';
import CommentList from '@/organisms/CommentList';
import { createComment, deletePost, editForumPost, togglePostLike } from '@/services/forumServices';
import { formatMediumDate } from '@/utils/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import styled from 'styled-components';
import z from 'zod';

interface ForumPostParams {
    params : Promise<{
        slug : string
    }>
}
const commentFormSchema = z.object({
        comment_body: z.string().min(1, "Uma mensagem é necessaria para criar um comentário."),
});
const postFormSchema = z.object({
        body: z.string().min(1, "Uma mensagem é necessaria para criar um comentário."),
});

export default function Forum({params} : ForumPostParams) {
    const router = useRouter();
    const {auth} = useAuth();
    const {loading, 
            post,
            localBody,
            localLikeCount,
            localLikedByMe, 
            rootComments,
            createLocalComment, 
            toggleLocalPostLike,
            editLocalBody
        } = useForumPost();
    const {loading : commentLoading, error : commentError, execute : createCommentExecute} = useAsyncFn(createComment);
    const {loading : editLoading, error : editError, execute : editForumPostExecute} = useAsyncFn(editForumPost);
    const {execute : deleteForumPostExecute} = useAsyncFn(deletePost);
    const {execute : togglePostLikeExecute} = useAsyncFn(togglePostLike);

    const [isEditing, setEditing] = useState<boolean>(false);
    


    const commentForm = useForm<z.infer<typeof commentFormSchema>>({
        resolver: zodResolver(commentFormSchema),
        defaultValues: {comment_body: ""}
    });
    const postForm = useForm<z.infer<typeof postFormSchema>>({
        resolver: zodResolver(postFormSchema),
        defaultValues: {body: ""}
    });
    
    useEffect(() => {
            commentForm.register("comment_body");
            postForm.register("body");
    }, []);

    useEffect(()=> {
        if(post) {
            postForm.setValue("body", post.body);
        }
    }, [post])
    
    const onComment = async (values : ICommentForm) => {
        let response : (ForumCommentDTO | undefined);
        if (post) response = await createCommentExecute(values.comment_body, "root", post?.id, auth.username);
        if (response) {
            createLocalComment(response);
        }
        commentForm.setValue("comment_body", "");
    }
    
    const onEditPost = async (values : IEditPostForm) => {
        let response : (ForumPostDTO | undefined);
        if (post) response = await editForumPostExecute(values.body, post.id, auth.username);
        if (response) {
            postForm.setValue("body", response.body);
            setEditing(false);
            editLocalBody(response)
        }
        else {
            toast.error("Erro ao editar post.");
        }
    }

    const onDeletePost = async () => {
        if(post) {
            const response : (boolean) = await deleteForumPostExecute(post.id);
            if (response) {
                toast.success("Post deletado com sucesso!");
                router.push("/");
            }
            else {

            }
        }
        else {
            toast.error("Erro ao deletar post.");
        }
    }

    const onLike = async () => {
        if (post) {
            const response = await togglePostLikeExecute(post.id, auth.username);
            if (response != undefined) {
                toggleLocalPostLike(response);
            }
        }
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
        <BackButton onClick={() => router.replace("/")}>Voltar para Home</BackButton>
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
            {isEditing ? 
            <EditPostForm
                fieldErrors={postForm.formState.errors}
                placeHolder={"Edite o post."}
                error={editError}
                buttonText={"Editar"}
                autoFocus
                loading={editLoading}
                register={postForm.register}
                value={"body"}
                setValue={postForm.setValue}
                handleSubmit={postForm.handleSubmit(onEditPost)}
            /> : 
            <StyledMarkdownBody markdownContent={localBody}/>
            }
            <StyledMediumButtonRow>
                <LikeButton
                    likeCount={localLikeCount}
                    disabled={!(auth && !!auth.username)}
                    likedByMe={auth && !!auth.username && localLikedByMe}
                    onClick={(auth && !!auth.username) ? onLike : () => undefined}
                />
                {auth && auth.username && (auth.username == post.user.username) &&
                    <StyledIconButton onClick={() => setEditing(prev => !prev)} size={"icon"} aria-label="Edit">
                        <StyledEdit $isEditing={isEditing}/>
                    </StyledIconButton>
                }
                {auth && !!auth.username && (auth.username == post.user.username) && 
                    <StyledIconButton 
                        onClick={() => onDeletePost()}
                        color={"var(--error-primary)"} 
                        size={"icon"} 
                        aria-label="delete"
                    >
                        <Trash2/>
                    </StyledIconButton>
                }
            </StyledMediumButtonRow>
            <StyledCommentLabel>Comentários</StyledCommentLabel>
            {auth && auth.username && <StyledCommentForm
                placeHolder={"Escreva seus pensamentos."}
                loading={commentLoading}
                buttonText='Comentar'
                fieldErrors={commentForm.formState.errors}
                error={commentError}
                register={commentForm.register}
                value={"comment_body"}
                setValue={commentForm.setValue}
                handleSubmit={commentForm.handleSubmit(onComment)}
            />}
            {rootComments && rootComments.length > 1 && (<CommentList comments={rootComments}/>)}
            <Toaster/>
        </StyledContainer>
    );
}

const StyledSpinner = styled(Spinner)`
    width: 30px;
    height: 30px;
`;

const EditPostForm = styled(TextButtonForm)`
    flex-grow: 1;
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

const StyledCommentForm = styled(TextButtonForm)`  
    margin-bottom: 10px;
`