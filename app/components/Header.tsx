"use client"
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { HiBell, HiChat, HiSearch } from 'react-icons/hi'


function Header() {
	const { data: session } = useSession()
	console.log(session)
	return (
		<div className='flex gap-3 md:gap-2 items-center p-6'>
			<Image src='/logo.png' alt='logo' width={50} height={50} />
			<button className='bg-black text-white p-2 px-4 rounded-full md:block'> Home
			</button>
			<button className='font-semibold p-2 px-4'>create</button>
			<div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full md:flex hidden' >
				<HiSearch className='text-[25px] text-gray-500 md:hidden' />
				<input type='text' placeholder='Search' className='bg-transparent outline-none' />
			</div>
			<HiBell className='text-[25px] md:text-[40px] text-gray-500' />
			<HiChat className='text-[25px] md:text-[40px] text-gray-500' />
			{session?.user ? <Image src={session?.user?.image} alt='user-image' width={40} height={40}
				className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' /> :
				<button className='font-semibold p-2 px-4 rounded-full' onClick={() => signIn()}>Login</button>}
		</div>
	)
}

export default Header