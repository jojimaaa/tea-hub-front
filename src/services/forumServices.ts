import { ForumCommentDTO, ForumDTO, UserDTO } from "@/interfaces/ForumSchemas";
import axios from "axios"
import { generateMockData } from "./forumMock";
import { SquareDashedTopSolid } from "lucide-react";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000", //dev
    //baseURL: "<prod>",              //prod
})

const sleep = (milliseconds : number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// const getForumPosts = async () => {
//     const config : AxiosRequestConfig = {
//         }
    
//     const response = await api.request<void>(config)
//     return response.data
// }

//mock forum services
let {
    users,
    topics,
    posts,
    comments,
    // commentLikes,
    // postLikes,
} = generateMockData();


export const getForumPosts = async () : Promise<ForumDTO[]> => {
    await sleep(300);
    return (posts);
}


export const getForumPostById = async (id : string) : Promise<ForumDTO | undefined> => {
    return posts.find((e:ForumDTO) => e.id == id);
}


export const createComment = async (comment_body : string, parent_id : string, post_id : string, username: string) : Promise<ForumCommentDTO | undefined> => {
    console.log("comment created");
    console.log(`${comment_body} | ${parent_id} | ${post_id} | ${username}`);
    
    const user = users.find((e: UserDTO) => e.username == username);
    console.log(users);
    console.log(username);

    if(!user) {
        console.log(user);  
        console.error("Usuário não encontrado")
        return;
    }
    const date = new Date()

    const comment : ForumCommentDTO = {
        id: (Math.random()*1000).toString(),
        body: comment_body,
        post_id: post_id,
        parent_id: parent_id,
        created_at: date.toISOString(),
        user: user,
        likeCount: 0,
        likedByMe: false
    }


    comments.push(comment);

    const post = await getForumPostById(post_id);

    return comment;
}

//HEADER: Authorization: Bearer asdhfaolksdhflauksdhflkjahdsflkjdahds
//verifica token (dependency)
//busca usuario
//busca comentario pelo id
//compara user id
//
export const editComment = async (comment_body : string, comment_id : string, username: string) : Promise<ForumCommentDTO | undefined> => {
    console.log("comment edited");
    console.log(`${comment_body} | ${comment_id} | ${username}`);
    
    const user = users.find((e: UserDTO) => e.username == username);
    console.log(users);
    console.log(username);

    const comment = comments.find(e => e.id == comment_id);
    const index = comments.findIndex(e => e.id == comment_id);

    if(!user) {
        console.log(user);  
        console.error("Usuário não encontrado")
        return;
    }
    if(!comment || index == -1) {
        console.log(comment);  
        console.error("Comentário não encontrado")
        return;
    }

    const updatedComment : ForumCommentDTO = {
        ...comment,
        body: comment_body,
    }

    comments[index] = (updatedComment);

    return updatedComment;
}

export const deleteComment = async (comment_id: string) : Promise<boolean>=> {
    comments = comments.filter((e) => {
        e.id != comment_id
    });
    return true;
}