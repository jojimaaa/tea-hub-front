import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({
  baseURL: "https://google.com",
})


export async function getStuff(): Promise<void> {
  // const config: AxiosRequestConfig = {
  //   method: "POST",
  //   url: "/login",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Custom-Header": "myApp-v1",
  //   },
  //   data, // same as body in fetch
  //   // optional:
  //   // params: { debug: true }, // query string
  //   // auth: { username: "admin", password: "123" },
  // }

  const config : AxiosRequestConfig = {
    
  }

  const response = await api.request<void>(config)
  return response.data
}
