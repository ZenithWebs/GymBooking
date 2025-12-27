import React from 'react'
import '../index.css'
import './About.css'
import HeroPortrait from '../assets/hero-portrait.png'

const About = () => {
  return (
    <div id='about' className='sectionContainer flexCenter about-us'>
      <div className="about-text">
        <h1 className='heading'>About Me</h1>
        <span className="underline"/>
        <p className='about'>Hi, I’m Onakomaya Israel, a passionate Web Developer specializing in modern, user-centered websites. I blend creativity with clean code to build seamless digital experiences that load fast, feel intuitive, and scale effortlessly.</p>
        <p className='about'>With a strong focus on front-end development and UI/UX principles, I’ve helped businesses, brands, and entrepreneurs bring their ideas to life online. I’m always learning, adapting, and pushing the limits of what’s possible in the web space.</p>
        <ul className='list'>
            <li><i class="bi bi-check-circle" aria-hidden="true"></i> 3+ years of professional experience</li>
            <li><i class="bi bi-check-circle" aria-hidden="true"></i> Strong eye for design and user experience</li>
            <li><i class="bi bi-check-circle" aria-hidden="true"></i> Dedicated to clean code, performance, and responsive design</li>
            <li><i class="bi bi-check-circle" aria-hidden="true"></i> Expertise in Html, Css, JavaScript, React.js</li>
            <li><i class="bi bi-check-circle" aria-hidden="true"></i> Available for freelance, remote, and contract work</li>
        </ul>
         
      </div>
      <div className='circle'/>
      <img src={HeroPortrait} alt="" />
    </div>
  )
}

export default About
