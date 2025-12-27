import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import About from './components/About.jsx'
import Portfolio from './components/portfolio.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <Footer/>
  </StrictMode>,
)
