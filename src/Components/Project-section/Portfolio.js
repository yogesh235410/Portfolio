import React from "react";
import "./Portfolio.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import portfolio from "../../Assets/Portfolio.png";

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <div className="main-portfolio">
        <div className="portfolio-header">
          <h1>Portfolio</h1>
        </div>
        <div className="portfolio-content">
          <h1> DESCRIPTION: </h1>
          <p>
            
"Welcome to my portfolio! Discover a harmonious blend of creativity, skill, and a solid academic background. Certified expertise validates my commitment to excellence in each project. From concept to execution, explore a showcase of ingenuity and inspiration, incorporating cutting-edge technologies like React.js, HTML, and CSS."
            <Link
              to="https://github.com/yogesh235410/Portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="portfolio-button">
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
          <img className="mainimg-project" me src={portfolio} alt="emotionn" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
