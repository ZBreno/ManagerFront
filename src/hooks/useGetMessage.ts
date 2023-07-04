import { useQuery } from "@tanstack/react-query";
import { getMessage } from "@/services/messages";

export const QueryKeys = {
  all: ["messages"] as const,
};

export const useGetMessage = () => {
  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: async () => {
      const response = await getMessage();
      return response.data;
    },
  });
};
