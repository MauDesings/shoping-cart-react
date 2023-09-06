import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {RiCloseFill, RiMenuFill} from 'react-icons/ri'
import './navBar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='container nav'>
        <RiMenuFill 
            className='icon'
            onClick={()=> setMenuOpen(!menuOpen)}/>

        <div className={menuOpen ? 'menu-modal opacity' : 'menu-modal'}>
            <ul className={menuOpen ? 'menu-links open' : 'menu-links'}>
                <RiCloseFill 
                    className='icon icon-close' 
                    onClick={()=> setMenuOpen(!menuOpen)} />
                
                <li><NavLink className='link' to='/'>Home</NavLink></li>
                <li><NavLink className='link' to='/product'>Product</NavLink></li>
                <li><NavLink className='link' to='/about'>About</NavLink></li>
                <li><NavLink className='link' to='contact'>Contact</NavLink></li>
            </ul>
        </div>
        
        <FaShoppingCart className='icon-cart'/>
    </nav>
  )
}

export default Navbar;
