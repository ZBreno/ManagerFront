import api from "@/utils/api";

export const getDepartment = () => api.get("/department/");

export const deleteDepartment = (id: string) =>
  api.delete(`/department/${id}/`);

export const createDepartment = (data: unknown) =>
  api.post(`/department/`, data);

export const patchDepartment = ({ id, data }: { id: string; data: unknown }) =>
  api.patch(`/department/${id}/`, data);
