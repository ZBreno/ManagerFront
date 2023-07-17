import { getPercent, getQuantityMessage, getWeekCheckIns } from "@/services/dashboard";
import { useQuery } from "@tanstack/react-query";

export const QueryKeys = {
  percent: ["percent"] as const,
  weekCheckIn: ["weekCheckIn"] as const,
  quantityMessage: ["quantityMessage"] as const
};

export const useGetPercent = () => {
  return useQuery({
    queryKey: QueryKeys.percent,
    queryFn: async () => {
      const response: any = await getPercent();
      return response.data;
    },
  });
};

export const useGetWeekCheckIn = () => {
  return useQuery({
    queryKey: QueryKeys.weekCheckIn,
    queryFn: async () => {
      const response: any = await getWeekCheckIns();
      return response.data;
    },
  });
};

export const useGetQuantityMessage = () => {
  return useQuery({
    queryKey: QueryKeys.quantityMessage,
    queryFn: async () => {
      const response: any = await getQuantityMessage();
      return response.data;
    },
  });
};
