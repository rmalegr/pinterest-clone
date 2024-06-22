"use client"
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiBell, HiChat, HiSearch } from 'react-icons/hi'
import { doc, getFirestore, setDoc } from "firebase/firestore"
import app from '../shared/firebaseConfig'
import { useRouter } from 'next/navigation'

function Header() {
  const { data: session } = useSession()
  console.log(session)
  const db = getFirestore(app)

  const router = useRouter();

  useEffect(() => {
    saveUserInfor()
  }, [session])

  const saveUserInfor = async () => {
    if (session?.user) {
      await setDoc(doc(db, "users", session.user.email || ""), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image
      })
    }
    

  }
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image src='/logo.png' alt='logo' width={50} height={50} />
      <button className='bg-black text-white p-2 px-4 rounded-full md:block'> Home
      </button>
      <button className='font-semibold p-2 px-4' onClick={() => router.push('/pin-builder')} >create</button>
      <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full md:flex hidden' >
        <HiSearch className='text-[25px] text-gray-500 md:hidden' />
        <input type='text' placeholder='Search' className='bg-transparent outline-none' />
      </div>
      <HiBell className='text-[25px] md:text-[40px] text-gray-500' />
      <HiChat className='text-[25px] md:text-[40px] text-gray-500' />
      {session?.user ? <Image src={session?.user?.image || ""} alt='user-image' width={40} height={40}

        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
        onClick={() => router.push('/' + session.user?.email)}
      /> :
        <button className='font-semibold p-2 px-4 rounded-full' onClick={() => signIn()}>Login</button>}
    </div>


  )
}

export default Header