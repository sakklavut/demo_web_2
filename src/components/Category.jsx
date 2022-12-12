import React from 'react'
import Cat_1 from '../img/Cat_1.jpg'
import Cat_2 from '../img/Cat_2.jpg'
import Cat_3 from '../img/Cat_3.jpg'
const Category = () => {
  return (
     <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px;]'>
          <div className='relative p-4'>
               <h3 className='absolute z-10 top-[50%] left-[32%]  text-white bg-slate-700 p-5  rounded'>อาหารปลา</h3>
               <img className='w-full h-full object-cover border-gray-200 shadow-lg border-4'  src={Cat_1} alt="" />
          </div>
          <div className='relative p-4'>
               <h3 className='absolute z-10 top-[50%] left-[32%] text-white bg-slate-700 p-5  rounded'>โรคปลา</h3>
               <img className='w-full h-full object-cover border-gray-200 shadow-lg border-4' src={Cat_2} alt="" />
          </div>
          <div className='relative p-4'>
               <h3 className='absolute z-10 top-[50%] left-[32%] text-white bg-slate-700 p-5  rounded'>อุปกรณ์เลี้ยงปลา</h3>
               <img className='w-full h-full object-cover border-gray-200 shadow-lg border-4' src={Cat_3} alt="" />
          </div>
     </div>
  )
}

export default Category