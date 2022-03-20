import React from "react";
import "./experience.css";
import skills from "../../assests/skills.png";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>Tailwind CSS</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>Node Js</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <h4>My SQL</h4>
              <small className="text-light">Basic</small>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Professional Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>Communication Skills</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>Project Management</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <h4>Team Work</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <h4>Creativity</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
        <div className="skills__container">
          <div className="skills__container-image">
            <img src={skills} alt="" />
          </div>
        </div>

    </section>
  );
};

export default Experience;
