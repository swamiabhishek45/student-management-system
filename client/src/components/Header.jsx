import React from 'react'
import { Button } from './ui/button'

const Header = () => {
 return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        Students
      </h1>

      <Button>Add Student</Button>
    </div>
  );
}

export default Header