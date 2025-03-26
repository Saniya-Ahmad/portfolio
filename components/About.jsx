import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div id ="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 tetx-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me </h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w:80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
          <p>I am Second year undergraduate at National Institute of Technology, Patna.
            I am hardworking person who is always keen to learn new things.I am a frontend
            web developer while also learning backend development. 
          </p>
          <br></br>
          <ul>
            <li><p><b>Technologies :</b> HTML, CSS, JavaScript, Reactjs, Nextjs, TailwindCSS</p></li>
            <li><p><b>Programming Languages :</b> Java, Python</p></li>
            <li><p><b>Tools :</b> GitHub, VS Code, IntelliJ IDEA</p></li>
            <li><p><b>Interest :</b> MERN, AI/ML , Cloud Computing</p></li>
            <li><p><b>CGPA :</b> 8.78</p></li>
            <br></br>
            <li><b>Positon of Responsibility:</b> Class Representative, Web Team Member Hackslash Club, NITP</li>
          </ul>
          

        </div>
      </div>
    </div>
    
  )
}

export default About
