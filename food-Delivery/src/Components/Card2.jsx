import React from 'react'
import image1 from '../assets/image1.avif'
import { IoTrashBin } from "react-icons/io5";

const Card2 = () => {
  return (
    <div className='w-full h-[120px] shadow-lg p-2 flex justify-between items-center'>
      <div className='w-[60%] h-full  flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image1} alt="" className='object-cover' />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-5 p-2 '>
            <div className='text-lg text-gray-600 font-semibold'>Pancake</div>
            <div className='w-[110px] flex h-[50px] bg-slate-400 rounded-lg overflow-hidden shadow-lg text-green-700 font-bold border-2 border-green-400'>
                <button className='w-[30%] h-full bg-white hover:bg-slate-200'>-</button>
                <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center '>1</span>
                <button className='w-[30%] h-full bg-white  hover:bg-slate-200'>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-green-400 font-semibold '>Rs 499 /-</span>
        <IoTrashBin  className='text-red-400 text-2xl'/>

      </div>
    </div>
  )
}

export default Card2
