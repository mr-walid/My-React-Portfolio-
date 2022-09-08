import React from 'react'
import './About.css'
import Me from '../../assets/me1.png'
import {FaAward, FaUsers} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-image">
            <img src={Me} alt="about Me" />
           </div>  
        </div>

        <div className="about_content">
           <div className="about_cards">
            <article className="about_card">
            <FaAward className='about_icon'/>
              <h5>Experience</h5>
              +3 years working 
            </article>
            <article className="about_card">
            <FaUsers  className='about_icon' />
              <h5>Clients</h5>
              +300 Clients world wide
            </article>
            <article className="about_card">
            <AiOutlineFundProjectionScreen className='about_icon' />
              <h5>Projects</h5>
              +80 Complited Projects
            </article>
           </div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis quas amet ullam dolorem, ratione commodi aperiam cupiditate. Ullam, fuga commodi optio reiciendis quas accusantium totam officiis explicabo quisquam quibusdam?</p>
             <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
      </div>

    </section>
  )
}

export default About
