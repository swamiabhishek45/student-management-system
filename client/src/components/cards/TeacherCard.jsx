import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from '../ui/button';

const TeacherCard = ({teacher, onEdit, onDelete}) => {
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

        {/* buttons edit/delete */}
        <div className="flex justify-center gap-3 mt-4">
          <Button 
            variant="outline" 
            className="cursor-pointer"
            onClick={() => onEdit && onEdit(teacher)}
          >
            Edit
          </Button>
          <Button 
            variant="destructive" 
            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            onClick={() => onDelete && onDelete(teacher._id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TeacherCard