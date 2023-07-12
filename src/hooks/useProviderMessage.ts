import { useState } from "react";

export const useProviderMessage = () => {
  const [message, setMessage] = useState();

  return {
    message,
    setMessage,
  };
};
