import React from 'react'

//assets
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import tailwind from '../../assets/tailwind.png'
import node from '../../assets/node.png'
import bootstrap from '../../assets/bootstrap.svg'
import python from '../../assets/python.png'

const Skills = () => {
  return (
    <div id='skills' className='py-10'>

      <h1 className='flex justify-center gap-2 text-[40px] sm:text-[45px] font-bold'>My<span className='text-blue-700'>Skills</span></h1>

      <div className='flex flex-wrap justify-center gap-5 py-7 px-4 mx-auto'>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={html} alt="skills" className='h-[60px] sm:h-[70px] md:h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-red-600'>HTML</h1>         
        </div>
        
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={css} alt="skills" className='h-[60px] sm:h-[70px] md:h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-blue-600'>CSS</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={js} alt="skills" className='h-[60px] sm:h-[70px] md:h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-yellow-500'>JS</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={react} alt="skills" className='h-[60px] sm:h-[70px] md:h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-sky-400'>React</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={redux} alt="skills" className='h-[65px] sm:h-[75px] md:h-[95px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-violet-600'>Redux</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={tailwind} alt="skills" className='h-[70px] sm:h-[80px] md:h-[100px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-sky-500'>Tailwind</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={node} alt="skills" className='h-[70px] sm:h-[80px] md:h-[100px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-lime-500'>Node</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={bootstrap} alt="skills" className='h-[50px] sm:h-[60px] md:h-[80px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-violet-600'>Bootstrap</h1>         
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[85px] sm:h-[100px] md:h-[130px] w-[85px] sm:w-[100px] md:w-[130px]'>
            <img src={python} alt="skills" className='h-[70px] sm:h-[85px] md:h-[110px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-sky-700'>Python</h1>         
        </div>

      </div>

    </div>
  )
}

export default Skills