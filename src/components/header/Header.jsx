import React from "react";
import "./header.css";
import CTA from "./CTA";
import TypicalText from "./TypicalText";
import Priya from "../../assests/priya.jpg";
import SocialMedia from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <SocialMedia />
        <h4>Hello I'm</h4>
        <br />
        <h1>
          <span className="first">Priya</span> Kumari
        </h1>
        <br />
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <TypicalText />
        <div className="me">
          <img src={Priya} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
