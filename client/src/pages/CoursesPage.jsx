import React, { useState } from 'react'
import CourseCard from '@/components/cards/CourseCard'
import { deleteCourse } from '../api/courseApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import CourseInputModal from '../components/header/CourseInputModal'

const CoursesPage = ({ courses, onRefresh, teachers }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      if (onRefresh) {
        onRefresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsEditing(true);
  };

  return (
    <div className='px-3 py-3'>
      <CourseCard 
        courses={courses} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader className="mt-10">
            <DialogTitle>Edit Course Info</DialogTitle>
          </DialogHeader>
          {selectedCourse && (
            <CourseInputModal 
              course={selectedCourse} 
              teachers={teachers}
              onCourseSaved={() => {
                setIsEditing(false);
                if (onRefresh) {
                  onRefresh();
                }
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CoursesPage