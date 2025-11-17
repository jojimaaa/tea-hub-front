import { CommentSchema, ForumPostSchema, UserSchema } from "@/interfaces/ForumSchemas";
import axios, { AxiosRequestConfig } from "axios"
import { generateMockData } from "./forumMock";
import { randomInt } from "crypto";

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
const {
    users,
    topics,
    posts,
    comments,
    // commentLikes,
    // postLikes,
} = generateMockData();

export const getForumPosts = async () : Promise<ForumPostSchema[]> => {
    await sleep(300);
    return (posts);
}

export const getForumPostById = async (id : string) : Promise<ForumPostSchema | undefined> => {
    return posts.find((e:ForumPostSchema) => e.id == id);
}

export const createComment = async (new_comment_body : string, parent_id : string, post_id : string, username: string) : Promise<CommentSchema | undefined> => {
    console.log("comment created");
    console.log(`${new_comment_body} | ${parent_id} | ${post_id} | ${username}`);
    
    const user = users.find((e: UserSchema) => e.username == username);
    console.log(users);
    console.log(username);

    if(!user) {
        console.log(user);  
        console.error("Usuário não encontrado")
        return;
    }
    const date = new Date()

    const comment : CommentSchema = {
        id: (Math.random()*1000).toString(),
        body: new_comment_body,
        user: user,
        post_id: post_id,
        parent_id: parent_id,
        created_at: date.toISOString()
    }

    comments.push(comment);

    const post = await getForumPostById(post_id);

    return comment;
}