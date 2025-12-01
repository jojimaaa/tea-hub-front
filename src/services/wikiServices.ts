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


export async function getTopicList() : Promise<WikiTopicSchema[] | null> {
    try {
      const response = await fetch("http://127.0.0.1:8000/wiki/topics");
      if (!response.ok) throw new Error("Erro ao buscar lista de topicos");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
}
export async function getTopic(id:string) : Promise<WikiTopic|undefined> {
    await sleep(300);
    if(id == "topico1") return ({
        id: "topico1",
        name: "andreito Topico"
    });
}

export async function getPost(id : string) : Promise<WikiPostSchema | null> {
  try {
    const response = await fetch(`http://127.0.0.1:8000/wiki/${id}`);
    if (!response.ok) throw new Error("Erro ao buscar getPost");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }

    
}

export async function getPostList(formData: { search: string; topic: string }) : Promise<WikiPostSchema[] | null> {
   try {
    const params = new URLSearchParams();

    if (formData.search) {
        params.append("title", formData.search);
    }

    if (formData.topic != "Todos") {
        params.append("topic_id", formData.topic);
    }
    const response = await fetch(`http://127.0.0.1:8000/wiki/search?${params.toString()}`);
    if (!response.ok) throw new Error("Erro ao buscar postList");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getRecommended() : Promise<WikiPostSchema[] | null> {
  try {
    const response = await fetch("http://127.0.0.1:8000/wiki/recommended");
    if (!response.ok) throw new Error("Erro ao buscar recomendados");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getRecent() : Promise<WikiPostSchema[] | null> {
  try {
    const response = await fetch("http://127.0.0.1:8000/wiki/recent");
    if (!response.ok) throw new Error("Erro ao buscar recentes");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}



