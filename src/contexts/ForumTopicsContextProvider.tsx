"use client"

import { useAsyncFn } from "@/hooks/useAsync";
import { ForumTopicDTO } from "@/interfaces/ForumSchemas";
import { getForumTopics } from "@/services/forumServices";
import { createContext, useEffect } from "react";

export interface ForumTopicContextType {
    loading : boolean,
    error : Error | undefined,
    fetchTopics : () => Promise<ForumTopicDTO[]>
    topics : ForumTopicDTO[]
}

interface ForumTopicContextProviderProps {
    children : React.ReactNode;
}

export const ForumTopicContext = createContext<ForumTopicContextType | undefined>(undefined);

export const ForumTopicContextProvider = ({children} : ForumTopicContextProviderProps) => {
    const {loading, error, value : topics, execute : getForumTopicsAsync} = useAsyncFn<ForumTopicDTO[], []>(getForumTopics);
    
    useEffect(() => {
        const fetch = async () => {
            await getForumTopicsAsync();
        }
        fetch();
    }, [])

    return (
        <ForumTopicContext.Provider
            value={{
                topics: topics ? topics : [],
                loading: loading,
                error: error,
                fetchTopics : getForumTopicsAsync
            }}
        >
            {children}
            </ForumTopicContext.Provider>
    )
}