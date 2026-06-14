import { X } from 'lucide-react';
import React from 'react'

const ProfileHeader = ({ student, onClose }) => {

    const initials = student.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  return (
    <div className='flex flex-col bg-white border border-b'>
        <div className='flex items-center justify-between p-6 border-b'>
            <h2 className='font-bold text-lg'>Student Profile</h2>
            {
                onClose && (
                    <button onClick={onClose}
                        className='cursor-pointer p-1'
                    >
                        <X className='h-5 w-5'/>

                    </button>
                )
            }
        </div>


        {/* profile summary  */}

        <div className='flex flex-col items-center text-center p-6'>
            <div className='flex h-24 w-24 items-center justify-center rounded-full font-bold text-orange-600 bg-orange-50 mb-4 text-3xl'>
             {initials}
            </div>
                <h3 className='text-xl font-bold leading-tight mb-1'>{student.name}</h3>
                <p className='text-sm mb-4 text-slate-400'>{student.email}</p>
                <span className='text-lg font-bold px-4 rounded-full bg-orange-50 text-orange-600 border-orange-100 border-2'>{student.grade}</span>
        </div>
    </div>
  )
}

export default ProfileHeader