import React, { useEffect, useState } from 'react'
import TeacherCard from '../components/cards/TeacherCard'
import { getTeachers as fetchTeachers } from '../api/teacherApi'

const TeachersPage = ({ onViewProfile }) => {

  const [teachers, setTeachers] = useState([])

  const getTeachers = async () => {
    try {
      const response = await fetchTeachers();
      setTeachers(response.data.teachers);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <div>
      <div className='grid gap-6 transition-all duration-300 
                  grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher._id} teacher={teacher} />
        ))}
      </div>

    </div>
  )
}

export default TeachersPage