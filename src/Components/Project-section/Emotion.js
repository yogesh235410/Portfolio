import React from "react";
import "./Emotion.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import emotion from "../../Assets/Emotionimage.jpg";

const Emotion = () => {
  return (
    <div>
      <NavBar />
      <div className="main-emotion">
        
        <div className="emotion-header">
          <h1>Emotion detection through Facial Recognition</h1>
        </div>
        <div className="emotion-content">
          <h1> DESCRIPTION: </h1>
          <p>
            Emotion Detection through Facial Recognition integrates OpenCV and
            TensorFlow.System captures webcam video, deploys a Haar cascade
            classifier for face detection, and labels recognized faces with
            emotions. The 'network Labels.h5' model categorizes expressions
            (Surprise, Neutral, Anger, Happy, Sad), providing a concise and
            efficient real-time emotion recognition solution.
            <Link
              to="https://github.com/yogesh235410/Emotion-detection-facial-recognition/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="emotion-button">
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
          <img className="mainimg-project" src={emotion} alt='emotion'/>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Emotion;
