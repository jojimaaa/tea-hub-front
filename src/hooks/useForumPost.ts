import { useContext } from "react";
import { ForumPostContext, ForumPostContextType } from "@/contexts/ForumPostContextProvider";

export default function useForumPost(): ForumPostContextType {
    const context = useContext(ForumPostContext);
    if (!context) {
        throw new Error('useMyContext must be used within a ForumPostContextProvider');
    }
    return context;
}