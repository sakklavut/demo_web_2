import React, { useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
// import{GiAnglerFish} from 'react-icons/gi';
import{FaFacebookSquare} from 'react-icons/fa';
import {AiFillTwitterSquare,AiTwotoneMail,AiFillInstagram} from 'react-icons/ai';



const Navbar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
     setNav(!nav)
}


  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700'>
          <ul className='hidden sm:flex px-4'>
               <li>
                    <a href="/">หน้าหลัก</a>
               </li>
               <li>
                    <a href="#stock">สินค้า</a>
               </li>
               <li>
                    <a href="#gallery">รูปภาพ</a>
               </li>
               <li>
                    <a href="#contact">ติดต่อเรา</a>
               </li>
          </ul>
          <div className='flex justify-between'>
               <FaFacebookSquare className='mx-4'/>
               <AiFillTwitterSquare  className='mx-4'/>
               <AiTwotoneMail className='mx-4' />
               <AiFillInstagram  className='mx-4'/>
          </div>
          {/* ไอคอน Hamburger */}
          <div onClick={handleNav} className='sm:hidden z-10'>
               <FaBars size={20} className="mr-4 cursor-pointer" />
          </div>
           {/* เมนู โมบาย */}
           <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col w-full' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
               <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                         <a href="/">หน้าหลัก</a>
                    </li>
                    <li className='text-2xl py-8'>
                         <a href="#stock">สินค้า</a>
                    </li>
                    <li className='text-2xl py-8'>
                         <a href="#gallery">รูปภาพ</a>
                    </li>
                    <li className='text-2xl py-8' >
                         <a href="#contact">ติดต่อเรา</a>
                    </li>
               </ul>
           </div>
    </div>
  )
}

export default Navbar