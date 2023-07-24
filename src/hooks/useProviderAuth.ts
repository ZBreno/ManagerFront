import { useMutation, useQuery } from "@tanstack/react-query";
import * as AuthToken from "@/utils/authToken";
import { login, loginDve, logout } from "@/services/auth";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/router";
import apiDve from "@/utils/apiDve";


export const QueryKeys = {
  all: ["auth"] as const,
  me: () => [...QueryKeys.all, "me"] as const,
  meDve: () => [...QueryKeys.all, "meDve"] as const,
};

export const useProviderAuth = () => {
  const [user, setUser] = useState<null | false | Record<string, string>>();
  const [userDve, setUserDve] = useState<unknown>();
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


  const { refetch: getLoggedUserDve } = useQuery({
    queryKey: QueryKeys.meDve(),
    queryFn: async () => {
      const token = await AuthToken.getAuthTokenDVE()
      const response : any = await apiDve.get(`/users/me/`, { headers: { Authorization: `Bearer ${token}` } });;
      setUserDve(response?.data);
      return response.data;
    },
  
    onError: () => {
      setUser(false);

    },
  });

  const loginMutationDve = useMutation({
    mutationFn: loginDve,
    onSuccess: (data : any) => {
      AuthToken.setAuthTokenDVE(data.data.access);
      getLoggedUserDve();
    },
    onError: (err) => {
      console.log(err);
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
      AuthToken.deleteAuthTokenDVE();
      setUser(false);
      setUserDve(false)
    },
  });

  return {
    getLoggedUser,
    user,
    userDve,
    loginMutationDve,
    loginMutation,
    logoutMutation,
  }
};
