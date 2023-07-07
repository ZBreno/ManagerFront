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
    onMutate: ({ id }) => {
      const key = QueryKeys.item(id);
      const messages = queryClient.getQueriesData(key);
      const newMessages = messages.filter((message) => message !== id)
      queryClient.setQueriesData(key, newMessages);
    },
  });
};
