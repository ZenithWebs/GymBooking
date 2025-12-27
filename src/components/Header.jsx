import React from 'react'
import './Header.css'
import '../index.css'
import hero from '../assets/hero.png'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div>
        <Navbar/>
    <div id='home' className='banner sectionContainer flexCenter '>
        <div className="banner-details">
            <h1 className='heading'>Crafting Modern, Fast & Beautiful Web Experiences</h1>
            <h3 className='sub-heading'>I build responsive, scalable websites and applications that turn ideas into powerful digital products.</h3>
            <p className='note'>Available for freelance, remote, and contract projects worldwide.</p>
            <div className='container'>
                <button className="btn">Hire Me</button>
                <button className='button'>View My Work</button>
            </div>
        </div>
      <img src={hero} alt="" className='hero-img'/>
      
    </div>
    </div>
    
  )
}

export default Header
