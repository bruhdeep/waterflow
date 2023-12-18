"use client";

import React, {useState} from 'react'
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useRouter } from 'next/navigation';

const Navbar = () => {

	const router = useRouter();

	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

  return (
    <div className="flex justify between items-center h-24 max-w-[1920px] mx-[12%] px-4 text-white font-mono">
		{/*Desktop nav*/}
		<h1 className='w-full text-3xl font-bold text-[#00df9a]'><a className='hover:text-[#6affdf] transition ease-in-out duration-500' href="/">Waterflow</a></h1>
		<ul className='hidden md:flex'>
			<li className='p-4'>
				<button className="text-md hover:scale-125 hover:text-[#00df9a] duration-200" onClick={() => router.push('/')}>
					Home
				</button>
			</li>
			<li className='p-4'>
				<button className="text-md hover:scale-125 hover:text-[#00df9a] duration-200" onClick={() => router.push('/login')}>
					Login
				</button>
			</li>
		</ul>
		<div onClick={handleNav} className='block md:hidden'>
			{!nav ? <HiMenu size={20}/> : <HiOutlineX size={20}/>}
		</div>
		{/*Mobile nav*/}
		<div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'} onClick={handleNav}>
			<h1 className='w-full text-3xl font-bold text-[#00df9a]'>Waterflow</h1>
			<ul className='uppercase p-4'>
				<li className='cursor-pointer p-4 border-b border-gray-600' onClick={() => router.push('/')}>Home</li>
				<li className='cursor-pointer p-4 border-b border-gray-600' onClick={() => router.push('/login')}>Login</li>
			</ul>
		</div>
	</div>
  )
}

export default Navbar
