import api from "@/utils/api";
import apiDve from "@/utils/apiDve";

export const login = (data: {username: string, password: string}) => 
    api.post("/token/", data)

export const loginDve = (data: {email: string, password: string}) => 
    apiDve.post("/token/", data)

export const logout = () => new Promise((resolve)=> resolve(null))