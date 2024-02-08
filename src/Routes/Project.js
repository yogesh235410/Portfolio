import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Aboutmain from "../Components/AboutMain";
import GoToTop from '../Components/GoToTop'
import MainImg from "../Components/MainImg";
import ProjectMain from '../Components/ProjectMain'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <NavBar />
      <MainImg
        heading="My Projects"
        text="Some of My Recent Works"
        imageSrc="https://t4.ftcdn.net/jpg/04/96/44/35/360_F_496443587_rE7ZXJBTL0CZfLtRWYpAAzf0DidaWaQj.jpg"
        altText="contact-img"
        scrollTo="projectsection"
        arrowIcon={FaArrowAltCircleDown} 
      />
      <div id='projectsection'>
        <ProjectMain />
      </div>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default About;
