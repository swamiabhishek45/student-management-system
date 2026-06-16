import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const StudentCard = ({ student, onViewProfile }) => {
  return (
   <Card className="w-full max-w-xs border shadow-sm rounded-xl bg-white text-slate-800">
      <CardContent className="p-6 mt-5">

      {/* profile image  */}

      <div className='flex justify-center -mt-10'>
        <Avatar className="w-20 h-20 rounded-full border-4 border-white shadow-lg">
          <AvatarFallback className="text-2xl font-bold bg-orange-50 text-orange-600 border border-orange-100">
            {student.name
              .split(" ")
              .map((n) => n[0])
              .join("").toUpperCase()}
          </AvatarFallback>
        </Avatar>

      </div>

      {/* info  */}

      <div className='text-center mt-6'>
        <h3 className='font-semibold text-lg'>{student.name}</h3>

        <p className='text-gray-500 text-sm'>{student.email}</p>

         <span className="mt-3 inline-block rounded-md bg-orange-100 px-3 py-1 text-sm text-orange-600">
            {student.grade}
          </span>
      </div>


 <div className="my-5 border-t" />

  {/* Courses */}
        <div className="text-center">
          <p className="text-sm text-slate-400 uppercase tracking-wider">
            Enrolled Courses
          </p>

          <p className="mt-1 text-2xl font-semibold">
            {student.courses}
          </p>
        </div>

           {/* Button */}
        <Button
          variant="outline"
          className="mt-5 w-full"
          onClick={() => onViewProfile(student)}
        >
          View Profile
        </Button>

      </CardContent>
    </Card>
  )
}

export default StudentCard