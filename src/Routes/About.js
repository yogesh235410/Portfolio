import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Aboutmain from "../Components/AboutMain";
import MainImg from "../Components/MainImg";
import GoToTop from '../Components/GoToTop'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <NavBar />
      <MainImg
        heading="About Me"
        text="My Personal Journey"
        imageSrc="https://img.freepik.com/free-photo/abstract-luxury-black-gradient-with-border-black-vignette-backgr_1258-279.jpg?size=626&ext=jpg"
        altText="contact-img"
        scrollTo="aboutsection"
        arrowIcon={FaArrowAltCircleDown} 
      />
      <div id='aboutsection'>
        <Aboutmain />
      </div>
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default About;
