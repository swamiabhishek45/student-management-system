import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const EnrollmentInputModal = () => {
  return (
    <div> <>

                  {/*TODO:  change it to student/course dropdown */}
                  <Input placeholder="student" />
                  <Input placeholder="course" />
                  {/* TODO: add date of enrollment */}
                  <Button className="bg-orange-600 hover:bg-orange-700">submit</Button>
                </></div>
  )
}

export default EnrollmentInputModal