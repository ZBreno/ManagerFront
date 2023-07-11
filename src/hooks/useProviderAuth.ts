import { useMutation, useQuery } from "@tanstack/react-query";
import * as AuthToken from "@/utils/authToken";
import { login, logout } from "@/services/auth";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/router";


export const QueryKeys = {
  all: ["auth"] as const,
  me: () => [...QueryKeys.all, "me"] as const,
};

export const useProviderAuth = () => {
  const [user, setUser] = useState<null | false | Record<string, string>>();
  const router = useRouter()


  const { refetch: getLoggedUser } = useQuery({
    queryKey: QueryKeys.me(),
    queryFn: async () => {
      const token = await AuthToken.getAuthToken()
      const response : any = await api.get(`/users/me/`, { headers: { Authorization: `Bearer ${token}` } });;
      setUser(response?.data);
      return response.data;
    },
  
    onError: () => {
      setUser(false);

    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data : any) => {
      AuthToken.setAuthToken(data.data.access);
      getLoggedUser();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      AuthToken.deleteAuthToken();
      setUser(false);
    },
  });

  return {
    getLoggedUser,
    user,
    loginMutation,
    logoutMutation,
  }
};
