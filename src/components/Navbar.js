import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/burgerlogo.png'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className="main">
        <img src={Logo} alt="" />
        <div className='mainLink'>
          <Link to='/'>Anasayfa</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
       </div>
    </div>
  )
}
