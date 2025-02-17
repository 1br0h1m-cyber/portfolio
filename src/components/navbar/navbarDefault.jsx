import React, { useState } from 'react'

const NavbarDefault = () => {

  const [toggle, setToggle] = useState(true)

  const style = "after:absolute after:content-[''] after:bg-blue-600 after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:rounded-lg after:w-[30px] after:h-[3px] transition-all text-blue-600"

  return (
    <div className='hidden md:flex justify-between items-center fixed w-full backdrop-blur-sm p-4 px-10 lg:px-16 top-0 z-20 border-b border-gray-300'>
      <a className='text-[25px] font-bold' href='/'>Ibrohim</a>
      <div className='flex gap-8 uppercase text-[16px] font-semibold text-gray-600'>
        <a className='hover:text-blue-600 transition-all relative link-nav-default' href="#home">Home</a>
        <a className='hover:text-blue-600 transition-all relative link-nav-default' href="#skills">Skills</a>
        <a className='hover:text-blue-600 transition-all relative link-nav-default' href="#works">My Works</a>
        <a className='hover:text-blue-600 transition-all relative link-nav-default' href="#contact">Contact</a>
      </div>
      <div className='flex gap-5'>
        <button className={`uppercase font-semibold hover:text-blue-600 transition-all relative tr-btn ${toggle ? style : ''}`}
          onClick={() => setToggle(true)}>eng</button>
        <button className={`uppercase font-semibold hover:text-blue-600 transition-all relative tr-btn ${toggle ? '' : style}`}
          onClick={() => setToggle(false)}>rus</button>
      </div>
    </div>
  )
}

export default NavbarDefault