import React from 'react'
import '../index.css'
import './contact.css'
import Contact from  '../assets/Contact.png'

const contact = () => {
  return (
    <div className='sectionContainer'>
      <h1 className='heading'>Contact Me</h1>
      <div className="underline"></div>
      <div className="formcontainer">
        <img src={Contact} alt="" className='contact-img'/>
        <form action="#" method="post" className='formWrapper'>
          <h3>Let's work Together!</h3>
          <wbr></wbr>
          <p>Have a project, idea, or opportunity? I’d love to hear from you. <br />
          Send me a message and I’ll respond within 24 hours.</p> <wbr></wbr>
          <div className="form">
            <div className="formBox">
              <label htmlFor="name">Full Name</label>
              <input type="text" placeholder='Name Here...' required id='name' className='input' />
            </div>
            <div className="formBox">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder='email Here...' required id='email' className='input' />
            </div>
            <div className="formBox">
              <label htmlFor="input">Telephone number <i>(optional)</i></label>
              <input type="number" placeholder='Phone No Here...' id='name' className='input' />
            </div>
            <div className="formBox">
              <label htmlFor="subject">Subject</label>
              <input type="text" placeholder='Subject Here...' required id='subject' className='input' />
            </div>
              <div className="formBox">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder='Message Here...' rows={6} required></textarea>
            </div>
            <div className="btns-wrapper">
              <button className='uploadBtn'><i class="bi bi-link" aria-hidden="true"></i> Attachment</button>
              <button className='messageBtn'> <i class="bi bi-paper-plane" aria-hidden="true"></i> Send Message</button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default contact
