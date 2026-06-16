import axiosInstance from './axiosInstance';

export const getEnrollments = () => axiosInstance.get('/enrollments');

export const enrollStudent = (enrollData) => axiosInstance.post('/enrollments', enrollData);

export const deleteEnrollment = (id, enrollData) => axiosInstance.delete(`/enrollments/${id}`, { data: enrollData });
