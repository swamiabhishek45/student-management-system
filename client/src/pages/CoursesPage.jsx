import CourseCard from '@/components/cards/CourseCard'
import React, { useEffect, useState } from 'react'
import { getCourses as fetchCourses } from '../api/courseApi'

const CoursesPage = () => {

  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const coursesResponse = await fetchCourses();
      setCourses(coursesResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className='px-3 py-3'>
      
      <CourseCard courses={courses} />
    </div>
  )
}

export default CoursesPage