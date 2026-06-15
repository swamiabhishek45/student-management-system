import axiosInstance from './axiosInstance';
export const getStudents = () => axiosInstance.get('/students');

export const createStudent = (studentData) => axiosInstance.post('/students', studentData);
