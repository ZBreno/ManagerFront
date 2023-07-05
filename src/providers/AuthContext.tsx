import React, { createContext } from "react";
import { useProviderAuth } from "@/hooks/useProviderAuth";

type AuthContextType = ReturnType<typeof useProviderAuth>;

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={useProviderAuth()}>
      {children}
    </AuthContext.Provider>
  );
};
