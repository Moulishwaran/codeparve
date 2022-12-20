import React from "react";
import "./navbar.css";
import Logo from "../../images/cat-and-dog-removebg.png";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="heading">
        <h3>ANIMAL SHELTER</h3>
      </div>
      <div className="nav-heading">
        <h4 className="home">Home</h4>
        <h4 className="contact">Contact Us</h4>
      </div>

      <div className="icon">
        <BsLinkedin className="icons" />
        <BsTwitter className="icons" />
        <BsInstagram className="icons" />
      </div>
    </div>
  );
};

export default Navbar;
