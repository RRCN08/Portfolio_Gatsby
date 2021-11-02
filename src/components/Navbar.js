import { Link } from "gatsby";
import React from "react";
// import { ThemeToggler } from "gatsby-plugin-dark-mode";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  
  return (   
    <nav className="navbar is-transparent is-fixed-top">
      {/* <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div>
            <FontAwesomeIcon
              icon={faMoon}
              onClick={() =>
                theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
              }
            />
          </div>
        )}
      </ThemeToggler> */}

      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
        <h2 className="title is-3">rrc.</h2>
      </Link>
      <Link className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </Link>
      </div>

      <div className="navbar-menu" id="nav-links">
        <div className="navbar-end">
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
