import React, { useEffect, useState } from "react";
import Form from "../form/Form";

import "./home.css";

const Home = () => {
  const [show, setShow] = useState(true);

  const handleSubmit = () => {};
  return (
    <div className="home">
      <div className="home-heading-right">
        <h1>Welcome to the Animal Shelter !</h1>
        <div className="home-desc">
          <p>
            Glab that you care for the animals so much.We make sure that
            <br /> you not repent your decision of adopting your favorite pet !!
          </p>
        </div>
        <div className="desc-about">
          <button type="submit" className="adopt" onClick={handleSubmit}>
            Adopt
          </button>

          <button className="what" onClick={handleSubmit}>
            What all pets do we have ?
          </button>
        </div>
      </div>
      <div className="home-lottie-left">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_syqnfe7c.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="whatwe">
        <h2 className="pets">
          What do take in pets if you cant't take care of them !!
        </h2>
        <p>
          <span className="text">
            Filler text is text that shares some characteristics of a real
            written text, but is random or otherwise generated. It may be used
          </span>
          <span className="sample">
            {" "}
            to display asampleFiller text is text that shares some
            characteristics of a real written text, but is random or otherwise
            generated
            <br />
          </span>{" "}
          <span className="filler">
            It may be used to displaya sample Filler text is text that shares
            some characteristics of a real It
          </span>
        </p>

        <button className="give" onClick={handleSubmit}>
          Give Away
        </button>
      </div>

      <div className="right1">
        <div className="player">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_z9ed2jna.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p className="publish">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used graphic design
          <br /> to demonstrate the visual form of a document or a typeface
          without relying on meaningful content. <br />
          Lorem ipsum may be used as a placeholder before final copy is
          available without relying on meaningful <br />
          content without relying on meaningful content without relying on
        </p>
      </div>
    </div>
  );
};

export default Home;
