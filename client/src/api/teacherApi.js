import axiosInstance from './axiosInstance';
export const getTeachers = () => axiosInstance.get('/teachers');

export const createTeacher = (teacherData) => 
    axiosInstance.post('/teachers', teacherData)


export const updateTeacher = (id, teacherData) => 
    axiosInstance.put(`/teachers/${id}`, teacherData);

export const deleteTeacher = (id) => axiosInstance.delete(`/teachers/${id}`)
