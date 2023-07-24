import {
  createDepartment,
  deleteDepartment,
  getDepartment,
  getFilterDepartment,
  patchDepartment,
} from "@/services/department";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const QueryKeys = {
  all: ["departments"] as const,
  item: (departmentId: string) => [...QueryKeys.all, departmentId] as const,
};

export const useGetDepartment = () => {
  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: async () => {
      const response: any = await getDepartment();
      return response.data;
    },
  });
};

export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDepartment,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};

export const useCreateDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDepartment,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};
export const useGetFilterDepartment = (name: string) => {
  const fetchData = useCallback(async () => {
    const response: any = await getFilterDepartment(name);
    return response.data;
  }, [name]);

  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: fetchData,
    enabled: false,
  });
};

export const usePatchDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchDepartment,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};
