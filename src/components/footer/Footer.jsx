import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import{FaInstagramSquare} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import {ImGithub} from 'react-icons/im'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>PRIYA</a>
      <ul className='top-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/priya-kumari-4057211a7/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/priya_kumari_1221/"><FaInstagramSquare/></a>
        <a href="mailto:fushieternity40@gmail.com"><SiGmail/></a>
        <a href="https://github.com/priyaWDEV15"><ImGithub/></a>
      </div>
    </footer>
  )
}

export default Footer