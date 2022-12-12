import React from 'react'

const Book = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full p-4'>
          <from className='flex lg:justify-between w-full items-center'>
               <div className='flex flex-col my-2 py-2'>
                    <label>Destnation</label>
                    <select className='lg:w-[300px] md:w-full border  rounded-md p-2'>
                         <option value="">Grande Antigua</option>
                         <option value="">key West</option>
                         <option value="">Maldives</option>
                         <option value="">Cozumel</option>
                    </select>
               </div>
               <div className='flex w-full'>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                         <label>Check-in</label>
                         <input type='date' />
                    </div>
                    <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                         <label>Check-out</label>
                         <input type='date' />
                    </div>
               </div>
               <div className='flex flex-col my-2 p-2 w-full'>
                    <label>Searchddddddddddddddd</label>
                    <button>Rates & Avai</button>
               </div>
          </from>
    </div>
  )
}

export default Book