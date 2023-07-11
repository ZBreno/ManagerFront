import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMessage, deleteMessage, getFilterMessage, getMessage, getMessageId } from "@/services/message";
import { useCallback } from "react";

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

export const useGetFilterMessage = (id?: any) => {
  const fetchData = useCallback(async () => {
    const response: any = await getFilterMessage(id);
    return response.data;
  }, [id]);

  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: fetchData,
    enabled: false,
  });
};

export const useCreateMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
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
