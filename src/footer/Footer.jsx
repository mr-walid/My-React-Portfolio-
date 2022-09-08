import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Mr-Walid_Zn</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/walid.zaidoun.98"> <FaFacebookSquare/> </a>
        <a href="https://www.instagram.com/walidzaidoun/"><FiInstagram/> </a>
        <a href="https://twitter.com/walid_tsukuyomi"> <IoLogoTwitter/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Walid Zaidoun. all rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer
