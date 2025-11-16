export interface LoginRequest {
    email: string,
    password: string,
}

export interface LoginResponse {
    access_token: string,
    refresh_token: string,
    token_type: string,
    name: string,
    username: string
}

export interface TokenPayload {
    sub: string | undefined,
    name: string | undefined,
    exp: number | undefined
}

export interface RegisterRequest {
    username: string,
    email: string,
    name: string,
    password: string
}

export interface RegisterResponse {
    id: string,
    email: string
}

export interface AuthMissCredentials {
    detail: string
}

export interface RefreshResponse {
    access_token: string,
    token_type: string
}


