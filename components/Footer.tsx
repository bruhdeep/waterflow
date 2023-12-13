import React from 'react'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaSteam, } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-[#eee5f3] text-[#45505b] text-sm text-center pt-[30px] pb-[0px]'>
      <h3 className='text-4xl relative font-bold font-sans p-0 mb-4'>WYSI</h3>
      <p className='text-sm italic p-0 mb-9'>I like playing osu, league and overwatch. </p>
      <div className=" text-lg flex justify-center leading-none pt-2 pb-0 mb-9 text-center">
        <a href="https://github.com/bruhdeep" className='mr-2 w-9 h-9 rounded-[50%] bg-[#9736d8] pl-[9px] pt-[9px] hover:bg-[#b263e7]'><FaGithub color="white"/></a>
        <a href="https://discordid.netlify.app/?id=413679054777090049" className='mr-2 w-9 h-9 rounded-[50%] bg-[#9736d8] pl-[9px] pt-[9px] hover:bg-[#b263e7]'><FaDiscord color="white"/></a>
        <a href="https://www.instagram.com/bruhdeepo/" className='mr-2 w-9 h-9 rounded-[50%] bg-[#9736d8] pl-[9px] pt-[9px] hover:bg-[#b263e7]'><FaInstagram color="white"/></a>
        <a href="https://steamcommunity.com/id/succamadica/" className='mr-2 w-9 h-9 rounded-[50%] bg-[#9736d8] pl-[9px] pt-[9px] hover:bg-[#b263e7]'><FaSteam color="white"/></a>
        <a href="https://www.linkedin.com/in/pradip02/" className='mr-2 w-9 h-9 rounded-[50%] bg-[#9736d8] pl-[9px] pt-[9px] hover:bg-[#b263e7]'><FaLinkedinIn color="white"/></a>
      </div>
      <div className='mb-2'>
        &copy; Copyright. All Rights Reserved
      </div>
      <div className='text-xs pb-9'>
        Designed by <a href="https://bruhdeep.me" className='text-[#9736d8]'>bruhdeep</a>
      </div>
    </div>
  )
}

export default Footer
