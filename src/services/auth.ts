import api from "@/utils/api";

export const login = (data: {email: string, password: string}) => 
    api.post("/token/", data)

export const logout = () => new Promise((resolve)=> resolve(null))