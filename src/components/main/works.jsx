import React from 'react'

import onlineShop from '../../assets/online-shop.png'
import webSchool from '../../assets/web-school.png'

const Works = () => {
  return (
    <div id='works' className='flex flex-col justify-center items-center'>
      <h1 className='flex justify-center gap-2 text-[45px] font-bold'>My<span className='text-blue-700'>Works</span></h1>
      
      <div className='flex flex-col justify-center items-center shadow-lg rounded-lg w-[90%] bg-gray-50 pb-8 m-5 mt-10'>
        <img src={onlineShop} alt="online shop" className='p-12 pb-8'/>
        <div className='w-[90%]'>
          <h1 className='p-2 font-bold text-[20px]'>Virtual Shop website</h1>
          <p  className='p-2'>A professional website developed for Online Shopping. The virtual shop provides a convenient platform to explore and purchase a variety of products online. Its user-friendly design ensures easy navigation and a smooth shopping experience. Customers can shop anytime, anywhere with just a few clicks.</p>
          <h1 className='p-2 font-bold text-[20px]'>Stack:</h1>
          <h3 className='p-2'>React, Tailwind CSS, credits FakeStoreAPI</h3>
          <a href="https://onlineshop-ibrohim.vercel.app/" className='flex justify-center items-center h-10 w-20 font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all mx-2 my-3'>Visit</a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center shadow-lg rounded-lg w-[90%] bg-gray-50 pb-8 m-5 mt-10'>
        <img src={webSchool} alt="" className='p-12 pb-8'/>
        <div className='w-[90%]'>
          <h1 className='p-2 font-bold text-[20px]'>My School website</h1>
          <p  className='p-2'>My school is a place of learning, growth, and inspiration for students. It provides a supportive environment with dedicated teachers and modern facilities. Here, we strive to achieve academic excellence and build a strong foundation for the future.</p>
          <h1 className='p-2 font-bold text-[20px]'>Stack:</h1>
          <h3 className='p-2'>React, Tailwind CSS, credits 3rd School</h3>
          <a href="https://onlineshop-ibrohim.vercel.app/" className='flex justify-center items-center h-10 w-20 font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all mx-2 my-3'>Visit</a>
        </div>
      </div>

    </div>
  )
}

export default Works