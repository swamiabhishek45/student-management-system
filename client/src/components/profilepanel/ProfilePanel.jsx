import React, { useState } from 'react'

import { IdCard } from "lucide-react";

import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import PersonalInfo from './PersonalInfo';
import EnrolledCourses from './EnrolledCourses';
import ProfileActions from './ProfileActions';
import { deleteStudent } from '../../api/studentApi';
import StudentInputModal from '../header/StudentInputModal';
import { Button } from '../ui/button';


const ProfilePanel = ({ student, onClose, onRefresh }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

    const studentId = student.studentId
  const phone = student.phone
  const address = student.address;
  const courses = student.coursesList;

  const handleDelete = async () => {
      try {
        await deleteStudent(student._id);
        if (onRefresh) onRefresh();
        onClose();
      } catch (error) {
        alert("Failed to delete student:");
      } 
  };

  if (isEditing) {
    return (
      <div className="flex flex-col h-full bg-white p-6">
        <div className="flex justify-between items-center mb-6 pb-4 border-b">
          <h2 className="text-xl font-bold text-slate-800">Edit Profile</h2>
          <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <StudentInputModal 
            student={student} 
            onStudentAdded={() => {
              setIsEditing(false);
              if (onRefresh) onRefresh();
              onClose();
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className=''>

      <ProfileHeader student={student} onClose={onClose} />

      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />


      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
        {activeTab === 'profile' ? (
          <>
            <PersonalInfo 
              studentId={studentId} 
              phone={phone} 
              address={address} 
            />
          </>
        ) : (
          <EnrolledCourses courses={courses} />
        )}
      </div>
      <ProfileActions onEdit={() => setIsEditing(true)} onDelete={handleDelete} />
    </div>
  )
}

export default ProfilePanel