import React from 'react'

//icons
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='space-y-7 py-12'>
      
      <h1 className='flex justify-center gap-2 text-[45px] font-bold'>Contact<span className='text-blue-700'>Me</span></h1>
      
      <div className='flex justify-between w-[820px] mx-auto'>
        <a className='flex justify-center items-center p-5 gap-1 rounded-xl cursor-pointer bg-gray-50 hover:bg-white border-solid border-[2px] border-gray-50 hover:border-blue-600 hover:text-blue-500 transition-all shadow-lg hover:shadow-xl' href='https://t.me/Normahmatov04'>
          <div className='text-[24px] text-blue-500'><FaTelegramPlane/></div>  
          <p>T.me/Normahmatov04</p>
        </a>

        <a className='flex justify-center items-center p-5 gap-1 rounded-xl cursor-pointer bg-gray-50 hover:bg-white border-solid border-[2px] border-gray-50 hover:border-violet-600 hover:text-violet-600 transition-all shadow-lg hover:shadow-xl' href='https://instagram.com/normahmatov1broh1m'>
          <div className='text-[24px] text-violet-600'><BsInstagram/></div>
          <p>normahmatov1broh1m</p>
        </a>
        
        <a className='flex justify-center items-center p-5 gap-1 rounded-xl cursor-pointer bg-gray-50 hover:bg-white border-solid border-[2px] border-gray-50  hover:border-sky-500 hover:text-sky-500 transition-all shadow-lg hover:shadow-xl' href='/'>
          <div className='text-[24px] text-sky-500'><FaLinkedinIn/></div>
          <p>Normahmatov Ibrohim</p>
        </a>
      </div>
      
      
      <div className='py-4'>
        <form className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl shadow-xl w-[820px] mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input type="text" id="name" placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-600/30 focus:border-blue-600 outline-none sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email" id="email" placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-600/30 focus:border-blue-600 outline-none sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea id="message" rows="4" placeholder="Write your message here"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-600/30 focus:border-blue-600 outline-none sm:text-sm"
            ></textarea>
          </div>
          
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all">
            Submit
          </button>
        
        </form>
      </div>
    
    </div>
  )
}

export default Contact