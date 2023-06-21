import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='Header'>
      <div className='name-title-container'>
      <h3 className='header-name'>Sharon Brown</h3>
      
      <p className='header-title'>M.E.R.N Stack - Web Developer</p>
      </div>
      <Navbar />
    </div>
  )
}

export default Header