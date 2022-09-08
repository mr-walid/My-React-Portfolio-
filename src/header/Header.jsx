import React from 'react'
import CTA from './Cta'
import HeaderSocials from './HeaderSocials'
import ME from '../assets/me.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
          <h3>Hello i'm </h3>
          <h1>Walid Zaidoun</h1>
          <h3 className="text-light">Full Stack Developer</h3>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" className=''/>
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
          
      </div>
    </header>
  )
}

export default Header
