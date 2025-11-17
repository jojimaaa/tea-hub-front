"use client"

import { StyledSmallButtonRow, StyledIconButton } from "@/atoms/StyledAtoms";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import useForumPost from "@/hooks/useForumPost";
import { CommentSchema, ForumNewCommentSchema } from "@/interfaces/ForumSchemas";
import CommentList from "@/organisms/CommentList";
import { formatMediumDate } from "@/utils/utils";
import { Edit, Heart, Reply, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { useAsyncFn } from "@/hooks/useAsync";
import { createComment } from "@/services/forumServices";

interface CommentProps {
    comment: CommentSchema,
    className? : string
}

const replyFormSchema = z.object({
        new_comment_body: z.string().min(1, "Uma mensagem é necessaria para criar uma resposta."),
});

const Comment = ({comment, className} : CommentProps) => {

    const {auth} = useAuth();
    const {getReplies, post, createLocalComment} = useForumPost();
    const [isReplying, setReplying] = useState<boolean>(false);
    const children = getReplies(comment.id);
    const {loading : replyLoading, error : replyError, execute : createCommentExecute} = useAsyncFn(createComment);

    const [childrenHidden, setChildrenHidden] = useState(false);

    const replyForm = useForm<z.infer<typeof replyFormSchema>>({
            resolver: zodResolver(replyFormSchema),
            defaultValues: {new_comment_body: ""}
        });
        
        useEffect(() => {
                replyForm.register("new_comment_body");
        }, []);
        
        const onSubmit = async (values : ForumNewCommentSchema) => {
            console.log(values);
            let response : (CommentSchema | undefined);
            if (post) response = await createCommentExecute(values.new_comment_body, comment.id, post?.id, auth.username);
            if (response) createLocalComment(response);
            replyForm.setValue("new_comment_body", "");
        }

    return (
        <div className={className}>
            <StyledContainer>
                <StyledRow>
                    <StyledNameLabel>{comment.user.name}</StyledNameLabel>
                    <StyledDateLabel>{formatMediumDate(comment.created_at)}</StyledDateLabel>
                </StyledRow>
                {comment.body}
                <StyledSmallButtonRow>
                    <StyledIconButton aria-label="Like" size={"icon"}><Heart/></StyledIconButton>
                    <StyledIconButton onClick={() => setReplying(prev => !prev)} size={"icon"} aria-label="Reply"><StyledReply $isReplying={isReplying}/></StyledIconButton>
                    <StyledIconButton size={"icon"} aria-label="Edit"><Edit/></StyledIconButton>
                    <StyledIconButton color={"var(--error-primary)"} size={"icon"} aria-label="delete"><Trash2/></StyledIconButton>
                </StyledSmallButtonRow>
            </StyledContainer>
            {isReplying && <StyledCommentForm
                                loading={replyLoading}
                                fieldErrors={replyForm.formState.errors}
                                error={replyError}
                                register={replyForm.register}
                                value={"new_comment_body"}
                                setValue={replyForm.setValue}
                                handleSubmit={replyForm.handleSubmit(onSubmit)}
                            />
            }
            {(children?.length > 0 && childrenHidden) && (<StyledExpandButton onClick={() => setChildrenHidden(false)}>Exibir respostas</StyledExpandButton>)}
            {children?.length > 0 && (
                <StyledNestedContainer>
                    <StyledChildrenContainer $childrenHidden={childrenHidden}>
                        <ClickableBar onClick={() => {
                            setChildrenHidden(true)
                            console.log("ta trued");
                            console.log(childrenHidden);
                            }} />
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

const StyledReply = styled(Reply)<{$isReplying : boolean}>`
    color: ${props => !props.$isReplying ? "var(--primary-foreground)" : "var(--secondary)"};
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
        display: ${props => props.$childrenHidden ? "none" : "block"};
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

const StyledCommentForm = styled(CommentForm)`
    height: 100%;
    margin-bottom: 10px;
`;