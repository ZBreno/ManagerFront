import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMessage, deleteMessage, getMessage, getMessageId } from "@/services/message";

export const QueryKeys = {
  all: ["messages"] as const,
  item: (messageId: string) => [...QueryKeys.all, messageId] as const,
};

export const useGetMessage = () => {
  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: async () => {
      const response: any = await getMessage();
      return response.data;
    },
  });
};

export const useGetMessageId = (messageId: string) => {
  return useQuery({
    queryKey: QueryKeys.item(messageId),
    queryFn: async () => {
      const response: any = await getMessageId(messageId);
      return response.data;
    },
  });
};

export const useCreateMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMessage,
    onMutate: ({ data }) => {
      const key = QueryKeys.all;
      const messages = queryClient.getQueriesData(key);
      messages.push(data);
      queryClient.setQueryData(key, messages);
    },
  });
};

export const useDeleteMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};
