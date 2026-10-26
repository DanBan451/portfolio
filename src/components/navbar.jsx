import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Navbar, Nav } from "react-bootstrap";
import classes from "../styles/navbar.module.css";
import { site, publicUrl, scrollToSection } from "../content";
import { iconFor } from "./icons";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const { nav, hero, socials } = site;

  const handleScrollToSection = (event, sectionId) => {
    setActiveLink(sectionId);
    scrollToSection(event, sectionId);
  };

  return (
    <Navbar expand="lg" bg="black" className={classes.wrapper}>
      <Container fluid className={classes.container}>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className={classes.navbarToggle}
        />
        <Navbar.Collapse id="navbar-nav" className={classes.collapse}>
          <div className={classes.space}></div>
          <Nav className={`me-auto mr-0 ${classes.links}`}>
            {nav.links.map((link) => (
              <Nav.Link
                key={link.section}
                href={`#${link.section}`}
                onClick={(event) => handleScrollToSection(event, link.section)}
                className={`${classes["nav-link"]} ${
                  activeLink === link.section ? classes.active : ""
                }`}
              >
                <FontAwesomeIcon icon={iconFor(link.icon)} /> {link.label}
              </Nav.Link>
            ))}
            <a
              href={publicUrl(hero.resumeFile)}
              className={`${classes["nav-link"]}`}
            >
              {nav.resumeLabel}
            </a>
          </Nav>
          <Nav className={classes.social}>
            {socials.map((s) => (
              <Nav.Link key={s.name} href={s.url} aria-label={s.name}>
                <FontAwesomeIcon
                  className={`${classes.linkSocial}`}
                  size="2x"
                  color="white"
                  icon={iconFor(s.icon)}
                />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
