import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  patchEmployee,
} from "@/services/employee";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const QueryKeys = {
  all: ["employees"] as const,
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
