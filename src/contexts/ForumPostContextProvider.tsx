"use client"
import { useAsync } from "@/hooks/useAsync";
import { ForumCommentDTO, ForumPostDTO } from "@/interfaces/ForumSchemas";
import { getForumPostById } from "@/services/forumServices";
import { createContext, useEffect, useMemo, useState } from "react"

export interface ForumPostContextType {
    loading: boolean,
    error: Error | undefined,
    post: ForumPostDTO | undefined,
    localBody: string,
    localTitle : string,
    localTopicName:string,
    localLikeCount: number,
    localLikedByMe: boolean,
    getReplies: (parentId: string) => ForumCommentDTO[],
    rootComments: ForumCommentDTO[],
    createLocalComment: (comment : ForumCommentDTO) => void;
    deleteLocalComment: (comment_id : string) => void;
    toggleLocalCommentLike: (comment_id: string, isAddingLike: boolean) => void;
    toggleLocalPostLike: (isAddingLike: boolean) => void;
    editLocalComment: (comment: ForumCommentDTO) => void;
    editLocalPost: (newPost: ForumPostDTO) => void;
}

export const ForumPostContext = createContext<ForumPostContextType | undefined>(undefined);

export const ForumPostContextProvider = ({ children, slug }: { children: React.ReactNode, slug : string }) => {

    const {loading, error, value : post } = useAsync(() => getForumPostById(slug), [slug]);

    const [comments, setComments] = useState<ForumCommentDTO[]>([]);
    const [localBody, setLocalBody] = useState<string>("");
    const [localTitle, setLocalTitle] = useState<string>("");
    const [localTopicName, setLocalTopicName] = useState<string>("");
    const [localLikeCount, setLocalLikeCount] = useState<number>(0);
    const [localLikedByMe, setLocalLikedByMe] = useState<boolean>(false);

    const commentsByParentId = useMemo(() => {
        console.log(comments);
        
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

    useEffect(() => {
        if (post?.body != null) {
            setLocalBody(post.body);
        }
    }, [post?.body])

    useEffect(() => {
        if (post?.topic != null) {
            setLocalTopicName(post.topic.name);
        }
    }, [post?.topic])

    useEffect(() => {
        if (post?.title != null) {
            setLocalTitle(post.title);
        }
    }, [post?.title])

    useEffect(() => {
        if (post?.like_count != null) {
            setLocalLikeCount(post.like_count);
        }
    }, [post?.like_count])

    useEffect(() => {
        if (post?.liked_by_me != null) {
            setLocalLikedByMe(post.liked_by_me);
        }
    }, [post?.liked_by_me])

    const createLocalComment = (comment : ForumCommentDTO) => {
        setComments((prevComments) => {
            return [comment, ...prevComments];
        });
        console.log(comments);
    }

    const editLocalComment = (comment : ForumCommentDTO) => {
        setComments((prevComments) => {
            return prevComments.map((comm) => {
                if(comm.id == comment.id) {
                    return comment;
                }
                return comm;
            });
        });
    }

    const editLocalPost = (newPost : ForumPostDTO) => {
        setLocalBody(newPost.body);
        setLocalTitle(newPost.title);
        setLocalTopicName(newPost.topic.name);
    }

    const deleteLocalComment = (comment_id : string) => {
        setComments((prevComments) => {
            return prevComments.filter((e:ForumCommentDTO) => e.id != comment_id);
        });
        console.log(comments);
    }

    
    const toggleLocalCommentLike = (comment_id: string, isAddingLike: boolean) => {
        setComments((prevComments) => {
            prevComments.map((comm) => {
                if (comm.id == comment_id) {
                    if(isAddingLike) {
                        comm.like_count++;
                        comm.liked_by_me = true;
                    }
                    else {
                        comm.like_count--;
                        comm.liked_by_me = false;
                    }
                }
                return comm;
            })
            return prevComments;
        });
    }

    const toggleLocalPostLike = (isAddingLike: boolean) => {
        setLocalLikeCount((prev) => {
            if(isAddingLike) {
                return prev+1;
            }
            return prev-1;
        });
        setLocalLikedByMe(() => {
            if(isAddingLike) {
                return true;
            }
            return false;
        });
    }


    const getReplies = (parentId : string) => {
        if(Array.isArray(commentsByParentId)) return[];
        return commentsByParentId[parentId];
    }
    
    return <ForumPostContext.Provider value={{loading, 
                                                error, 
                                                post,
                                                localBody,
                                                localTitle,
                                                localTopicName,
                                                localLikeCount,
                                                localLikedByMe, 
                                                getReplies, 
                                                rootComments : 
                                                getReplies("root"), 
                                                createLocalComment, 
                                                deleteLocalComment,
                                                editLocalComment,
                                                toggleLocalCommentLike,
                                                toggleLocalPostLike,
                                                editLocalPost: editLocalPost
                                            }}>{children}</ForumPostContext.Provider>
}