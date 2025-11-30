"use client"

import { TokenPayload } from "@/interfaces/AuthSchemas"
import { getCookie } from "@/services/authServices"
import { jwtDecode } from "jwt-decode"
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"

interface AuthState {
    name: string,
    username: string,
}

export interface AuthContextType {
    auth : AuthState 
    setAuth : Dispatch<SetStateAction<AuthState>>
    logout : () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({children} : {children : ReactNode}) => {
    const [auth, setAuth] = useState<AuthState>({
        name: "",
        username: "",
    })

    useEffect(() => {
        const accessToken = getCookie("access-token");
        if (accessToken) {
            try {
                const decoded = jwtDecode<TokenPayload>(accessToken);
                if (decoded && decoded.sub && decoded.name) {
                    setAuth({
                        username: decoded.sub,
                        name: decoded.name
                    })
                } else {
                    logout();
                }
            }
            catch {
                logout();
            }
        }
    }, []);

    const logout = () => {
        setAuth({
            name: "",
            username: ""
        })
        document.cookie = `access-token=; path=/; max-age=0;`; // remove o cookie
        document.cookie = `refresh-token=; path=/; max-age=0;`; // remove o cookie
    }

    return (
        <AuthContext.Provider value={{auth, setAuth, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;