import React from 'react'
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
const Navigation = ({page,setPage,setGroup}) => {
return (
    <div>
        <div className='fixed bottom-5 left-5 flex items-center gap-x-2 z-20 text-2xl bg-yellow-500/50 rounded-full px-2'>
            <span className='cursor-pointer' onClick={()=>page !=1 && setPage((page)=>page-1)}><IoArrowBackCircle /></span>
            <p>{page}</p>
            <span className='cursor-pointer' onClick={()=>setPage((page)=>page +1)}><IoArrowForwardCircle /></span>
        </div>
        <select name="category" id="category" className='fixed top-5 left-5 bg-gray-200/90 text-sm tracking-wide uppercase textgra700 rounded-md outline-none p-1 cursor-pointer hover:bg-gray-100 z-20' defaultValue={"Popular"} onChange={(e)=>{
            setGroup(e.target.value)
            setPage(1)
        }} >
            <option value="TopRated">Top Rated</option>
            <option value="Popular">Popular</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Discover">Discover</option>
        </select>
    </div>
)
}

export default Navigation
