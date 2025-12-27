import React from 'react'
import '../index.css'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
         <div className='footer sectionContainer'>
            <div>
    <h1 className="logo whiteLogo">Zenith<span>Dev</span>  </h1>
      <span className='footer-social-links'>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook" aria-hidden="true"></i></a>
    <a href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
      </span> 
            </div>
        <ul className="footerLinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#skills">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
    </div>
    <p className='copyright'>© 2025 <b>ZenithDev</b>. All Rights Reserved. </p>
    <p className='copyright'>Made with passion and clean code.</p>
    </div>
   
  )
}

export default Footer
