import React, { useState } from "react";
import "./AboutMain.css";
import myphoto from "../Assets/Diwali.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const AboutMain = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const Resume = () => {
    const resumeUrl = process.env.PUBLIC_URL + "/Yogesh_Rawte_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Yogesh_Rawte_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mainabout">
      <img
        className="aboutbg"
        src="https://st4.depositphotos.com/12985848/19850/i/450/depositphotos_198501094-stock-photo-blue-abstract-smoke-black-background.jpg"
        alt="about"
      />
      <div className="aboutmain-content">
        <div className="about-content">
          <div className="myphoto">
            <img className="mypic" src={myphoto} alt="myphoto" />
          </div>
          <div className="qualification-main">
            <section className="qualification-section">
              {/* <h1 className="section-title">QUALIFICATION</h1> */}
              {/* <span className="personal" >MY PERSONAL JOURNEY</span> */}
              <div className="qualification-container">
                <div className="qualification-tab">
                  <div
                    className={
                      toggleState === 1
                        ? "qualification-button qualification-active button--flex"
                        : "qualification-button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                  >
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      style={{ paddingRight: "10px", fontSize: "25px" }}
                    />
                    EDUCATION
                  </div>
                  <div
                    className={
                      toggleState === 2
                        ? "qualification-button qualification-active button--flex"
                        : "qualification-button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      style={{ paddingRight: "10px", fontSize: "25px" }}
                    />
                    CERTIFICATION
                  </div>
                </div>
                <div
                  className={
                    toggleState === 1
                      ? "qualification-content qualification-content-active"
                      : "qualification-content "
                  }
                >
                  <div>
                    <div className="qualification-data">
                      <div>
                        <h3 className="qualification-title">M.C.A</h3>
                        <span className="qualification-subtitle">VESIT</span>
                        <div className="qualification-calender">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            style={{ paddingRight: "10px", fontSize: "18px" }}
                          />
                          2022-2024
                        </div>
                      </div>
                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </div>
                    <div className="qualification-data">
                      <div>
                        <h3 className="qualification-title">
                          B.sc(Computer Science)
                        </h3>
                        <span className="qualification-subtitle">
                          KC COLLEGE
                        </span>
                        <div className="qualification-calender">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            style={{ paddingRight: "10px", fontSize: "18px" }}
                          />
                          2019-2022
                        </div>
                      </div>
                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </div>
                    <div className="qualification-data">
                      <div>
                        <h3 className="qualification-title">HSC</h3>
                        <span className="qualification-subtitle">
                          PATKAR-VARDE COLLEGE
                        </span>
                        <div className="qualification-calender">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            style={{ paddingRight: "10px", fontSize: "18px" }}
                          />
                          2017-2019
                        </div>
                      </div>
                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    toggleState === 2
                      ? "qualification-content qualification-content-active"
                      : "qualification-content "
                  }
                >
                  {/* Certification data now appears on the other side of the line */}
                  <div>
                    <div className="qualification-data">
                      <div>
                        <h3 className="qualification-title">
                          PYTHON FOR DATA SCIENCE{" "}
                        </h3>
                        <span className="qualification-subtitle">NPTEL</span>
                        <div className="qualification-calender">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            style={{ paddingRight: "10px", fontSize: "18px" }}
                          />
                          Sept 2023-Dec 2023
                        </div>
                      </div>
                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </div>
                    <div className="qualification-data">
                      <div>
                        <h3 className="qualification-title">
                          JOY OF COMPUTING
                        </h3>
                        <span className="qualification-subtitle">NPTEL</span>
                        <div className="qualification-calender">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            style={{ paddingRight: "10px", fontSize: "18px" }}
                          />
                          July 2023-Oct 2023
                        </div>
                      </div>
                      <div>
                        <span className="qualification-rounder"></span>
                        <span className="qualification-line"></span>
                      </div>
                    </div>
                    {/* Add more certification data as needed */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="resume">
        <button className="download-button" onClick={Resume}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default AboutMain;
