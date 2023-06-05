import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Navbar, Nav, NavLink } from "react-bootstrap";
import classes from "../styles/navbar.module.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" bg="black" className={classes.wrapper}>
      <Container fluid className={classes.container}>
        {/* <Navbar.Brand
          href="#home"
          className={classes.navbarBrand}
        ></Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className={classes.navbarToggle}
        />
        <Navbar.Collapse id="navbar-nav" className={classes.collapse}>
          <div className={classes.space}></div>
          <Nav className={`me-auto mr-0 ${classes.links}`}>
            <Nav.Link
              href="#home"
              onClick={(event) => handleScrollToSection(event, "home")}
              className={`${classes["nav-link"]} ${
                activeLink === "home" ? classes.active : ""
              }`}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={(event) => handleScrollToSection(event, "projects")}
              className={`${classes["nav-link"]} ${
                activeLink === "projects" ? classes.active : ""
              }`}
            >
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </Nav.Link>
            <Nav.Link
              href="#about"
              onClick={(event) => handleScrollToSection(event, "about")}
              className={`${classes["nav-link"]} ${
                activeLink === "about" ? classes.active : ""
              }`}
            >
              <FontAwesomeIcon icon={faAddressCard} /> About
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(event) => handleScrollToSection(event, "contact")}
              className={`${classes["nav-link"]} ${
                activeLink === "contact" ? classes.active : ""
              }`}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Nav.Link>
            <a
              href="http://danban451.github.io/portfolio/resume.pdf"
              className={`${classes["nav-link"]}`}
            >
              Resume
            </a>
          </Nav>
          <Nav className={classes.social}>
            <Nav.Link href="https://www.instagram.com/sapphirebuyer451/">
              <FontAwesomeIcon
                className={`${classes.linkSocial}`}
                size="2x"
                color="white"
                icon={faInstagram}
              />
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/profile.php?id=100072146749775">
              <FontAwesomeIcon
                className={`${classes.linkSocial}`}
                size="2x"
                color="white"
                icon={faFacebook}
              />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/daniel-dobrovolskiy-a37721172/">
              <FontAwesomeIcon
                className={`${classes.linkSocial}`}
                size="2x"
                color="white"
                icon={faLinkedin}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
