import {ForumCommentDTO, ForumFilterSchema, ForumPostBase, ForumPostDTO, ForumTopicDTO, ToggleCommentLikeDTO } from "@/interfaces/ForumSchemas";
import axios, { AxiosRequestConfig } from "axios"
import { getCookie } from "@/utils/utils";
import { apiPrivate } from "./authServices";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/forum", //dev
    //baseURL: "<prod>",              //prod
});

export const getForumPosts = async (forum_filter? : ForumFilterSchema | undefined) : Promise<ForumPostBase[]> => {
    const accessToken = getCookie("access-token");
    const params = {
                title: forum_filter?.title ? forum_filter.title : undefined,
                topic_id: forum_filter?.topic_id ? forum_filter.topic_id : undefined
            };
    
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/forum/search",
        params: params,
        headers: {
            "Authorization" : `${accessToken ? "Bearer " + accessToken : ""}`
        }
    }


    const response = await apiPrivate.request<ForumPostBase[]>(config);

    if (response && response.status == 200) return response.data;
    else return []
    // await sleep(300);
    // return (posts);
}

export const getForumTopics = async () : Promise<ForumTopicDTO[]> => {
    
    const config : AxiosRequestConfig = {
        method: "GET",
        url: "/topics",
    }

    const response = await api.request<ForumTopicDTO[]>(config);
    if (response && response.status == 200) return response.data;
    return [];
}


export const getForumPostById = async (id : string) : Promise<ForumPostDTO | undefined> => {
    const accessToken = getCookie("access-token");

    const config : AxiosRequestConfig = {
        method: "GET",
        url: `/forum/post/${id}`,
        headers: {
            "Authorization" : `${accessToken ? "Bearer " + accessToken : ""}`
        }
    }

    
    const response = await apiPrivate.request<ForumPostDTO>(config);
    if (response && response.status == 200) return response.data;
    return undefined;

    // return posts.find((e:ForumPostDTO) => e.id == id);
}


export const createComment = async (comment_body : string, post_id : string, parent_id? : string) : Promise<ForumCommentDTO | undefined> => {
    const accessToken = getCookie("access-token");

    const config : AxiosRequestConfig = {
        method: "POST",
        url: `/forum/post/${post_id}/comment`,
        data: {
            body: comment_body,
            parent_id: parent_id,
        },
        headers: {
            "Authorization" : `${accessToken ? "Bearer " + accessToken : ""}`
        }
    }

    const response = await apiPrivate.request<ForumCommentDTO>(config);
    if (response && response.status == 200) return response.data;
    return undefined;
}

export const editComment = async (comment_body : string, comment_id : string, post_id : string) : Promise<ForumCommentDTO | undefined> => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "PATCH",
        url: `/forum/post/${post_id}/comment/${comment_id}`,
        data: {
            body: comment_body,
        },
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ForumCommentDTO>(config);
    if (response && response.status == 200) return response.data;
    return undefined;
}

export const deleteComment = async (comment_id: string, post_id: string) : Promise<boolean>=> {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/forum/post/${post_id}/comment/${comment_id}`,
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ForumCommentDTO>(config);
    if (response && response.status == 200) return true;
    return false;

    // comments = comments.filter((e) => {
    //     e.id != comment_id
    // });
    // return true;
}

export const createForumPost = async (title : string, body : string, topic_id : number) : Promise<ForumPostDTO | undefined> => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "POST",
        url: `/forum/submit`,
        data: {
            topic_id: topic_id,
            title: title,
            body: body,
        },
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ForumPostDTO>(config);
    if (response && response.status == 200) return response.data;
    return undefined;
}
export const editForumPost = async (title : string, body : string, topic_id : number, post_id : string) : Promise<ForumPostDTO | undefined> => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "PATCH",
        url: `/forum/post/${post_id}`,
        data: {
            topic_id: topic_id,
            title: title,
            body: body,
        },
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ForumPostDTO>(config);
    if (response && response.status == 200) return response.data;
    return undefined;
}

export const deletePost = async (post_id: string) => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `/forum/post/${post_id}`,
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ForumCommentDTO>(config);
    if (response && response.status == 200) return true;
    return false;
}

//post
export const toggleCommentLike = async(comment_id : string) => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "POST",
        url: `/forum/comment/${comment_id}/like`,
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ToggleCommentLikeDTO>(config);
    if (response && response.status == 200) return response.data.liked_by_me;
    return false;
}

export const togglePostLike = async(post_id : string) => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "POST",
        url: `/forum/post/${post_id}/like`,
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }
    const response = await apiPrivate.request<ToggleCommentLikeDTO>(config);
    if (response && response.status == 200) return response.data.liked_by_me;
    return false;
}