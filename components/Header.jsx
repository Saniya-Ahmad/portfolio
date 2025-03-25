import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { IoCloudDownloadSharp } from "react-icons/io5";

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
    justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='profile'
        className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hello! I am Saniya <Image src={assets.hand_icon} alt=''className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend Web Developer and Coding enthusiast. </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                Sophomore at National Institute of Technology, Patna in the department of Computer Science and Engineering. 
            </p>
       <div className='flex flex-col sm:flex:row items-center w-50 mt-4'>
        {/* <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2'> Contact Me </a> */}
       <a href="/sample-resume.pdf" download className=' px-10 py-3  border rounded-full
        border-gray-500 flex items-center gap-2'>
        My Resume <IoCloudDownloadSharp className='w-4'/>
       </a>
       </div>
    </div>
  )
}

export default Header
