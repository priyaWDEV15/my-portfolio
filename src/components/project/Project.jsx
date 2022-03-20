import React from 'react'
import Piano from '../../assests/piano.png'
import Login_Signup from '../../assests/login_signup.png'
import Ping_Pong from '../../assests/ping-pong.png'
import './project.css'
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
              <img src={Piano} alt="" />
          </div>
          <h3>This a piano application using Javascript</h3>
          <div className="project__item-CTA">
          <a href="https://github.com/priyaWDEV15/-Piano--visualizer" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
              <img src={Ping_Pong} alt="" />
          </div>
          <h3>Ping-Pong Using python</h3>
          <div className="project__item-CTA">
          <a href="https://github.com/priyaWDEV15/Ping_Pong" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
              <img src={Login_Signup} alt="" />
          </div>
          <h3>This a validated form using react hook form</h3>
          <div className="project__item-CTA">
          <a href="https://github.com/priyaWDEV15/login_signup" className='btn' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project