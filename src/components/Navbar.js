import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/luckscleaningcrew.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand" style={{ fontFamily: "Poppins, sans-serif", fontSize: "25px" }}>
        <li className="navbar-item" style={{ padding: "0px", paddingRight: "20px" }}>
            <Link className="navbar-item" to="/">
            <img
             src={logo}
             alt="Logo"
             style={{ maxHeight: "75px", objectFit: "contain" }}
            />
            </Link>
          </li>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        >
          <li className="navbar-item" style={{ padding: "0px", paddingLeft: "20px" }}>
            <Link className="navbar-item" to="/services">
              Services
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px", paddingLeft: "20px" }}>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px", paddingLeft: "20px" }}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
