import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { createCourse, updateCourse } from '../../api/courseApi'

const CourseInputModal = ({ course, teachers, onCourseSaved }) => {
  const [name, setName] = useState(course ? course.name : '');
  const [code, setCode] = useState(course ? course.code : '');
  const [credits, setCredits] = useState(course ? course.credits : '');
  
  
  const [teacherId, setTeacherId] = useState( course && course.teacherId 
      ? (course.teacherId._id || course.teacherId) 
      : '' );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = { name, code, credits: Number(credits), teacherId };
    try {
      if (course && course._id) {
        await updateCourse(course._id, courseData);
      } else {
        await createCourse(courseData);
      }
      if (onCourseSaved) {
        onCourseSaved();
      }
    } catch (err) {
      console.log('Failed to save course:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
      <Input placeholder="Course Name" value={name} onChange={(e) => setName(e.target.value)}
      />
      <Input placeholder="Course Code" value={code} onChange={(e) => setCode(e.target.value)}
      />
      <Input placeholder="Credits" type="number" value={credits} onChange={(e) => setCredits(e.target.value)} />
      <select value={teacherId} onChange={(e) => setTeacherId(e.target.value)} 
              className="flex h-9 w-full rounded-md px-3 py-1 text-sm cursor-pointer">
        
        <option value="" className="text-gray-500">Select Teacher</option>
        
        {teachers && teachers.map((t) => (
          <option key={t._id} value={t._id}>
            {t.name} ({t.subject})
          </option>
        ))}
      </select>
      <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer">
        Submit
      </Button>
    </form>
  )
}

export default CourseInputModal
