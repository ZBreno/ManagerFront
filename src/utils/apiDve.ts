import axios from "axios";
const apiDve = axios.create({
  baseURL: "http://127.0.0.1:8001/api",
  // headers: {Authorization: `Bearer ${token}`}
  //lembrar de alterar endereço

});

apiDve.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-token-dve");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiDve
