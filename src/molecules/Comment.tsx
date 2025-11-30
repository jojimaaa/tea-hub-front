"use client"

import { StyledSmallButtonRow, StyledIconButton, StyledErrorLabel, StyledEdit, StyledReply, StyledMarkdownBody } from "@/atoms/StyledAtoms";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import useForumPost from "@/hooks/useForumPost";
import { ForumCommentDTO, ICommentForm } from "@/interfaces/ForumSchemas";
import CommentList from "@/organisms/CommentList";
import { formatMediumDate } from "@/utils/utils";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TextButtonForm from "./TextButtonForm";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { useAsyncFn } from "@/hooks/useAsync";
import { createComment, deleteComment, editComment, toggleCommentLike } from "@/services/forumServices";
import LikeButton from "@/atoms/LikeButton";

interface CommentProps {
    comment: ForumCommentDTO,
    className? : string
}

const commentFormSchema = z.object({
        comment_body: z.string().min(1, "Uma mensagem é necessaria para criar uma resposta."),
});

const Comment = ({comment, className} : CommentProps) => {

    const {auth} = useAuth();
    const {getReplies, post, createLocalComment, deleteLocalComment, toggleLocalCommentLike, editLocalComment} = useForumPost();
    const [body, setBody] = useState(comment.body);
    const [isReplying, setReplying] = useState<boolean>(false);
    const [isEditing, setEditing] = useState<boolean>(false);
    const children = getReplies(comment.id);
    const {loading : replyLoading, error : replyError, execute : replyCommentExecute} = useAsyncFn(createComment);
    const {loading : editLoading, error : editError, execute : editCommentExecute} = useAsyncFn(editComment);
    const {error : deleteError, execute : deleteCommentExecute} = useAsyncFn(deleteComment);
    const {execute : toggleLikeCommentExecute} = useAsyncFn(toggleCommentLike);

    const [childrenHidden, setChildrenHidden] = useState(false);

    const replyForm = useForm<z.infer<typeof commentFormSchema>>({
            resolver: zodResolver(commentFormSchema),
            defaultValues: {comment_body: ""}
    });

    const editForm = useForm<z.infer<typeof commentFormSchema>>({
            resolver: zodResolver(commentFormSchema),
            defaultValues: {comment_body: comment.body}
    });
        
    useEffect(() => {
            replyForm.register("comment_body");
    }, [replyForm]);
    useEffect(() => {
            editForm.register("comment_body");
    }, [editForm]);
        
    const onReply = async (values : ICommentForm) => {
        let response : (ForumCommentDTO | undefined);
        if (post) response = await replyCommentExecute(values.comment_body, post?.id, comment.id);
        if (response) {
            setReplying(false);
            createLocalComment(response);
        }
        replyForm.setValue("comment_body", "");
    }

    const onLike = async () => {
        const response = await toggleLikeCommentExecute(comment.id);
        if (response != undefined) toggleLocalCommentLike(comment.id, response);
    }

    const onEdit = async (values : ICommentForm) => {
        let response : (ForumCommentDTO | undefined);
        if (post) response = await editCommentExecute(values.comment_body, comment.id, post.id);
        if (response) {
            editForm.setValue("comment_body", response.body);
            setBody(response.body);
            editLocalComment(response);
            setEditing(false);
        }
        else editForm.setValue("comment_body", comment.body);
    }

    const onDelete = async (comment_id : string) => {
        let response : boolean | undefined
        if(post) response = await deleteCommentExecute(comment_id, post?.id);
        if (response != undefined) deleteLocalComment(comment_id);
    }

    return (
        <div className={className}>
            <StyledContainer>
                <StyledRow>
                    <StyledNameLabel>{comment.user.name}</StyledNameLabel>
                    <StyledDateLabel>{formatMediumDate(comment.created_at)}</StyledDateLabel>
                </StyledRow>
                {isEditing ? 
                    <StyledCommentForm
                        placeHolder={"Editar comentário."}
                        buttonText="Editar"
                        loading={editLoading}
                        fieldErrors={editForm.formState.errors}
                        error={editError}
                        register={editForm.register}
                        value={"comment_body"}
                        setValue={editForm.setValue}
                        handleSubmit={editForm.handleSubmit(onEdit)}
                    /> : 
                    <StyledMarkdownBody markdownContent={body}/>
                }
                <StyledSmallButtonRow>
                    <LikeButton 
                        onClick={(auth && !!auth.username) ? onLike : undefined}
                        disabled={!(auth && !!auth.username)}
                        likeCount={comment.like_count}
                        likedByMe={comment.liked_by_me && auth && !!auth.username}
                    />
                    {auth && auth.username &&<StyledIconButton onClick={() => setReplying(prev => !prev)} size={"icon"} aria-label="Reply">
                        <StyledReply $isReplying={isReplying}/>
                    </StyledIconButton>}
                    {auth && auth.username && (auth.username == comment.user.username) &&<StyledIconButton onClick={() => setEditing(prev => !prev)} size={"icon"} aria-label="Edit">
                        <StyledEdit $isEditing={isEditing}/>
                    </StyledIconButton>}
                    {auth && auth.username && (auth.username == comment.user.username) && 
                        <StyledIconButton 
                            onClick={() => onDelete(comment.id)}
                            color={"var(--error-primary)"} 
                            size={"icon"} 
                            aria-label="delete"
                        >
                        <Trash2/>
                    </StyledIconButton>}
                </StyledSmallButtonRow>
                {deleteError && <StyledErrorLabel>{deleteError.message}</StyledErrorLabel>}
            </StyledContainer>
            {isReplying && auth && auth.username && <StyledCommentForm
                                placeHolder={"Responder comentário."}
                                buttonText="Responder"
                                loading={replyLoading}
                                fieldErrors={replyForm.formState.errors}
                                error={replyError}
                                register={replyForm.register}
                                value={"comment_body"}
                                setValue={replyForm.setValue}
                                handleSubmit={replyForm.handleSubmit(onReply)}
                            />
            }
            {(children?.length > 0 && childrenHidden) && (<StyledExpandButton onClick={() => setChildrenHidden(false)}>Exibir respostas</StyledExpandButton>)}
            {children?.length > 0 && (
                <StyledNestedContainer>
                    <StyledChildrenContainer $childrenHidden={childrenHidden}>
                        <ClickableBar onClick={() => setChildrenHidden(true)} />
                        <StyledCommentListContainer>
                            <CommentList comments={children} />
                        </StyledCommentListContainer>
                    </StyledChildrenContainer>
                </StyledNestedContainer>
            )}
        </div>
    );
}

