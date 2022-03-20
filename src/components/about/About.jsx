import React from "react";
import "./about.css";
import Priya from "../../assests/priya2.jpg";
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Priya} alt="" />
          </div>
        </div>
        <div className="about__content">
          <p>
           My name is Priya Kumari, I'M a Front-End Web Developer. As a Front-End developer I created a lot of website using, HTML,CSS, JavaScript and React. I help to improve the developer
           experience by implementing tools. 
          </p>
          <a href="#contact" className="btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
