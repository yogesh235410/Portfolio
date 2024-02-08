import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footer">
        <div className="left">
          <div className="phone">
            <FaPhone
              size={30}
              style={{
                color: "white",
                padding: "15px",
              }}
            />
            <p>+91-8828149289</p>
          </div>
          <div className="email">
            <FaMailBulk
              size={30}
              style={{
                color: "white",
                padding: "15px",
              }}
            />
            <p>shreerawte2001@gmail.com</p>
          </div>
          <div className="location">
            <FaHome
              size={30}
              style={{
                color: "white",
                padding: "15px",
              }}
            />
            <p>Goregaon, Mumbai - 400097</p>
          </div>
        </div>
        <div className="right">
          <div className="tag">
            <p>SOCIAL LINKS </p>
          </div>
          <div className="social">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/yogesh-rawte/">
                <FaLinkedin
                  size={40}
                  style={{
                    color: "white",
                    padding: "15px",
                  }}
                />
              </a>
            </div>
            <div className="githubbF">
              <a href="https://github.com/yogesh235410/">
                <FaGithub
                  size={40}
                  style={{
                    color: "white",
                    padding: "15px",
                  }}
                />
              </a>
            </div>
            <div className="insta">
              <a href="https://www.instagram.com/yogesh_rawte4/">
                <FaInstagram
                  size={40}
                  style={{
                    color: "white",
                    padding: "15px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
