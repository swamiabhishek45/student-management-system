import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const TeacherInputModal = () => {
  return (
    <div><>
                      <Input placeholder="name" />
                      <Input placeholder="email" />
                      <Input placeholder="Subject" />
                      <Button className="bg-orange-600 hover:bg-orange-700">submit</Button>
                    </></div>
  )
}

export default TeacherInputModal