import React, { useState } from 'react';
import './NavBar.css';

function NavBar () {
//const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='NavBar'>
            <span className='nav-logo'>Burguer Boom</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href='/home'>Home</a>
                <a href='/about'>About</a>
                <a href='/product'>Product</a>
                <a href='/contact'>Contact</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} 
            onClick={() => setIsOpen(!isOpen)}>
                <div className='bar'></div>
            </div>
        </div>
    )
}

export default NavBar;