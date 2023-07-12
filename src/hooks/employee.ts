import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getFilterEmployee,
  patchEmployee,
} from "@/services/employee";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const QueryKeys = {
  all: ["employees"] as const,
  unChecked: ["unChecked"] as const,
  item: (employeeId: string) => [...QueryKeys.all, employeeId] as const,

};

export const useGetEmployee = () => {
  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: async () => {
      const response: any = await getEmployee();
      return response.data;
    },
  });
};

export const useGetEmployeeUnChecked = () => {
  return useQuery({
    queryKey: QueryKeys.unChecked,
    queryFn: async () => {
      const response: any = await getEmployee();
      return response.data;
    },
  });
};

export const useGetFilterEmployee = (id?: any) => {
  const fetchData = useCallback(async () => {
    const response: any = await getFilterEmployee(id);
    return response.data;
  }, [id]);

  return useQuery({
    queryKey: QueryKeys.all,
    queryFn: fetchData,
    enabled: false,
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};

export const usePatchEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchEmployee,
    onSuccess: () => {
      // Caso a mutação seja bem-sucedida, refetch para atualizar os dados da query
      queryClient.invalidateQueries(QueryKeys.all);
    },
  });
};
