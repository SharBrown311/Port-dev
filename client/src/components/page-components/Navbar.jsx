import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='nav-list'>
      <Link to = "/" className='nav-link' >Home</Link>
      <br />
      <Link to = '/resume' className='nav-link'>Resume</Link>
  
      <br />
      <Link to = '/contact' className='nav-link'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar