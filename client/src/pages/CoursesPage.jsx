import CourseCard from '@/components/cards/CourseCard'
import React, { useEffect, useState } from 'react'

const CoursesPage = () => {

  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    try {
      const coursesResponse = await fetch(
        "http://localhost:5000/api/courses",
      );

      const coursesData = await coursesResponse.json();
      setCourses(coursesData);
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