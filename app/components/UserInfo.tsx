import Image from 'next/image'
import React from 'react'

function UserInfo({ userInfo  } ) {
  console.log(userInfo)
  return (
    <div className='flex flex-col items-center'>
      <Image src={userInfo.userImage} alt='userimage' width={80} height={80} className='rounded-full' />

      <h2 className='text[30px] font-semibold'>{userInfo.userName}</h2>
      <h2>{userInfo.email}</h2>
      <button className='bg-gray-100  p-2 px-3 mt-5 font-semibold rounded-full' >share</button>
    </div>
  )
}

export default UserInfo