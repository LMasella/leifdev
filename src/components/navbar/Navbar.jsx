import React from 'react';
import { useState } from 'react';
import './navbar.css';
import NavItem from './NavItem';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="nav-menu">
        <NavItem title='About Me' link="#about" />
        <NavItem title='Skills/Technologies' link="#skills" />
        <NavItem title='Projects' link="#projects" />
        <NavItem title='Contact Me' link="#contact" />
      </div>
      <div className="nav-icon">
        {toggleMenu ? 
        <div className="scale-up-center" style={{position: "absolute"}}>
          <span onClick={() => setToggleMenu(!toggleMenu)} className="material-symbols-outlined" style={{position: "absolute", right: "5px", top: "5px"}}>close</span>
          <div style={{position: "absolute", display: "flex", flexDirection: "column", gap: "1rem"}}>
            <a href="#about">About Me</a>
            <a href="#skills">Skills/Technologies</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
        :
        <span onClick={() => setToggleMenu(!toggleMenu)} className="material-symbols-outlined" style={{position: "absolute"}}>menu</span>
        }
      </div>
    </nav>
  )
}

export default Navbar;