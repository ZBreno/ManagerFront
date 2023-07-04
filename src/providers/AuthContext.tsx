import { createContext } from "react";

interface AuthContextData {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextData);


