import React, { useState } from 'react'
import TeacherCard from '../components/cards/TeacherCard'
import { deleteTeacher } from '../api/teacherApi'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import TeacherInputModal from '../components/header/TeacherInputModal'

const TeachersPage = ({ teachers, onRefresh }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleDelete = async (id) => {
   
      try {
        await deleteTeacher(id);
        if (onRefresh) {
          onRefresh();
        }
      } catch (error) {
        console.log(error);
      }

  };

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
    setIsEditing(true);
  };

  return (
    <div>
      <div className='grid gap-6 transition-all duration-300 
                  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center md:justify-items-start'>
        {teachers.map((teacher) => (
          <TeacherCard 
            key={teacher._id} 
            teacher={teacher} 
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent>
          <DialogHeader className="mt-10">
            <DialogTitle>Edit Teacher Info</DialogTitle>
          </DialogHeader>
          {selectedTeacher && (
            <TeacherInputModal 
              techer={selectedTeacher} 
              onTeacherAdd={() => {
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

export default TeachersPage