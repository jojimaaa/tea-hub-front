import { ForumTopicContextProvider } from "@/contexts/ForumTopicsContextProvider";

const ForumLayout = (
    {
        children
    } : Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <ForumTopicContextProvider>
            {children}
        </ForumTopicContextProvider>
    );
}

export default ForumLayout;