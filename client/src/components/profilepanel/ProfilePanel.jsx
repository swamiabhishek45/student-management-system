import React, { useState } from 'react'

import { IdCard } from "lucide-react";

import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import PersonalInfo from './PersonalInfo';
import EnrolledCourses from './EnrolledCourses';
import ProfileActions from './ProfileActions';


const ProfilePanel = ({ student, onClose }) => {
    const [activeTab, setActiveTab] = useState('profile');


      const studentId = student.studentId || "STU1001";
  const phone = student.phone || "234235123";
  const address = student.address || "Pune";
  const courses = student.coursesList || [
    { name: "Mathematics", code: "MATH101" },
    { name: "Physics", code: "PHY101" },
    { name: "Computer Science", code: "CS101" }
  ];
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
            <EnrolledCourses courses={courses} />
          </>
        ) : (
          <div className="text-center text-slate-400 text-sm py-12">
            No additional enrollments to display.
          </div>
        )}
      </div>
<ProfileActions />
    </div>
  )
}

export default ProfilePanel