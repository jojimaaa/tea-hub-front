"use client"
import { useAsync } from "@/hooks/useAsync";
import { ForumCommentDTO, ForumDTO } from "@/interfaces/ForumSchemas";
import { getForumPostById } from "@/services/forumServices";
import { createContext, useEffect, useMemo, useState } from "react"

export interface ForumPostContextType {
    loading: boolean,
    error: Error | undefined,
    post: ForumDTO | undefined,
    getReplies: (parentId: string) => ForumCommentDTO[],
    rootComments: ForumCommentDTO[],
    createLocalComment: (comment : ForumCommentDTO) => void;
    deleteLocalComment: (comment_id : string) => void;
}

export const ForumPostContext = createContext<ForumPostContextType | undefined>(undefined);

export const ForumPostContextProvider = ({ children, slug }: { children: React.ReactNode, slug : string }) => {

    const {loading, error, value : post } = useAsync(() => getForumPostById(slug), [slug]);

    const [comments, setComments] = useState<ForumCommentDTO[]>([]);

    const commentsByParentId = useMemo(() => {
        if(!comments) return [];
        const group : Record<string, ForumCommentDTO[]> = {};
        comments.forEach(comment => {
            const parentKey = comment.parent_id ?? "root";
            group[parentKey] ||= [];
            group[parentKey].push(comment);
        })
        return group;
    }, [comments]);

    useEffect(() => {
        if (post?.comments != null) {
            setComments(post.comments);
        }
    }, [post?.comments])

    const createLocalComment = (comment : ForumCommentDTO) => {
        setComments((prevComments) => {
            return [comment, ...prevComments];
        });
    }

    const deleteLocalComment = (comment_id : string) => {
        setComments((prevComments) => {
            return prevComments.filter((e:ForumCommentDTO) => e.id != comment_id);
        });
    }

    const getReplies = (parentId : string) => {
        if(Array.isArray(commentsByParentId)) return[];
        return commentsByParentId[parentId];
    }

    return <ForumPostContext.Provider value={{loading, error, post, getReplies, rootComments : getReplies("root"), createLocalComment, deleteLocalComment}}>{children}</ForumPostContext.Provider>
}