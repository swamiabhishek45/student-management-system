import Header from '@/components/Header';
import ProfilePanel from '@/components/ProfilePanel';
import Sidebar from '@/components/Sidebar';
import StudentCard from '@/components/StudentCard';
import { Sidebar } from 'lucide-react';
import React from 'react'

const Dashboard = () => {

    const students = [
  { name: "Abhishek", grade: "A", courses: 4 },
  { name: "Priya", grade: "B", courses: 3 },
  { name: "Rahul", grade: "A+", courses: 5 },
];
  return (
    <div className='flex min-h-screen bg-black text-white'>

        {/* sidebar */}

        <Sidebar />
        <main className='flex-1 p-4'>

            {/* header  */}
            <Header/>
            
            <div className='grid gap-4 mt-6'>
                <div className='grid gap-4 '>

                    {students.map((std) => (
                        // studentcard 

                        <StudentCard  key={std.name} student={std}/>


                    ))}

                </div>

                {/* profilepanel  */}

                <ProfilePanel />
            </div>
        </main>
    </div>
  )
}

export default Dashboard