import axiosInstance from './axiosInstance';
export const getTeachers = () => axiosInstance.get('/teachers');
