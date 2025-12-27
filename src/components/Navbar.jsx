import React, { useState } from 'react'
import './Navbar.css'
import '../index.css'



const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div>
    <div className='navbar container'>
      <h1 className='logo'>Zenith<span>Dev</span></h1>
      <ul className="navlinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className='social-links'>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
      </span>
      <span className="menu" onClick={()=> setOpen(!open)}>
        <i class="bi bi-list" className= {open ? 'bi-list open' : 'bi-list'}></i>
        <i class="bi bi-x" className= {open ? 'bi-x open' : 'bi-x'}></i>
      </span> 
    </div>
    <div className= {open ? 'mobile-navlinks open' : 'mobile-navlinks'}>
         <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className='mobile-social-links'>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
      </span>
      </div>
    </div>
  )
}

export default Navbar
