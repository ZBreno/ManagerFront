import api from "@/utils/api";

export const getPercent = () => api.get('/employee/percent/')

export const getWeekCheckIns = () => api.get('/checkIn/week_checkins/')

export const getQuantityMessage = () => api.get("/message/news/");
