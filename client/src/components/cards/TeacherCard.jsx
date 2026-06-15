import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '../ui/button';

const TeacherCard = ({teacher}) => {
  return (

    // use shadcn Card componet and build teacher card with dynamic data mapping
        <Card className="w-full max-w-xs border shadow-sm rounded-xl bg-white text-slate-800">
      <CardContent className="p-6">
      {/* info  */}

      <div className='text-center mt-6'>
        <h3 className='font-semibold text-lg'>{teacher.name}</h3>

        <p className='text-gray-500 text-sm'>{teacher.email}</p>

         <span className="mt-3 inline-block rounded-md bg-orange-100 px-3 py-1 text-sm text-orange-600">
            {teacher.subject}
          </span>
      </div>


 <div className="my-5 border-t" />

  {/* Courses */}
        <div className="text-center">
          <p className="text-sm text-slate-400 uppercase tracking-wider">
            Courses Taught
          </p>

          <p className="mt-1 text-2xl font-semibold">
            {/* {teacher.courses.length} */}1
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TeacherCard