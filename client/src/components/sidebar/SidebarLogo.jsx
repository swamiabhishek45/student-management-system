import { GraduationCap } from 'lucide-react'
import React from 'react'

const SidebarLogo = () => {
  return (
    <div className='flex items-center gap-3 p-4'>
        <div className='flex h-10 w-10 items-center justify-center bg-orange-100 text-orange-600'>
            <GraduationCap className='h-8 w-8   '/>
        </div>

        <div className='flex flex-col min-w-0'>
            <span className=' font-bold text-2xl text-orange-600 tracking-wider'>
                SMS
            </span>
        </div>
    </div>
  )
}

export default SidebarLogo