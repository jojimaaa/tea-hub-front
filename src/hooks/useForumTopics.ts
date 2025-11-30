import { ForumTopicContext, ForumTopicContextType } from "@/contexts/ForumTopicsContextProvider";
import { useContext } from "react";

export default function useForumPost(): ForumTopicContextType {
    const context = useContext(ForumTopicContext);
    if (!context) {
        throw new Error('useForumPost must be used within a ForumTopicContextProvider');
    }
    return context;
}