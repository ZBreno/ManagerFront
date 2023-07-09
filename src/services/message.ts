import api from "@/utils/api";

export const getMessage = () => api.get("/message/");

export const deleteMessage = (id: string) => api.delete(`/message/${id}/`);

export const createMessage = (data: unknown) => api.post(`/message/`, data);

export const getMessageId = (id: string) => api.get(`/message/${id}/`);

