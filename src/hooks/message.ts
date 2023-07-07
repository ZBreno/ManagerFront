import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMessage, deleteMessage, getMessage } from "@/services/messages";
import { useState } from "react";

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
    onMutate: () => {
      const key = QueryKeys.all
      const message = queryClient.getQueryData(key)

      return message
    },
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};
