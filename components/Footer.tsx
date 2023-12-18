import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaSteam, } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-[#82dfc1] text-[#4C5760] text-sm text-center pt-[30px] pb-[0px]'>
      <h3 className='text-4xl relative font-bold font-sans p-0 mb-4'>Waterflow</h3>
      <p className='text-sm italic p-0 mb-9'>Assessment for Waterflow Technology </p>
      <div className=" text-lg flex justify-center leading-none pt-2 pb-0 mb-9 text-center">
        <a href="https://github.com/bruhdeep" className='mr-2 w-9 h-9 rounded-[50%] bg-[#4C5760] pl-[9px] pt-[9px] hover:bg-[#000000] duration-500'><FaGithub color="white"/></a>
        <a href="https://discordid.netlify.app/?id=413679054777090049" className='mr-2 w-9 h-9 rounded-[50%] bg-[#4C5760] pl-[9px] pt-[9px] hover:bg-[#000000] duration-500'><FaDiscord color="white"/></a>
        <a href="https://www.instagram.com/bruhdeepo/" className='mr-2 w-9 h-9 rounded-[50%] bg-[#4C5760] pl-[9px] pt-[9px] hover:bg-[#000000] duration-500'><FaInstagram color="white"/></a>
        <a href="https://steamcommunity.com/id/succamadica/" className='mr-2 w-9 h-9 rounded-[50%] bg-[#4C5760] pl-[9px] pt-[9px] hover:bg-[#000000] duration-500'><FaSteam color="white"/></a>
        <a href="https://www.linkedin.com/in/pradip02/" className='mr-2 w-9 h-9 rounded-[50%] bg-[#4C5760] pl-[9px] pt-[9px] hover:bg-[#000000] duration-500'><FaLinkedinIn color="white"/></a>
      </div>
      <div className='mb-2'>
        &copy; Copyright. All Rights Reserved
      </div>
      <div className='text-xs pb-9'>
        Designed by <a href="https://bruhdeep.me" className='text-[#BA3F1D]'>bruhdeep</a>
      </div>
    </div>
  )
}

export default Footer
