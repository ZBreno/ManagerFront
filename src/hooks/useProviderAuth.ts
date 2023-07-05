import { useMutation, useQuery } from "@tanstack/react-query";
import * as AuthToken from "@/utils/authToken";
import { login, logout } from "@/services/auth";
import { useState } from "react";
import { loadLoggedInUser } from "@/services/me";

export const QueryKeys = {
  all: ["auth"] as const,
  me: () => [...QueryKeys.all, "me"] as const,
};

export const useProviderAuth = () => {
  const [user, setUser] = useState<null | false | Record<string, string>>();

  const { refetch: getLoggedUser } = useQuery({
    queryKey: QueryKeys.me(),
    queryFn: async () => {
      const response = await loadLoggedInUser();
      setUser(response.data);
      return response.data;
    },

    onError: () => {
      setUser(false);
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      AuthToken.setAuthToken(data.data.token);
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
