import React from 'react';
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className="desktop-navbar">
     <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
