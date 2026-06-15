import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const CourseInputModal = () => {
  return (
    <div> <>
                  <Input placeholder="name" />
                  <Input placeholder="code" />
                  <Input placeholder="credits" />
                  {/* TODO: drop down of techers here */}
                  <Button className="bg-orange-600 hover:bg-orange-700">submit</Button>
                </></div>
  )
}

export default CourseInputModal