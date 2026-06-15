import axiosInstance from './axiosInstance';

export const getCourses = () => axiosInstance.get('/courses');
