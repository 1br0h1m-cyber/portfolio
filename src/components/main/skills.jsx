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

const Skills = () => {
  return (
    <div id='skills' className='py-10'>

      <h1 className='flex justify-center gap-2 text-[45px] font-bold'>My<span className='text-blue-700'>Skills</span></h1>

      <div className='flex justify-center gap-5 py-7 mx-auto'>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={html} alt="images" className='h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-red-600'>HTML</h1>         
        </div>
        
        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={css} alt="images" className='h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-blue-600'>CSS</h1>         
        </div>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={js} alt="images" className='h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-yellow-500'>JS</h1>         
        </div>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={react} alt="images" className='h-[90px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-sky-400'>React</h1>         
        </div>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={redux} alt="images" className='h-[95px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-violet-600'>Redux</h1>         
        </div>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={tailwind} alt="images" className='h-[100px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-sky-500'>Tailwind</h1>         
        </div>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={node} alt="images" className='h-[100px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-lime-500'>Node</h1>         
        </div>

        <div className='flex flex-col justify-center items-center max-w-[150px]'>
          <div className='flex justify-center items-center rounded-full shadow-lg hover:shadow-xl hover:cursor-pointer bg-gray-50 hover:bg-white transition-all h-[130px] w-[130px]'>
            <img src={bootstrap} alt="images" className='h-[80px]'/>
          </div> 
          <h1 className='text-center py-1 font-semibold text-violet-600'>Bootstrap</h1>         
        </div>

      </div>

    </div>
  )
}

export default Skills