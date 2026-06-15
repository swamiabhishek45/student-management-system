import axiosInstance from './axiosInstance';
export const getStudents = () => axiosInstance.get('/students');

export const createStudent = (studentData) => axiosInstance.post('/students', studentData);

export const updateStudent = (id, studentData) => axiosInstance.put(`/students/${id}`, studentData);

export const deleteStudent = (id) => axiosInstance.delete(`/students/${id}`);
