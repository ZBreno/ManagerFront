import api from "@/utils/api";

export const getMessage = () => api.get("/message/");

export const getFilterMessage = ({id, name}: {id?: string; name?: string;}) => api.get(`/message/?type=${id}&name=${name}`);

export const deleteMessage = (id: string) => api.delete(`/message/${id}/`);

export const createMessage = (data: unknown) => api.post(`/message/`, data, {headers: { "Content-Type": "multipart/form-data"}});

export const getMessageId = (id: string) => api.get(`/message/${id}/`);

