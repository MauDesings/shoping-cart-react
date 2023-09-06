import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {RiCloseFill, RiMenuFill} from 'react-icons/ri'
import bgPattern from '../../assets/bgPattern.svg'
import NavLinks from './NavLinks'
import './navBar.css'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='container nav'>
        <RiMenuFill className='icon'onClick={()=> setMenuOpen(!menuOpen)} />

        <div className={menuOpen ? 'menu-modal opacity' : 'menu-modal'}>
            <ul className={menuOpen ? 'menu-links open' : 'menu-links'}>
                <NavLinks />
                <RiCloseFill className='icon icon-close' onClick={()=> setMenuOpen(!menuOpen)} />
                <img className='bg' src={bgPattern} alt="image-circle" />
            </ul>
        </div>
        
        <FaShoppingCart className='icon-cart'/>
    </nav>
  )
}

export default Navbar;
