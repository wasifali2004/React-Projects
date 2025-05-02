import React from 'react';
import { useState } from 'react';
import logo from '../assets/pizzaLogo.png';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const[check, setlink] = useState(false) 

  function toggle() {
    setlink(!check)
  }
  return (
    <>
      <div className="navbar">
        <div className="leftSide" id={check? "open":"close "}>
          <img src={logo} alt="Pizza Logo" /> 
          <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggle}><FontAwesomeIcon icon={faBars} id="icon" /></button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
