import { LoginRequest, LoginResponse } from "@/interfaces/AuthSchemas"
import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8000", //dev
    //baseURL: "<prod>",              //prod
})

export async function login(data : LoginRequest) : Promise<LoginResponse> {
    console.log("login");
    console.log(data);

    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/login",
        data: data
    }

    const responseData : LoginResponse = {
        access_token: "",
        token_type: ""
    }

    const response = await api.request<LoginResponse>(config);
    if (response.status == 200) return response.data;
    return responseData;
}

export async function getStuff(): Promise<void> {
    // const config: AxiosRequestConfig = {
    //     method: "POST",
    //     url: "/login",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "X-Custom-Header": "myApp-v1",
    //     },
    //     data, // same as body in fetch
    //     // optional:
    //     // params: { debug: true }, // query string
    //     // auth: { username: "admin", password: "123" },
    // }

    const config : AxiosRequestConfig = {
        
    }

    const response = await api.request<void>(config)
    return response.data
}
