import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.svg'
import contactIng from '../assets/contact.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className="logo" />
        <div className="desktopMenu">
        <Link activeClass='active' to='navbar' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        </div>    
        <button className="desktopMenuBtn">
            <img src={contactIng} alt="" className="desktopMenuImg" />
        </button>

    </div>
  )
}


export default Navbar
