import api from "@/utils/api";

export const login = (data: {username: string, password: string}) => 
    api.post("/token/", data)

