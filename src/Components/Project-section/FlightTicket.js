import React from "react";
import "./FlightTicket.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import flight from "../../Assets/flight.png";

const FlightTicket = () => {
  return (
    <div> 
      <NavBar/>
      <div className="main-flight">
        <div className="flight-header">
          <h1>Ease My Trip</h1>
        </div>
        <div className="flight-content">
          <h1> DESCRIPTION: </h1>
          <p>
            EaseMyTrip, a web-based flight ticket booking application developed
            using the JAVA Spring Boot MVC framework. The application enables
            users to search for flights, access flight details, and make online
            bookings, along with an admin section for managing flights and user
            details. Utilized MySQL for flight, booking, and user data
            management.

            {/* GitHub button inside the description box */}
            <Link
              to="https://github.com/yogesh235410/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flight-button">
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
          <img className="mainimg-project" me src={flight} alt='emotionn'/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FlightTicket;
