// Navbar.js

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [color, setColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>{"<  PortFolio  />"}</h1>
      </Link>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleMenuToggle}>
            {"<  Home  >"}
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={handleMenuToggle}>
            {"<  About  >"}
          </Link>
        </li>
        <li>
          <Link to="/Project" onClick={handleMenuToggle}>
            {"<  Projects  >"}
          </Link>
        </li>
        <li>
          <Link to="/Contact" onClick={handleMenuToggle}>
            {"Let's Connect"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
