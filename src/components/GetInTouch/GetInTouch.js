import React from "react";
import "./getintouch.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin, BsTwitter, BsFacebook } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="getIn">
      <div className="location-top">
        <h2>Get In Touch</h2>
        <HiOutlineLocationMarker className="top-icon" />
        <p className="dest">
          llejcach dajd sudhd ajcjc ajdh chc sdjhc
          <br />
          hhcc djhdjdj jzxcjhsv dbc
          <br /> eb bsec dhd-85523
        </p>
        <AiOutlineMail className="gr-mail" />
        <p className="get-mail">Moulish34434@gmail.com</p>
      </div>
      <div className="location-bottom">
        <h3 className="bottom-icon">Follow Us</h3>
        <BsTwitter className="twit-icon" />
        <BsFacebook className="twit-icon" />
        <BsLinkedin className="twit-icon" />
      </div>
    </div>
  );
};

export default GetInTouch;
