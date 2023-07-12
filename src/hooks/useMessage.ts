import { MessageContext } from "@/providers/MessageContext";
import { useContext } from "react";

export const useMessage = () => {
  return useContext(MessageContext);
};