import React from 'react'

//components
import NavbarDefault from './navbarDefault'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
  return (
    <div>
      <NavbarDefault/>
      <NavbarMobile/>
    </div>
  )
}

export default Navbar