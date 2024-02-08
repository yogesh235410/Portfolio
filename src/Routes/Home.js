import React from "react";
import Navbar from "../Components/NavBar";
import Background from "../Components/Background";
import Footer from "../Components/Footer";
import Skills from "../Components/Skills";
import GoToTop from '../Components/GoToTop'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Skills />
      <GoToTop/>
      <Footer />
    </div>
  );
};

export default Home;
