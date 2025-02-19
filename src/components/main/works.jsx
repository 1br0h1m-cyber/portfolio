import React from 'react'

import onlineShop from '../../assets/online-shop.png'
import webSchool from '../../assets/web-school.png'

const Works = () => {
  return (
    <div id='works' className='flex flex-col justify-center items-center'>
      <h1 className='flex justify-center gap-2 text-[40px] sm:text-[45px] font-bold'>My<span className='text-blue-700'>Works</span></h1>
      
      <div className='flex flex-col justify-center items-center shadow-lg rounded-lg w-[90%] bg-gray-50 pb-8 m-5 mt-5 md:mt-7 lg:mt-10'>
        <img src={onlineShop} alt="online shop" className='p-4 sm:p-6 md:p-8 lg:p-12 pt-8 pb-4 md:pb-8'/>
        <div className='w-[90%]'>
          <h1 className='px-2 py-1 font-bold text-[20px]'>Virtual Shop website</h1>
          <p  className='px-2 py-1 text-[15px] md:text-[18px]'>A professional website developed for Online Shopping. The virtual shop provides a convenient platform to explore and purchase a variety of products online. Its user-friendly design ensures easy navigation and a smooth shopping experience. Customers can shop anytime, anywhere with just a few clicks.</p>
          <h1 className='px-2 py-1 font-bold text-[20px]'>Stack:</h1>
          <h3 className='px-2 py-1'>React, Tailwind CSS, Swiper, ©FakeStoreAPI</h3>
          <a href="https://onlineshop-ibrohim.vercel.app/" className='flex justify-center items-center h-10 w-20 font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all mx-2 mt-5'>Visit</a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center shadow-lg rounded-lg w-[90%] bg-gray-50 pb-8 m-5 md:mt-7 lg:mt-10'>
        <img src={webSchool} alt="" className='p-4 sm:p-6 md:p-8 lg:p-12 pt-8 pb-4 md:pb-8'/>
        <div className='w-[90%]'>
          <h1 className='px-2 py-1 font-bold text-[20px]'>My School website</h1>
          <p  className='px-2 py-1 text-[15px] md:text-[18px]'>My school is a place of learning, growth, and inspiration for students. It provides a supportive environment with dedicated teachers and modern facilities. Here, we strive to achieve academic excellence and build a strong foundation for the future.</p>
          <h1 className='px-2 py-1 font-bold text-[20px]'>Stack:</h1>
          <h3 className='px-2 py-1'>React, Tailwind CSS, © 3rd School</h3>
          <a href="https://school-ibrohim.vercel.app/" className='flex justify-center items-center h-10 w-20 font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all mx-2 mt-5'>Visit</a>
        </div>
      </div>

    </div>
  )
}

export default Works