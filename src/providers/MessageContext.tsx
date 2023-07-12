import { useProviderMessage } from "@/hooks/useProviderMessage";
import React, { createContext } from "react";

type MessageContextType = ReturnType<typeof useProviderMessage>;

export const MessageContext = createContext<MessageContextType>(
  {} as MessageContextType
);

interface MessageProviderProps {
  children: React.ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  return (
    <MessageContext.Provider value={useProviderMessage()}>
      {children}
    </MessageContext.Provider>
  );
};
