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
    <div id='home' className='flex flex-col lg:flex-row justify-center items-center w-full gap-8 lg:gap-5 mt-16 mb-8 lg:my-12 px-6'>

      <div className='flex flex-col items-center lg:items-end gap-7'>

        <div className='flex w-[350px] h-[130px] justify-center items-center gap-5 p-3 rounded-3xl shadow-lg bg-gray-50'>
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


      <div className='flex lg:flex-col gap-8 lg:gap-4'>

        <div className='w-[150px] h-[150px] flex justify-center items-center rounded-full shadow-xl'>
          <img src={web} alt="icon" className='w-[150px]'/>
        </div>
          
        <div className='w-[180px] h-[180px] flex justify-center items-center rounded-full shadow-xl'>
          <img src={react} alt="icon" className='w-[150px]'/>
        </div>
          
        <div className='w-[160px] h-[160px] flex justify-center items-center rounded-full shadow-xl'>
          <img src={redux} alt="icon" className='w-[120px]'/>
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