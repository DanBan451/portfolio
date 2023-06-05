import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Container, Navbar, Nav } from "react-bootstrap";
import classes from "../styles/test.module.css";

export default function Test() {
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
    <Navbar expand="xxl" bg="black" className={classes.wrapper}>
      <Container fluid className={classes.container}>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className={`m-auto`}>
            <Nav.Link
              href="#home"
              onClick={(event) => handleScrollToSection(event, "home")}
              className={`${classes["nav-link"]} ${activeLink === "home" ? classes.active : ""}`}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}