import React, { useState } from "react";

//icons
import { FiMenu, FiX } from "react-icons/fi";

const NavbarMobile = () => {

  const [toggle, setToggle] = useState(false);
  const [trToggle, setTrToggle] = useState(true);

  const style = "after:absolute after:content-[''] after:bg-blue-600 after:bottom-[-6px] after:left-1/2 after:-translate-x-1/2 after:rounded-lg after:w-[30px] after:h-[3px] transition-all text-blue-600"


  return (
    <div className="relative md:hidden z-20">

      <nav className="flex justify-between items-center p-4 px-5 sm:px-10 shadow-md bg-transparent backdrop-blur-sm fixed w-full border-b border-gray-300 top-0">
        <h1 className="text-[25px] font-bold">Ibrohim</h1>
        <button onClick={() => setToggle(true)} className="p-2 text-blue-700">
          <FiMenu size={28} />
        </button>
      </nav>

      {toggle && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setToggle(false)}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 transform ${toggle ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
      >
        <button onClick={() => setToggle(false)} className="absolute right-6 top-6 text-blue-700">
          <FiX size={28} />
        </button>
        <div className="mt-10 space-y-4">
          <div className='flex gap-6 pl-3 pt-1 pb-5'>
            <button className={`uppercase font-semibold hover:text-blue-600 transition-all relative tr-btn ${trToggle ? style : ''}`}
              onClick={() => setTrToggle(true)}>eng</button>
            <button className={`uppercase font-semibold hover:text-blue-600 transition-all relative tr-btn ${trToggle ? '' : style}`}
              onClick={() => setTrToggle(false)}>rus</button>
          </div>
          <a href='#home' className="block p-1 pl-3 cursor-pointer hover:text-blue-600 transition-all relative link-nav-mobile" onClick={()=>setToggle(false)}>Home</a>
          <a href='#skills' className="block p-1 pl-3 cursor-pointer hover:text-blue-600 transition-all relative link-nav-mobile" onClick={()=>setToggle(false)}>Skills</a>
          <a href='#works' className="block p-1 pl-3 cursor-pointer hover:text-blue-600 transition-all relative link-nav-mobile" onClick={()=>setToggle(false)}>My Works</a>
          <a href='#contact' className="block p-1 pl-3 cursor-pointer hover:text-blue-600 transition-all relative link-nav-mobile" onClick={()=>setToggle(false)}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile