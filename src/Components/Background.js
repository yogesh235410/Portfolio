import "./Background.css";
import React, { useState } from "react";
import bg from "../Assets/Website_bg.jpg";
import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";

const Background = () => {
  return (
    <div className="mainBg">
      <div className="mask">
        <img className="landingBg" src={bg} alt="bg"></img>
      </div>
      <div className="content">
        <h1>Hi, I am yogesh Rawte.</h1>
        <p>
          Welcome to my Portfolio! <br /> I am a versatile developer proficient
          in Java, HTML, CSS, and React.js,
          <br /> crafting dynamic and responsive web applications.
          <br /> With a strong foundation in Data Structures and Algorithms.{" "}
          <br />
          Explore my diverse skill set!
        </p>
        <div className="myworks-container">
          <div className="myworks">
            <Link to="/Project" class="glitch" data-glitch="See My Works!!">
              See My Works!!
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Background;
