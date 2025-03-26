import React from 'react'
import { assets } from '@/assets/assets'
import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
function Mywork() {
  return (
    <div id="work"className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 tetx-lg font-Ovo'>my work</h4>
      <h2 className='text-center text-5xl font-Ovo'> Projects </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 font-Ovo'>Here are some of my Projects
        I have made using different tools and technologies :-/. 
      </p>
      <div className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon,title, description, link},index)=>(
            <div key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>{description}</p>
                <br></br>
                <a href={link}>GitHub link <FaArrowRight /></a>
                
            </div>
        ))}

      </div>
    </div>
  )
}

export default Mywork