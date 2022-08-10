import "../styles/navbar.css";
import React, { useEffect, useState } from "react";
import { default as logo } from "../images/OptimalPandaWordPress_PandaWordLogo.svg";
import { default as facebook_icon } from "../images/facebook.svg";
import { default as instagram_icon } from "../images/instagram-icon.png";
import { default as linkedin_icon } from "../images/linkedin.svg";
import {default as menuIcon} from '../images/menu.png';
import useWindowDimensions from "./useWindowDimensions";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar ({ quoteHandler }) {
  const { height, width } = useWindowDimensions();

  return (true) ? ( // basically the size of mobile
    <div id='home' className={"navbar-wrapper"}>
      <div></div>
      <ul className={'links-list'}>
        <li><a href="http://danban451.github.io/portfolio/#home">Home</a></li>
        <li><a href="http://danban451.github.io/portfolio/#projects">Projects</a></li>
        <li><a href="http://danban451.github.io/portfolio/#about">About</a></li>
        <li><a href="http://danban451.github.io/portfolio/#contact">Contact</a></li>
        <li><a href="http://danban451.github.io/portfolio/resume.pdf">Resume</a></li>
      </ul>
      <div className='socials-list'>
        <ul className={'socials-list-inner'}> 
          <a href="https://www.instagram.com/sapphirebuyer451/">
            <img src={instagram_icon} alt="" />   
          </a>
          <a href="https://www.facebook.com/profile.php?id=100072146749775">
            <img src={facebook_icon} alt="" />   
          </a>
          <a href="https://www.instagram.com/optimalexterior/?hl=en">
            <img src={linkedin_icon} alt="" />   
          </a>
        </ul>      
      </div>
    </div>
  ) : (
    <div className="navbar-mobile-wrapper">
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <NavLink className="navbar-brand navbar-logo" to="/" style={{ height: 'auto' }}>
          <img id='logo' src={logo} alt="" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"          
        >
          <img src={menuIcon} alt="" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">          
          <ul className="navbar-nav ms-auto">
                        
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>

            <li className='nav-item active'>
              <NavLink className='nav-link' to='/services'>
                Our Services
              </NavLink>
            </li>            
            
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/about'>
                About
              </NavLink>
            </li>            
           
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/contact'>
                Contact Us
              </NavLink>
            </li>            

          </ul>
        </div>

      </nav>
    </div>
  );
}

export default NavBar;
