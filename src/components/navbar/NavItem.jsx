import React from 'react';
import './navbar.css';

const NavItem = ({title, link}) => {
    const addColor = e => {
        const newStyle = e.currentTarget.style;
        newStyle.background = "linear-gradient("+ Math.floor(Math.random() * 181) + "deg, rgb("+ Math.floor(Math.random() * 155 + 100) + "," + Math.floor(Math.random() * 155 + 100) + "," + Math.floor(Math.random() * 155 + 100) + ") " + Math.floor(Math.random() * 50) + "%, rgb("+ Math.floor(Math.random() * 205 + 50) + "," + Math.floor(Math.random() * 205 + 50) + "," + Math.floor(Math.random() * 205 + 50) + ") " + Math.floor(Math.random() * 50 + 50) + "%)";
        newStyle.backgroundClip = "text";
        newStyle.webkitBackgroundClip = "text";
        newStyle.webkitTextFillColor = "transparent";
        newStyle.fontWeight = "800";
    }

    const removeColor = e => {
        const newStyle = e.currentTarget.style;
        newStyle.background = "";
        newStyle.backgroundClip = "";
        newStyle.webkitBackgroundClip = "";
        newStyle.webkitTextFillColor = "";
        newStyle.fontWeight = "normal";
    }

  return (
    <p onMouseEnter={addColor} onMouseLeave={removeColor}>
        <a href={link}>{title}</a>
    </p>
  )
}

export default NavItem;