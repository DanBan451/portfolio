import React from "react";
import { default as companyLogo } from "../images/OptimalPandaWordPress_PandaWordLogo.svg";
import { default as facebookIcon } from "../images/icons8-facebook-f.svg";
import { default as instagramIcon } from "../images/instagram-icon.png";
import useWindowDimensions from "./useWindowDimensions";

import "../styles/footer.css";

export default function Footer({ quoteHandler }) {
  const { height, width } = useWindowDimensions();

  return (
    <div className="footer">
      <div className="footer-navigation">
        <div className={"navbar-wrapper"}>
          <div className="navbar-logo">
            <a href="/">
              <img src={companyLogo} alt="" />
            </a>
          </div>
          {width > 600 ? (
            <React.Fragment>
              <ul className={"links-list"}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/services">Our Services</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
              <ul className={"socials-list"}>
                <a href="https://www.facebook.com/optimalexterior/">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="https://www.instagram.com/optimalexterior/?hl=en">
                  <img src={instagramIcon} alt="" />
                </a>
              </ul>
            </React.Fragment>
          ) : (
            <div className='footer-links-mobile'>
              <h6>QUICK LINKS</h6>
              <h6>FOLLOW US</h6>
              <ul className={"links-list"}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/services">Our Services</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => {e.preventDefault(); quoteHandler();}}>Get A Quote</a>
                </li>
              </ul>
              <ul className={"socials-list"}>
                <a href="https://www.facebook.com/optimalexterior/">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="https://www.instagram.com/optimalexterior/?hl=en">
                  <img src={instagramIcon} alt="" />
                </a>
              </ul>
            </div>      
          )}
        </div>
      </div>

      <div className="footer-copyright">
        <span>
          Copyright © 2022 <span>Optimal Exterior</span>
        </span>
      </div>
    </div>
  );
}
