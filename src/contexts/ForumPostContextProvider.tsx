"use client"


import { useAsync, useAsyncFn } from "@/hooks/useAsync";
import { CommentSchema, ForumPostSchema } from "@/interfaces/ForumSchemas";
import { getForumPostById } from "@/services/forumServices";
import { error } from "console";
import { createContext, Dispatch, SetStateAction, useEffect, useMemo, useState } from "react"

export interface ForumPostContextType {
    loading: boolean,
    error: Error | undefined,
    post: ForumPostSchema | undefined,
    getReplies: (parentId: string) => CommentSchema[],
    rootComments: CommentSchema[],
    createLocalComment: (comment : CommentSchema) => void;
}

export const ForumPostContext = createContext<ForumPostContextType | undefined>(undefined);

export const ForumPostContextProvider = ({ children, slug }: { children: React.ReactNode, slug : string }) => {

    const {loading, error, value : post } = useAsync(() => getForumPostById(slug), [slug]);

    const [comments, setComments] = useState<CommentSchema[]>([]);

    const commentsByParentId = useMemo(() => {
        if(!comments) return [];
        const group : Record<string, CommentSchema[]> = {};
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

    const createLocalComment = (comment : CommentSchema) => {
        setComments((prevComments) => {
            return [comment, ...prevComments];
        });
    }

    const getReplies = (parentId : string) => {
        if(Array.isArray(commentsByParentId)) return[];
        return commentsByParentId[parentId];
    }

    return <ForumPostContext.Provider value={{loading, error, post, getReplies, rootComments : getReplies("root"), createLocalComment}}>{children}</ForumPostContext.Provider>
}