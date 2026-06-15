import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const StudentInputModal = () => {
    return (
        <div className=''>     
            <Input placeholder="name" />
            <Input placeholder="email" />
            <Input placeholder="phone" />
            <Input placeholder="address" />
            <Input placeholder="courses" />
            <Button className="bg-orange-600 hover:bg-orange-700">submit</Button>
        </div>
    )
}

export default StudentInputModal