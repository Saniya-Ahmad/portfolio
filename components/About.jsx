import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from'motion/react'
function About() {
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1, delay:0.3}}
    id ="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
       initial={{y:-20, opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 tetx-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
       initial={{y:-20, opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.5, delay:0.5}} className='text-center text-5xl font-Ovo'>About me </motion.h2>
      <motion.div
       initial={{ opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.8}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
         initial={{scale:0.9, opacity:0}}
         whileInView={{scale:1,opacity:1}}
         transition={{duration:0.6}} className='w-64 sm:w:80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
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
      </motion.div>
    </motion.div>
    
  )
}

export default About
