import axiosInstance from './axiosInstance';

export const getCourses = () => axiosInstance.get('/courses');

export const createCourse = (courseData) => axiosInstance.post('/courses', courseData);

export const updateCourse = (id, courseData) => axiosInstance.put(`/courses/${id}`, courseData);

export const deleteCourse = (id) => axiosInstance.delete(`/courses/${id}`);
