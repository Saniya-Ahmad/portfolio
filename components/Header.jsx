import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { IoCloudDownloadSharp } from "react-icons/io5";
import { motion } from 'motion/react'
function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center
    justify-center gap-4'>
      <motion.div 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:'spring' ,stiffnes:100}}
      >
        <Image src={assets.profile_img} alt='profile'
        className='rounded-full w-32'/>
      </motion.div>
      <motion.h3 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.6, delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hello! I am Saniya <Image src={assets.hand_icon} alt=''className='w-6'/>
        </motion.h3>
        <motion.h1 
         initial={{y:-20, opacity:0}}
         whileInView={{y:0,opacity:1}}
         transition={{duration:1, delay:0.3}}className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend Web Developer and Coding enthusiast. </motion.h1>
            <motion.p 
             initial={{ opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:0.6, delay:0.7}}className='max-w-2xl mx-auto font-Ovo'>
                Sophomore at National Institute of Technology, Patna in the department of Computer Science and Engineering. 
            </motion.p>
       <div className='flex flex-col sm:flex:row items-center w-50 mt-4'>
        {/* <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2'> Contact Me </a> */}
       <motion.a 
        initial={{y:30, opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay:1}}
       href="/sample-resume.pdf" download className=' px-10 py-3  border rounded-full
        border-gray-500 flex items-center gap-2'>
        My Resume <IoCloudDownloadSharp className='w-4 mt-2'/>
       </motion.a>
       </div>
    </div>
  )
}

export default Header
