import { useContext } from "react";
import AuthContext, { AuthContextType } from "@/contexts/AuthContextProvider";

export default function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthContextProvider');
    }
    return context;
}