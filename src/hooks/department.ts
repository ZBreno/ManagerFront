import { createDepartment, deleteDepartment, getDepartment, patchDepartment } from "@/services/department";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const QueryKeys = {
  all: ["departments"] as const,
  item: (departmentId: string) => [...QueryKeys.all, departmentId] as const,
};

export const useGetDepartment= () => {
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
  