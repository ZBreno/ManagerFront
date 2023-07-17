import { useEffect, useState } from "react";

interface Message {
  screen: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

export const useProviderMessage = () => {
  const [message, setMessage] = useState<Message | false>();

  useEffect(() => {
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  }, [message]);

  return {
    message,
    setMessage,
  };
};
