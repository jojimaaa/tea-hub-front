import { WikiPostSchema, WikiTopicSchema, WikiTopic } from "@/interfaces/WikiSchemas"
import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({
    // baseURL: "http://127.0.0.1:8000", //dev
    baseURL: "https://tea-hub-back-production.up.railway.app",              //prod
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

//MOCK DATA
const topics = [
        {
            id: "topico1",
            name: "Topico 1"
        },
        {
            id: "topico2",
            name: "Topico 2"
        }
    ]


export async function getTopicList() : Promise<WikiTopicSchema[]> {
    await sleep(300);

    return (topics);
}
export async function getTopic(id:string) : Promise<WikiTopic|undefined> {
    await sleep(300);
    if(id == "topico1") return ({
        id: "topico1",
        name: "andreito Topico"
    });
}

export async function getPost(id : string) : Promise<WikiPostSchema | undefined> {
    await sleep(300);

    if (id == "teste1") return ({
        id: "teste1",
        title: "Título 1",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 1",
        created_date: "2025-11-04",
        topic: topics[0],
        imageUrl: "url1"
    });
    if (id == "teste2") return ({
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-07",
        topic: topics[1],
        imageUrl: "url2"
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
        topic: topics[0],
        imageUrl: "url1"
    },
    {
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-07",
        topic: topics[1],
        imageUrl: "url2"
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
        imageUrl: "https://res.cloudinary.com/dattmfduh/image/upload/v1763148780/uo87pw0hkjj4tidql9d9.jpg",
        topic: topics[0],
    },
    {
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-05",
        imageUrl: "https://res.cloudinary.com/dattmfduh/image/upload/v1763384126/lhzajbm8khercfplk4ho.jpg",
        topic: topics[1],
    },
    {
        id: "teste3",
        title: "Título 3",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 3",
        created_date: "2025-11-06",
        imageUrl: "https://res.cloudinary.com/dattmfduh/image/upload/v1763148780/uo87pw0hkjj4tidql9d9.jpg",
        topic: topics[0],
    },
    {
        id: "teste4",
        title: "Título 4",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 4",
        created_date: "2025-11-07",
        imageUrl: "https://res.cloudinary.com/dattmfduh/image/upload/v1763384126/lhzajbm8khercfplk4ho.jpg",
        topic: topics[1],
    }]); 
}

export async function getRecent() : Promise<WikiPostSchema[]> {
    await sleep(300);

    return ([
    {
        id: "teste1",
        title: "Título 1",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 1",
        created_date: "2025-11-04",
        topic: topics[0],
        imageUrl: "url1"
    },
    {
        id: "teste2",
        title: "Título 2",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 2",
        created_date: "2025-11-07",
        topic: topics[1],
        imageUrl: "url2"
    },
    {
        id: "teste3",
        title: "Título 3",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 3",
        created_date: "2025-11-06",
        topic: topics[0],
        imageUrl: "url3"
    },
    {
        id: "teste4",
        title: "Título 4",
        body: "blablablablabalbsj asufdhalksjdfhkaljsdhflkjasdh asdhflasdhfladahfkda asdfhaskdjlfhasdf",
        author_name: "Autor 4",
        created_date: "2025-11-07",
        topic: topics[1],
        imageUrl: "url4"
    }]); 
}



