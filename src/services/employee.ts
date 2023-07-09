import api from "@/utils/api";

export const getEmployee = () => api.get("/employee/");

export const deleteEmployee = (id: string) => api.delete(`/employee/${id}/`);

export const createEmployee = (data: unknown) => api.post(`/employee/`, data);

export const patchEmployee = ({ id, data }: { id: string; data: unknown }) =>
  api.patch(`/employee/${id}/`, data);
