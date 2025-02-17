import React from 'react'

//assets
import gif from '../../assets/developer.gif'
import hand from '../../assets/hand.png'
import react from '../../assets/react.png'
import web from '../../assets/html css js.png'
import redux from '../../assets/redux.png'

//icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Home = () => {

  return (
    <div id='home' className='flex max-lg:flex-col justify-center items-center w-full gap-8 lg:gap-5 mt-24 sm:mt-20 lg:mt-14 mb-8 lg:my-12 px-6'>

      <div className='flex flex-col sm:items-center lg:items-end gap-7'>

        <div className='flex w-[330px] sm:w-[350px] h-[120px] sm:h-[130px] justify-center items-center gap-5 p-3 rounded-3xl shadow-lg bg-gray-50'>
          <img src={hand} alt="wave hand" className='h-[90px]'/>
          <div className=''>
            <h2 className='font-semibold text-gray-500 text-[20px]'>Hello, I am</h2>
            <h1 className='font-bold text-[30px]'>Ibrohim</h1>
          </div>
        </div>

        <div className='flex justify-center items-center w-64 h-16 p-3 shadow-lg rounded-2xl text-[20px] text-gray-500 font-semibold'> 
          FrontEnd / React Developer
        </div>

        <button className='p-2 w-[200px] bg-blue-600 hover:bg-blue-800 shadow-xl transition-all text-white rounded-xl'>
          More Information
        </button>

      </div>


      <div>
        <img src={gif} alt="developer gif" className='max-h-[90vh]'/>
      </div>


      <div className='flex lg:flex-col gap-2 sm:gap-8 lg:gap-4'>

        <div className='w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] flex justify-center items-center rounded-full shadow-xl'>
          <img src={web} alt="icon" className='w-[100px] sm:w-[150px]'/>
        </div>
          
        <div className='w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] flex justify-center items-center rounded-full shadow-xl'>
          <img src={react} alt="icon" className='w-[100px] sm:w-[150px]'/>
        </div>
          
        <div className='w-[110px] sm:w-[160px] h-[110px] sm:h-[160px] flex justify-center items-center rounded-full shadow-xl'>
          <img src={redux} alt="icon" className='w-[80px] sm:w-[120px]'/>
        </div>
        
      </div>

      <div className='hidden md:flex flex-col text-[24px] gap-2 absolute left-[20px] bottom-[20px]  z-10'>
        <button className='shadow-2xl flex justify-center items-center h-12 w-12 rounded-full text-blue-500 hover:text-white bg-white hover:bg-blue-500 transition-all'>
          <FaTelegramPlane/>
        </button>
        <button className='shadow-2xl flex justify-center items-center h-12 w-12 rounded-full text-sky-500 hover:text-white bg-white hover:bg-sky-500 transition-all'>
          <FaLinkedinIn/>
        </button>
      </div>

    </div> 

  )
}

export default Home