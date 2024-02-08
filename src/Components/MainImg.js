import React, { Component } from "react";
import "./MainImg.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowAltCircleDown } from "react-icons/fa";

class MainImg extends Component {
  scrollToForm = () => {
    const sectionId = this.props.scrollTo;
    const formSection = document.getElementById(sectionId);
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className="main-img">
        <div className="bgImage">
          <img src={this.props.imageSrc} alt={this.props.altText} />
        </div>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
          <FaArrowAltCircleDown
            className="Arrow-icon"
            onClick={this.scrollToForm}
            size={40}
          />
        </div>
      </div>
    );
  }
}

export default MainImg;
