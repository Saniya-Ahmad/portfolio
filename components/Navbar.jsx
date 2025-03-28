import  Image from 'next/image'
import { assets } from '@/assets/assets'

import { GoArrowUpRight } from "react-icons/go";
import { CiDark } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useRef,useEffect,useState } from 'react';
const Navbar = () => {
  const[isScroll,setIsScroll] = useState(false);
  const sideMenuRef =useRef();

  const openMenu =()=>{
    sideMenuRef.current.style.transform = 'translateX(0)'
  }
  const closeMenu =()=>{
    sideMenuRef.current.style.transform = 'translateX(100%)'
  }
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(scrollY >50){
          setIsScroll(true)
        }
        else{
          setIsScroll(false)
        }
    })
  })
  
 return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'> 
      <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
    flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 bg-blur-lg shadow-sm":"" }`}>
        <a href="#top">
            <Image src={assets.logo} alt="logo" 
            width={100}
            height={30}
            className='w-28 cursor-pointer mr-14' />
        </a>
        
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full 
        px-12 py-3 ${isScroll?"":"bg-white shadow-sm bg-opacity-50"} `}>
            <li><a className="font-Ovo"href='#top'>Home</a></li>
            <li><a className="font-Ovo"href='#about'>About me</a></li>
            <li><a className="font-Ovo"href='#work'>My Work</a></li>
            <li><a className="font-Ovo"href='#experience'>Experience</a></li>
            <li><a className="font-Ovo"href='#contact'>Contact me </a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button>
          <CiDark />
          </button>
            <a href='#contact' className='hidden lg:flex items-cenetr gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact<GoArrowUpRight className='mt-1' />

            </a>
            <button className='block md:hidden ml-3 ' onClick={openMenu}>
            <CiMenuFries />
            </button>
            
        </div>

        {/* mobile-menu-icons */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0
        w-64 z-50 h-screen bg-rose-50 transition duration-500  '>
          <button className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
          <RxCross1  onClick={closeMenu} />
          </button>
          <li><a className="font-Ovo"href='#top' onClick={closeMenu}>Home</a></li>
            <li><a className="font-Ovo"href='#about' onClick={closeMenu}>About me</a></li>
            <li><a className="font-Ovo"href='#services' onClick={closeMenu}>Services</a></li>
            <li><a className="font-Ovo"href='#work' onClick={closeMenu}>My Work</a></li>
            <li><a className="font-Ovo"href='#contact' onClick={closeMenu}>Contact me </a></li>
         
        </ul>
    </nav>
    </>
  )
}

export default Navbar
