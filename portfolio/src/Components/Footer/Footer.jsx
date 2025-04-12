import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <div className="footer bg-black text-[#818181] pb-3 ">
        <ul className='flex justify-center mt-8 gap-5 text-xl'>
            <li><Link to="/" className='hover:text-[#f0eeee] transition-all duration-700'>Home</Link></li>
            <li><Link to="about" className='hover:text-[#f0eeee] transition-all duration-700'>About</Link></li>
            <li><Link to="work" className='hover:text-[#f0eeee] transition-all duration-700'>Work</Link></li>
            <li><Link to="contact" className='hover:text-[#f0eeee] transition-all duration-700'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
