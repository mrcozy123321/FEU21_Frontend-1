import React from 'react'
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav-links'>
          <Link to='/form'>Form</Link>
          <Link to='/issues'>Issues</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar