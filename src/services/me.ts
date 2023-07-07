import api from "@/utils/api";





export const loadLoggedInUser = (token: string | null) => {
  
  api.get(`/users/me/`, { headers: { Authorization: `Bearer ${token}` } });
};
