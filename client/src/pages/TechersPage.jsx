import React, { useEffect, useState } from 'react'
import TeacherCard from '../components/cards/TeacherCard'
const TeachersPage = ({ onViewProfile }) => {

  const [teachers, setTeachers] = useState([])

  const getTeachers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/teachers")
      const data = await response.json()
      setTeachers(data.teachers)
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