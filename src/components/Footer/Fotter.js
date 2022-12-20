import React from "react";
import Animalfooter from "../animalf/Animalfooter";
import GetInTouch from "../GetInTouch/GetInTouch";
import Quick from "../quicksLinks/Quick";
import "./fotter.css";

const Fotter = () => {
  return (
    <div className="fotter">
      <Animalfooter />
      <GetInTouch />
      <Quick />
      <div className="down-right">
        <h3>Copyrights ©2023.Animal Shelter</h3>
        <div className="down-left">
          <p className="privacy">Privacy Policy</p>
          <p className="terms">Terms of Service</p>
          <p className="coolkie">Cookies Settings</p>
        </div>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default Fotter;
