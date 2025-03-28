import React from 'react'
import { assets } from '@/assets/assets'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'motion/react';
function Mywork() {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    
    id="work"className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
       initial={{y:-20, opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.6, delay:0.3}}className='text-center mb-2 tetx-lg font-Ovo'>my work</motion.h4>
      <motion.h2 initial={{y:-20, opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'> Projects </motion.h2>

      <motion.p
       initial={{ opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.7, delay:0.5}}
      className='text-center max-w-2xl mx-auto mt-5 font-Ovo'>Here are some of my Projects
        I have made using different tools and technologies :-/. 
      </motion.p>
      <motion.div 
       initial={{ opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.9, delay:0.6}}
       className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon,title, description, link},index)=>(
            <motion.div
            whileHover={{scale:1.05}}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{description}</p>
                <br></br>
                <a href={link}>GitHub link <FaArrowRight /></a>
                
                
            </motion.div>
        ))}

      </motion.div >
      <a target="_blank" href="https://github.com/Saniya-Ahmad"className='w-max flex items-center justify-center gap-2 text-gray-700 border[0.5px]
      border rounded-full y-5 py-2 px-8 mx-auto my-20 hover:bg-lightHover duration-500'>See More<Image src={assets.right_arrow_bold} alt='Right arrow'
      className='w-4'/></a>
    </motion.div>
  )
}

export default Mywork