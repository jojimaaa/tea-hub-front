import { LoginRequest, LoginResponse, RefreshResponse, RegisterRequest, RegisterResponse } from "@/interfaces/AuthSchemas"
import { getCookie } from "@/utils/utils"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/auth", //dev
    //baseURL: "<prod>",              //prod
})

export const apiPrivate = axios.create({
    baseURL: "http://127.0.0.1:8000/", //dev
    //baseURL: "<prod>",              //prod
})

const apiUser = axios.create({
    baseURL: "http://127.0.0.1:8000/user", //dev
    //baseURL: "<prod>",              //prod
})

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  sent?: boolean;
}

const responseIntercept = apiPrivate.interceptors.response.use(
    response=>response,
    async (error: AxiosError) => {
        const prevRequest = error?.config as CustomAxiosRequestConfig;
        if(error?.response?.status === 401 && !prevRequest?.sent) {
            prevRequest.sent = true;
            const newAccessToken = await refresh();
            prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
            return apiPrivate(prevRequest);
        }   
        return Promise.reject(error);
    }
);


export async function login(data : LoginRequest) : Promise<AxiosResponse<LoginResponse>> {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/login",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    }

    return await api.request(config);
}

export async function register(data : RegisterRequest) : Promise<AxiosResponse<RegisterResponse>> {
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/register",
        data: data,
        headers: {
            "Content-Type": "application/json",
        },
    }

    return await apiUser.request<RegisterResponse>(config);
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

export const refreshToken = async () : Promise<AxiosResponse<RefreshResponse>> => {
    const refresh_token = getCookie("refresh-token");
    
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/refresh",
        headers: {
            "Authorization" : `Bearer ${refresh_token ? refresh_token : ""}`
        }
    }

    return await api.request<RefreshResponse>(config);
}

export const refresh = async () => {
    const response = await refreshToken();
    if (response.status == 200) {
        document.cookie = `access-token=${response.data.access_token}; path=/; max-age=86400;`;
        return response.data.access_token;
    }
    return "";
}

export const refreshPrivateToken = async () : Promise<AxiosResponse<RefreshResponse>> => {
    const accessToken = getCookie("access-token");
    
    const config : AxiosRequestConfig = {
        method: "POST",
        url: "/auth/refresh",
        headers: {
            "Authorization" : `Bearer ${accessToken ? accessToken : ""}`
        }
    }

    return await apiPrivate.request<RefreshResponse>(config);
}

export const private_refresh = async () => {
    const response = await refreshPrivateToken();
    if (response.status == 200) {
        document.cookie = `access-token=${response.data.access_token}; path=/; max-age=86400;`;
        return response.data.access_token;
    }
    return "";

}