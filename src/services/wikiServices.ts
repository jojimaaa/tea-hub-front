import { WikiPostSchema, WikiTopicSchema } from "@/interfaces/WikiSchemas"
import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8000", //dev
    //baseURL: "<prod>",              //prod
})


export async function getStuff(): Promise<void> {


    const config : AxiosRequestConfig = {
    }

    const response = await api.request<void>(config)
    return response.data
}

const sleep = (milliseconds : number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};




export async function getTopicList() : Promise<WikiTopicSchema[]> {
    await sleep(300);

    return ([
        {
            id: "topico1",
            name: "Topico 1"
        },
        {
            id: "topico2",
            name: "Topico 2"
        }
    ]);
}

export async function getPost(id : string) : Promise<WikiPostSchema | undefined> {
    await sleep(300);

    if (id == "teste1") return ({
        id: "teste1",
        title: "Título 1",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 1",
        created_date: "2025-11-04",
        topic_id: "topico1"
    });
    if (id == "teste2") return ({
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-07",
        topic_id: "topico2"
    });
    
}

export async function getPostList() : Promise<WikiPostSchema[]> {
    await sleep(300);

    return ([{
        id: "teste1",
        title: "Título 1",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 1",
        created_date: "2025-11-04",
        topic_id: "topico1"
    },
    {
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-07",
        topic_id: "topico2"
    }]); 
}

export async function getRecommended() : Promise<WikiPostSchema[]> {
    await sleep(300);

    return ([
    {
        id: "teste1",
        title: "Título 1",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 1",
        created_date: "2025-11-04",
        topic_id: "topico1"
    },
    {
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-05",
        topic_id: "topico2"
    },
    {
        id: "teste3",
        title: "Título 3",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 3",
        created_date: "2025-11-06",
        topic_id: "topico3"
    },
    {
        id: "teste4",
        title: "Título 4",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 4",
        created_date: "2025-11-07",
        topic_id: "topico4"
    }]); 
}



