import React from "react";
import "./ProjectMain.css";
import projectbg from "../Assets/image.png";
import { Link } from 'react-router-dom';

const ProjectMain = () => { 
  return (
    <div className="mainproject">
      <img className="project-bg" src={projectbg} alt="projectbg" />
      <div className="projects">
        {/* Project 1 */}
        <div className="project-1">
          <img
            className="tryp"
            src="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0="
            alt="project1"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>EaseMyTrip</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">Java, SpringBoot, JSP, JPA</p>
            <div  className="read-more-link">
            <Link to = "/FlightTicketBookingSystem">{" Read More"}  </Link>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-1">
          <img
            src="https://dce0qyjkutl4h.cloudfront.net/wp-content/uploads/2022/05/Facial-Recognition.jpg"
            alt="project2"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>Emotion detection through <br/> Facial Recognition</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">Python, OpenCV, Tensorflow</p>
            <div  className="read-more-link">
            <Link to = "/Emotion-Detector-Through-Facial-Recognition">{" Read More"}  </Link>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-1">
          <img
            src="https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-2-e1615383933700-1024x573.png"
            alt="project3"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>Audio to text Converter</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">Python, PyQt, Speech-to-Text API</p>
            <div  className="read-more-link">
            <Link to = "/AudioToTextConverter">{" Read More"}  </Link>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-1">
          <img
            src="https://unlimited.hamk.fi/wp-content/uploads/2018/12/Pires_Rodrigues_Researching_artikkelikuva_online-3412498_1280.png"
            alt="project4"
          />
          <div className="outerproject"></div>
          <div className="project-content">
            <p>Portfolio</p>
          </div>
          <div className="tech-stack-container">
            <p className="tech-stack-content">React.js, HTML, CSS</p>
            <div  className="read-more-link">
            <Link to = "/MyPortFolio">{" Read More"}  </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
