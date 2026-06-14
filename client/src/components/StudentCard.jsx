import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StudentCard = ({ student }) => {
  return (
   <Card>
      <CardHeader>
        <CardTitle>{student.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Grade: {student.grade}</p>
        <p>Courses: {student.courses}</p>
      </CardContent>
    </Card>
  )
}

export default StudentCard