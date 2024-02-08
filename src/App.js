import React from 'react';
import {Route,Routes} from 'react-router-dom';
import './index.css';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import About from './Routes/About';
import FlightTicket from './Components/Project-section/FlightTicket';
import Emotion from "./Components/Project-section/Emotion";
import Audio from "./Components/Project-section/Audio";
import Portfolio from "./Components/Project-section/Portfolio";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/Project" element = {<Project />} />
      <Route path = "/Contact" element = {<Contact />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/FlightTicketBookingSystem" element = {<FlightTicket />} />
      <Route path = "/Emotion-Detector-Through-Facial-Recognition" element = {<Emotion />} />
      <Route path = "/AudioToTextConverter" element = {<Audio />} />
      <Route path = "/MyPortFolio" element = {<Portfolio />} />
    </Routes>
    </>
  );
}

export default App;