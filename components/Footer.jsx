import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

function Footer() {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt="" className='w-36 mx-auto mb-2' />
      </div>
      <div className='w-max flex items-center gap-2 mx-auto'>
        <SiGmail />saniyanitpatna@gmail.com
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='text-left'>&copy; 2025 Saniya. All rights reserved.</p>
        <ul className='flex gap-10 mt-4 sm:mt-0'>
          <li>
            <a target="_blank" href="https://github.com/Saniya-Ahmad">
              <GrGithub />
            </a>
          </li>
          <li>
            <a target="_blank"  href="https://www.linkedin.com/in/saniya-ahmad-4b11a1274/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;