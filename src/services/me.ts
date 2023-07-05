import api from "@/utils/api";

export const loadLoggedInUser = () => api.get("/users/");