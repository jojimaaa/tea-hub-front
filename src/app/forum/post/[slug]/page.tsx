"use client"
import LikeButton from '@/atoms/LikeButton';
import { StyledEdit, StyledIconButton, StyledMarkdownBody, StyledMediumButtonRow, StyledTitleEditor } from '@/atoms/StyledAtoms';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { Spinner } from '@/components/ui/spinner';
import { useAsyncFn } from '@/hooks/useAsync';
import useAuth from '@/hooks/useAuth';
import useForumPost from '@/hooks/useForumPost';
import { ForumCommentDTO, ForumPostDTO, ICommentForm, IEditPostForm } from '@/interfaces/ForumSchemas';
import TextButtonForm from '@/molecules/TextButtonForm';
import CommentList from '@/organisms/CommentList';
import ForumTopicDropdown from '@/organisms/ForumTopicDropdown';
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
import MdButtonForm from '@/organisms/MdButtonForm';

interface ForumPostParams {
    params : Promise<{
        slug : string
    }>
}
const commentFormSchema = z.object({
        comment_body: z.string().min(1, "Uma mensagem é necessaria para criar um comentário."),
});
const editPostFormSchema = z.object({
        body: z.string().min(1, "Uma mensagem é necessaria para um post."),
        topic_id: z.int().min(10, "Tópico inválido"),
        title: z.string().min(3, "É necessário um Título para o post."),
});

export default function Forum({params} : ForumPostParams) {
    const router = useRouter();
    const {auth} = useAuth();
    const {loading, 
            post,
            localBody,
            localTitle,
            localTopicName,
            localLikeCount,
            localLikedByMe, 
            rootComments,
            createLocalComment, 
            toggleLocalPostLike,
            editLocalPost
        } = useForumPost();
    const {loading : commentLoading, error : commentError, execute : createCommentExecute} = useAsyncFn(createComment);
    const {loading : editLoading, error : editError, execute : editForumPostExecute} = useAsyncFn(editForumPost);
    const {execute : deleteForumPostExecute} = useAsyncFn(deletePost);
    const {execute : togglePostLikeExecute} = useAsyncFn(togglePostLike);
    
    const [isEditing, setEditing] = useState<boolean>(false);
    const [md, setMd] = useState<string>("");
    
    
    const commentForm = useForm<z.infer<typeof commentFormSchema>>({
        resolver: zodResolver(commentFormSchema),
        defaultValues: {comment_body: ""}
    });
    const editPostForm = useForm<z.infer<typeof editPostFormSchema>>({
        resolver: zodResolver(editPostFormSchema),
        defaultValues: {body: ""}
    });
    
    useEffect(() => {
            commentForm.register("comment_body");
        }, [commentForm]);
    useEffect(() => {
            editPostForm.register("body");
            editPostForm.register("topic_id");
            editPostForm.register("title");
        }, [editPostForm]);
        
    useEffect(()=> {
        if(post) {
            editPostForm.setValue("body", post.body);
            editPostForm.setValue("topic_id", post.topic.id);
            editPostForm.setValue("title", post.title);
            setMd(post.body);
        }
    }, [post, editPostForm])
    
    const onComment = async (values : ICommentForm) => {
        let response : (ForumCommentDTO | undefined);
        if (post) response = await createCommentExecute(values.comment_body, post?.id);
        if (response) {
            createLocalComment(response);
        }
        commentForm.setValue("comment_body", "");
    }
    
    const onEditPost = async (values : IEditPostForm) => {
        let response : (ForumPostDTO | undefined);
        if (post) response = await editForumPostExecute(values.title, values.body, values.topic_id, post.id);
        if (response) {
            editPostForm.setValue("body", response.body);
            setEditing(false);
            editLocalPost(response)
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
                router.push("/forum");
            }
            else {
                toast.error("Erro ao deletar post.");
            }
        }
        else {
            toast.error("Erro ao deletar post.");
        }
    }

    const onLike = async () => {
        if (post) {
            const response = await togglePostLikeExecute(post.id);
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
        <BackButton onClick={() => router.replace("/forum")}>Voltar para Home Forum</BackButton>
    </StyledNotFoundContainer>)

    return (
   
        <StyledContainer>
            {isEditing ? 
                <StyledTitleEditor
                    register={editPostForm.register}
                    value='title'
                    setValue={editPostForm.setValue}
                    placeHolder='Título'
                    defaultValue={editPostForm.getValues().title}
                /> :
                <StyledLabel>{localTitle}</StyledLabel>}
            <StyledGrid>
                <StyledPostInfo>{`Autor: ${post.user.name}`}</StyledPostInfo>
                <StyledPostInfo>{`Criado em: ${formatMediumDate(post.created_at)}`}</StyledPostInfo>
            </StyledGrid>
            {isEditing ? 
                <StyledTopicDropdown
                    enableNoSelection={false}
                    defaultTopicId={editPostForm.getValues().topic_id.toString()}
                    value='topic_id'
                    setValue={editPostForm.setValue}
                /> : 
                <StyledTopicLabel>{localTopicName}</StyledTopicLabel>}
            {/* <StyledBody>{post.body}</StyledBody> */}
            {isEditing ? 
                <EditFormContainer>
                    <EditPostForm
                        fieldErrors={editPostForm.formState.errors}
                        placeHolder={"Edite o post."}
                        error={editError}
                        buttonText={"Editar"}
                        loading={editLoading}
                        // register={editPostForm.register}
                        // value={"body"}
                        // setValue={editPostForm.setValue}
                        // handleSubmit={editPostForm.handleSubmit(onEditPost)}
                        formRegister={editPostForm.register}
                        formValue={"body"}
                        setFormValue={editPostForm.setValue}
                        setMdValue={setMd}
                        mdValue={md}
                        handleSubmit={editPostForm.handleSubmit(onEditPost)}
                    /> 
                </EditFormContainer>
                : 
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
            {rootComments && rootComments.length > 0 && (<CommentList comments={rootComments}/>)}
            <Toaster/>
        </StyledContainer>
    );
}

const StyledSpinner = styled(Spinner)`
    width: 30px;
    height: 30px;
`;

// const EditPostForm = styled(TextButtonForm)`
//     height: auto;
// `;
const EditFormContainer = styled.div`
    min-height: 800px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const EditPostForm = styled(MdButtonForm)`
    align-items: center;
    align-content: center;
    min-height: 730px;
    max-height: 730px;
    min-width: 100%;
    max-width: 100%;
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
    height: 18px;
    white-space: nowrap;
    width: min-content;
    display: flex;
    align-content: center;  
    margin-bottom: 10px;
`;

const StyledTopicDropdown = styled(ForumTopicDropdown)`
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