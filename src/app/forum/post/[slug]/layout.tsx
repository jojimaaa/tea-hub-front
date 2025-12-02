"use client"

import { ForumPostContextProvider } from "@/contexts/ForumPostContextProvider";
import { use } from "react";

interface ForumPostLayoutParams {
    params : Promise<{
        slug : string
    }>
    children : React.ReactNode
}

export default function ForumPostLayout({ children, params }: ForumPostLayoutParams) {
    const {slug} = use(params);
    return (
        <div>
            <ForumPostContextProvider slug={slug}>
                {children}  
            </ForumPostContextProvider>
        </div>
    );
}