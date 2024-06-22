import React from 'react'
import { HiArrowUpOnCircle } from 'react-icons/hi2'

function UploadImage() {
  return (
    <div className='h-[450px] bg-[#e9e9e9] rounded-lg'>
      <label>
        <HiArrowUpOnCircle className='text-[22px]' />
        <h2 className='font-semibold'>Click to Upload</h2>
        <input type="file" className='hidden' />
      </label>
    </div>
  )
}

export default UploadImage