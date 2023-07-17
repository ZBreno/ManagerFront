import {
  createCheckIn,
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeByCode,
  getFilterEmployee,
  patchEmployee,
  today_yesterday,
} from "@/services/employee";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

export const QueryKeys = {
  all: ["employees"] as const,
  filter: ["filterEmployee"] as const,
  unChecked: ["unChecked"] as const,
  lastCkeckIn: ["lastCkeckIn"] as const,
  item: (employeeId: string) => [...QueryKeys.all, employeeId] as const,
  itemCode: (code: string) => [...QueryKeys.all, code] as const,

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

export const useGetEmployeeByCode = (code: string) => {
  return useQuery({
    queryKey: QueryKeys.itemCode(code),
    queryFn: async () => {
      const response: any = await getEmployeeByCode(code);
      return response.data;
    },
    enabled: false,
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

export const useGetLastCheckIn = (id: string) => {
  return useQuery({
    queryKey: QueryKeys.lastCkeckIn,
    queryFn: async () => {
      const response: any = await today_yesterday(id);
      return response.data;
    },
    enabled: false,
  });
};

export const useCreateCheckIn = () => {
  return useMutation({
    mutationFn: createCheckIn,
  });
};

export const useGetFilterEmployee = ({id, name}: {id: number; name: string;}) => {
  const fetchData = useCallback(async () => {
    const response: any = await getFilterEmployee({id, name});
    return response.data;
  }, [id, name]);

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
