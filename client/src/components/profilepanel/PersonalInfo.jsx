import React from 'react'
import { IdCard, Phone, MapPin } from 'lucide-react';

const PersonalInfo = ({ studentId, phone, address }) => {
  return (
    <div className='flex flex-col gap-5'>
        <h4 className='font-bold uppcase text-sm tracking-wider'>Personal Information</h4>

        <div className='flex items-start gap-4'>
            <div className='border rounded-lg p-2 '>
                 <IdCard className="h-5 w-5" />
            </div>
            <div className='flex flex-col'>
             <span className='text-xs to-slate-400'>Student ID</span>
             <span className='font-semibold mt-0.5 text-slate-700'>{studentId}</span>
            </div>
        </div>


        {/* phone  */}

       <div className='flex items-start gap-4'>
            <div className='border rounded-lg p-2 '>
                <Phone className="h-5 w-5" />
            </div>
            <div className='flex flex-col'>
             <span className='text-xs to-slate-400'>Phone</span>
             <span className='font-semibold mt-0.5 text-slate-700'>{phone}</span>
            </div>
        </div>

        {/* address  */}

       <div className='flex items-start gap-4'>
            <div className='border rounded-lg p-2 '>
                <MapPin className="h-5 w-5" />
            </div>
            <div className='flex flex-col'>
             <span className='text-xs to-slate-400'>Address</span>
             <span className='font-semibold mt-0.5 text-slate-700'>{address}</span>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo