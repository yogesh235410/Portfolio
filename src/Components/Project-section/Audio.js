import React from "react";
import "./Audio.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import audio from "../../Assets/audio.jpg";

const Audio = () => {
  return (
    <div>
      <NavBar />
      <div className="main-audio">
        <div className="audio-header">
          <h1>Audio to Text Converter</h1>
        </div>
        <div className="audio-content">
          <h1> DESCRIPTION: </h1>
          <p>
            "Introducing my Python-powered Audio-to-Text Converter project,
            skillfully crafted with PyQt and Speech-to-Text API technologies.
            This innovative tool seamlessly translates spoken words into text,
            combining robust functionality with an intuitive interface. The
            project showcases a harmonious integration of technologies for a
            powerful and user-friendly experience.""
            <Link
              to="https://github.com/Aamit-07/audio-to-text-convertor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="audio-button">
                <span style={{ marginRight: "10px" }}>View on </span>
                <FaGithub 
                  size={30}
                  style={{
                    color: "white",
                  }}
                />
              </button>
            </Link>
          </p>
        </div>
        <div className="image-project">
          <img className="mainimg-project" me src={audio} alt="emotionn" />
        </div>
      </div>
      <Footer />
    </div>
  
  );
};

export default Audio;