export default Comment;

const ClickableBar = styled.button`
  border: none;
  background: none;
  margin-bottom: 10px;
  width: 15px;
  position: relative;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);

  &:hover::before,
  &:focus-visible::before {
    background-color: var(--secondary);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background-color: var(--secondary-foreground);
    transition: background-color 100ms ease-in-out;
  }
`;

const StyledExpandButton = styled(Button)`
    background-color: var(--secondary);
    color: var(--primary);
    border-radius: 7px;
    font-family: var(--font-arial);
`;




const StyledNameLabel = styled(Label)`
    color: var(--secondary);
    font-size: 15px;
    font-weight: 500;

`;

const StyledDateLabel = styled(Label)`
    color: var(--secondary);
    font-weight: 400;
    font-size: 13.5px;
    opacity: 80%;
`;

const StyledContainer = styled.div`
    border-radius: 10px;
    border-width: 1px;
    border-color: var(--secondary);
    padding: 10px;
    margin-bottom: 10px;
`;

const StyledCommentListContainer = styled.div`
    padding-left: .5rem;
    flex-grow: 1;
`;

const StyledChildrenContainer = styled.div<{$childrenHidden: boolean}>`
    display: flex;
    align-items: stretch;
    width: auto;

    & > div {
        display: ${props => props.$childrenHidden ? "none" : "flex"};
        width: full;
    }
`;

const StyledNestedContainer = styled.div``;

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: center;
    align-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

const StyledCommentForm = styled(TextButtonForm)`
    height: 100%;
    margin-bottom: 10px;
`;

