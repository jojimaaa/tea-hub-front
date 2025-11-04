import { WikiPost, WikiTopic } from "@/interfaces/WikiSchemas"
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




export async function getTopicList() : Promise<WikiTopic[]> {
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

export async function getPost(id : string) : Promise<WikiPost | undefined> {
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

export async function getPostList() : Promise<WikiPost[]> {
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



