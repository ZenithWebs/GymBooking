import React from 'react'
import '../index.css'
import './portfolio.css'
import firstProject from '../assets/portfolio1.png'
import secondProject from '../assets/portfolio2.jpg'
import thirdProject from '../assets/portfolio3.jpg'

const portfolio = () => {
  return (
    <div id='portfolio' className='sectionContainer flexCenter Portfolio'>
      <h1 className='heading'>Recent Jobs</h1>
      <span className="underline"/>
      <p>Here are some of our delivered projects!</p>
      <wbr></wbr>
        <div className="project-wrapper flexCenter">
        <div className="project">
          <img src={firstProject} alt="" />
          <h3 className='projectName'>Personal Portfolio Website</h3>
          <p>React Js/Tailwind Css</p>
        </div>
        <div className="project">
          <img src={secondProject} alt="" />
          <h3 className='projectName'>Business Website</h3>
          <p>Html/Css/Javascript</p>
        </div>
        <div className="project">
          <img src={thirdProject} alt="" />
          <h3 className='projectName'>Landing Page</h3>
          <p>Html/Css</p>
        </div>

        </div>
      <div className="reviews container">
        <div className="review-wrapper">
            <h3>24+</h3>
            <p>Happy client</p>
        </div>
        <div className="review-wrapper">
            <h3>30+</h3>
            <p>Delivered Jobs</p>
        </div>
        <div className="review-wrapper">
            <h3>12+</h3>
            <p>Returning Client</p>
        </div>
        <div className="review-wrapper">
            <h3>36+</h3>
            <p>Order in Queue</p>
        </div>
      </div>
    </div>
  )
}

export default portfolio
