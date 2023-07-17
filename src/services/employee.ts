import api from "@/utils/api";

export const getEmployee = () => api.get("/employee/");

export const getEmployeeByCode = (code: string) => api.get(`/employee/employee_code/${code}/`);

export const getFilterEmployee = ({id, name}: {id?: number; name?: string;}) => api.get(`/employee/?department=${id}&name=${name}`);

export const deleteEmployee = (id: string) => api.delete(`/employee/${id}/`);

export const today_yesterday = (id: string) => api.get(`/employee/${id}/today_yesterday/`);

export const createCheckIn = (data: any) => api.post(`/checkIn/`, data);

export const createEmployee = (data: unknown) => api.post(`/employee/`, data);

export const patchEmployee = ({ id, data }: { id: string; data: unknown }) =>
  api.patch(`/employee/${id}/`, data);
