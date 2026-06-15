import axiosInstance from './axiosInstance';

export const getEnrollments = () => axiosInstance.get('/enrollments');
