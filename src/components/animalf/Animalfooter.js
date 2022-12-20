import React from "react";
import "./animalfooter.css";
import Logo from "../../images/cat-and-dog-removebg.png";
import { BsArrowRight } from "react-icons/bs";

const Animalfooter = () => {
  return (
    <div className="animal">
      <div className="animal-logo">
        <img src={Logo} alt="" />
        <h4>ANIMAL SHELTER</h4>
      </div>
      <p>
        One of the best animal shelter places in india.
        <br />
        We're recognized by the government. Please take
        <br />a pledge to take care of these lovely pets
      </p>
      <button className="button">ADOPT</button>
      <BsArrowRight className="arrow-right" />
    </div>
  );
};

export default Animalfooter;
