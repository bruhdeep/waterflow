"use client";

import React, {useState} from 'react'
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

  return (
    <div className="flex justify between items-center h-24 max-w-[1920px] mx-[12%] px-4 text-white font-mono">
		<h1 className='w-full text-3xl font-bold text-[#00df9a]'><a href="/">Waterflow</a></h1>
		<ul className='hidden md:flex'>
			<a href='/'>
				<li className='p-4'>
					<button className="cursor-pointer relative flex gap-1.5 px-8 py-4 bg-[#00df9a] bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-[#318f77] transition font-semibold shadow-md">
						Home
					</button>
				</li>
			</a>
			<a href="/login">
				<li className='p-4'>
					<button className="cursor-pointer relative flex gap-1.5 px-8 py-4 bg-[#00df9a] bg-opacity-80 text-[#ffffff] rounded-3xl hover:bg-[#318f77] duration-200 transition font-semibold shadow-md">
						Login
					</button>
				</li>
			</a>
		</ul>
		<div onClick={handleNav} className='block md:hidden'>
			{!nav ? <HiMenu size={20}/> : <HiOutlineX size={20}/>}
		</div>
		<div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
			<h1 className='w-full text-3xl font-bold text-[#00df9a]'>Waterflow</h1>
			<ul className='uppercase p-4'>
				<a href="/"><li className='p-4 border-b border-gray-600'>Home</li></a>
				<a href="/login"><li className='p-4 border-b border-gray-600'>Login</li></a>
			</ul>
		</div>
	</div>
  )
}

export default Navbar
