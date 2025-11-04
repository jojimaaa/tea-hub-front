export interface LoginRequest {
    username: string,
    password: string,
    grant_type: string
}

export interface LoginResponse {
    access_token: string,
    token_type: string
}

