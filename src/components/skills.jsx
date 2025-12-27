import React from 'react'
import '../index.css'
import './skills.css'
import client1 from '../assets/client-1.png'
import client2 from '../assets/client-2.png'
import client3 from '../assets/client-3.png'
import client4 from '../assets/client-4.png'

const skills = () => {
  return (
    <div id='skills' className='sectionContainer'>
      <h1 className='heading'>Reviews</h1>
      <div className="underline"></div>
      <div className="reviewWrapper">
        <div className="review flexCenter">
            <div className='flexCenter flex-direction'>
             <img src={client1} alt="" />
            <div className='ratings' >
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star" aria-hidden="true"></i>
                </div>   
            </div>
            
            <div className='reviewDetails'>
                <i class="bi bi-quote"></i>
                <h3>CEO, BrightTech Solutions</h3>
                <p>Working with <b>ZenithDev</b>  was a game changer. He delivered our website ahead of schedule and exceeded expectations.</p>
            </div>
        </div>
        <div className="review flexCenter">
             <div className='flexCenter flex-direction'>
             <img src={client2} alt="" />
            <div className='ratings' >
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star" aria-hidden="true"></i>
                </div>   
            </div>
            <div className='reviewDetails'>
                <i class="bi bi-quote"></i>
                <h3>Freelance Design Partner</h3>
                <p>Reliable, skilled, and very easy to work with. Highly recommended!</p>
            </div>
        </div>
        <div className="review flexCenter">
             <div className='flexCenter flex-direction'>
             <img src={client3} alt="" />
            <div className='ratings' >
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star-fill" aria-hidden="true"></i>
                    <i class="bi bi-star" aria-hidden="true"></i>
                </div>   
            </div>
            <div className='reviewDetails'>
                <i class="bi bi-quote"></i>
                <h3>Founder, UrbanWear Store</h3>
                <p>Amazing attention to detail and design. The site looks beautiful and runs flawlessly.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default skills
