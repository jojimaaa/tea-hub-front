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
    console.log(params);
    
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

    // console.log("comment created");
    // console.log(`${comment_body} | ${parent_id} | ${post_id} | ${username}`);
    
    // const user = users.find((e: UserDTO) => e.username == username);
    // console.log(users);
    // console.log(username);

    // if(!user) {
    //     console.log(user);  
    //     console.error("Usuário não encontrado")
    //     return;
    // }
    // const date = new Date()

    // const comment : ForumCommentDTO = {
    //     id: (Math.random()*1000).toString(),
    //     body: comment_body,
    //     post_id: post_id,
    //     parent_id: parent_id,
    //     created_at: date.toISOString(),
    //     user: user,
    //     like_count: 0,
    //     liked_by_me: false
    // }


    // comments.push(comment);

    // const post = await getForumPostById(post_id);

    // return comment;
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
    
    // console.log("comment edited");
    // console.log(`${comment_body} | ${comment_id} | ${username}`);
    
    // const user = users.find((e: UserDTO) => e.username == username);
    // console.log(users);
    // console.log(username);

    // const comment = comments.find(e => e.id == comment_id);
    // const index = comments.findIndex(e => e.id == comment_id);

    // if(!user) {
    //     console.log(user);  
    //     console.error("Usuário não encontrado")
    //     return;
    // }
    // if(!comment || index == -1) {
    //     console.log(comment);  
    //     console.error("Comentário não encontrado")
    //     return;
    // }

    // const updatedComment : ForumCommentDTO = {
    //     ...comment,
    //     body: comment_body,
    // }

    // comments[index] = (updatedComment);

    // return updatedComment;
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
    
    // await sleep(30);

    // const post = posts.find((e) => e.id == post_id);


    // if(!post) return;

    // const response : ForumPostDTO = {
    //     ...post,
    //     body: body
    // };
    // return response;
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

    // await sleep(30);

    // const comment = comments.find(comment => comment.id == comment_id);
    // if (!comment) return undefined

    // if (comment && comment.liked_by_me) {
    //     comment.liked_by_me = !comment.liked_by_me;
    //     // comment.likeCount -= 1;
    //     console.log("-1")
    //     return false;
    // }
    
    // if (comment && !comment.liked_by_me) {
    //     comment.liked_by_me = !comment.liked_by_me;
    //     // comment.likeCount += 1;
    //     console.log("+1")
    //     return true;
    // }

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
    // await sleep(30);

    // const post = posts.find(post => post.id == post_id);
    // if (!post) return undefined

    // if (post && post.liked_by_me) {
    //     post.liked_by_me = !post.liked_by_me;
    //     // comment.likeCount -= 1;
    //     console.log("-1")
    //     return false;
    // }
    
    // if (post && !post.liked_by_me) {
    //     post.liked_by_me = !post.liked_by_me;
    //     // comment.likeCount += 1;
    //     console.log("+1")
    //     return true;
    // }
}