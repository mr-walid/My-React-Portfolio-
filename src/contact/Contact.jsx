import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();   

    emailjs.sendForm('service_dktpb9z', 'template_luzn3ig', form.current, 'hrNIERTLB0-xtcgFe')
     e.target.reset()
  };
  return (
    <section id='contact'>
       <h5>Get in touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
             <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>walid1997zaidoun@gmail.com</h5>
            <a href="mailto:walid1997zaidoun@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
             <FaFacebookMessenger  className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>walidzaidoun</h5>
            <a href="https://www.facebook.com/walid.zaidoun.98" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
             <BsWhatsapp  className='contact_option-icon'/>
            <h4>Whats app</h4>
            <h5>+212634198690</h5>
            <a href="https://api.whatsapp.com/send?phone=+212634198690" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact
