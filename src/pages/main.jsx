import React from 'react'

//components
import Home from '../components/main/home'
import Skills from '../components/main/skills'
import Works from '../components/main/works'
import Contact from '../components/main/contact'

const Main = () => {
  return (
    <div>
      <Home/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Main