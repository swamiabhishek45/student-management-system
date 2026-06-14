import React from 'react'

const ProfileTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className='flex border-b px-6 pt-3'>
        <button 
        onClick={() => onTabChange('profile')}
        className={`
            flex-1 pb-2 font-semibold transition-all border-b-2 cursor-pointer
            ${activeTab === 'profile' ? "border-orange-600 text-orange-600" : "border-transparent text-slate-400 hover:text-slate-600"}

            `}
        >
        
            Profile
        </button>

         <button
        onClick={() => onTabChange('enrollments')}
        className={`flex-1 pb-3 text-sm font-semibold transition-all border-b-2 cursor-pointer 
          ${activeTab === 'enrollments' 
            ? 'border-orange-600 text-orange-600' 
            : 'border-transparent text-slate-400 hover:text-slate-600'
          }`}
      >
        Enrollments
      </button>
        
    </div>
  )
}

export default ProfileTabs