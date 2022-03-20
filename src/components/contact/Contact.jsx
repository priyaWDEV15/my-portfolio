import React from 'react'
import './contact.css'
import {AiOutlineMail,AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c4yb5ym', 'template_slfs9al', form.current, 'KxOFc1sJNev41yobW')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Drop a Message</h5>
      <h2>Contact Me</h2>
      <div className="container contact__me">
        <div className="contact__options">
          <article className="contact__option">
              <AiOutlineMail className='contact-icon'/>
              <h4>Email</h4>
              <h5>fushieternity40@gmail.com</h5>
              <a href="mailto:fushieternity40@gmail.com" target='_blank' className=''>Send a message</a>
          </article>
          <article className="contact__option">
              <AiOutlineInstagram className='contact-icon'/>
              <h4>Instagram</h4>
              <h5>priya_kumari_1221</h5>
              <a href="https://www.instagram.com/priya_kumari_1221/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
              <AiOutlineWhatsApp className='contact-icon'/>
              <h4>Whatsapp</h4>
              <h5>My whatsaap</h5>
              <a href="https://api.whatsapp.com/send?phone=+918700212118" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* {end of contact option} */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button  className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact