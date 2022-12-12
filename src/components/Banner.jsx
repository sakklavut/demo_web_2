import React from 'react'
import banner from '../img/banner_1.jpg'
const Banner = () => {
  return (
    <div className='w-full h-[90vh]'>
          <img src={banner}  className="w-full h-full object-cover" /> 
          <div className='max-w-[1140px] m-auto'>
               <div className='absolute top-[25%] w-[520px] md-[20%] h-full flex flex-col p-4'>
                    <h1 className='text-white font-bold'>ปลาหางนกยูงสมุทปราการ </h1>  
                    <h5 className='text-white text-4xl py-4 italic'>Giant Guppy</h5>
                    <p className='text-white'>ปลาหางนกยูงป่าที่เรามักเรียกกันหรือปลาเอนเลอร์ ชื่อสายพันธุ์สากลคือ Poecilia wingei เป็นปลาที่อยู่ในสกุลเดียวกับปลาหางนกยูงเป็นญาติที่มีสายเลือดใกล้ชิดกันมากแต่ไม่ใช่สายพันธุ์เดียวกัน ซึ่งปลาหางนกยูงทั่วไปมีชื่อตามสายพันธุ์สากลคือ Poecilia reticulata โดยมีลักษณะที่โดดเด่นต่างกัน คือ เป็นปลาที่มีลักษณะเล็ก เพรียว บาง และ ว่ายน้ำได้คล่องแคล่วว่องไว
มีสีสันสวยงาม อึด และ ทน ปรับตัวกับน้ำที่ใช้เลี้ยงได้ไว </p>
               </div>
          </div>
    </div>
  )
}

export default Banner