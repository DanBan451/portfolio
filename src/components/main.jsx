import React from "react";
import { useState } from "react";
import NavBar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { default as me } from "../images/me4.jpeg";
import { default as me2 } from "../images/me3.jpg";

import { default as portfolio_image } from "../images/portfolio_image.jpg";
import { default as portfolio_image_2 } from "../images/portfolio_image_2.jpeg";

import { default as redux_icon } from "../images/redux.png";
import { default as react_native_icon } from "../images/react-native-icon.png";

import { default as spring_icon } from "../images/leaf.png";
import { default as jules_icon } from "../images/jules.png";
import { default as scrum_icon } from "../images/scrum.png";

import { default as python_icon } from "../images/python-icon.png";
import { default as vs_code_icon } from "../images/vs-code.png";
import { default as github_icon } from "../images/github-icon.png";
import { default as xcode_icon } from "../images/xcode-icon.png";

import { default as fantum_gif } from "../images/fantum.gif";
import { default as unitedhomes_gif } from "../images/unitedhomes.gif";
import { default as rcheban_gif } from "../images/rcheban.gif";
import { default as skycity_gif } from "../images/skycity.gif";
import { default as optimal_exterior_gif } from "../images/optimal-exterior.gif";
import { default as tetris_gif } from "../images/tetris.gif";
import { default as asteroids_gif } from "../images/asteroids.gif";
import { default as visualizer_gif } from "../images/visualizer.gif";

import { default as phone_icon } from "../images/phone.svg";
import { default as email_icon } from "../images/email.svg";
import { default as facebook_icon } from "../images/facebook.svg";
import { default as instagram_icon } from "../images/instagram-icon.png";
import { default as linkedin_icon } from "../images/linkedin.svg";
import { default as scroll_up_icon } from "../images/scroll-up.png";

import ProjectView from "./projectview";

import classes from "../styles/main.module.css";

export default function Main() {
  const [showQuote, setShowQuote] = useState(false);
  const [project, setProject] = useState(0);

  const handleProjecteOpen = (num) => {
    console.log("quote open");
    setProject(num);
    setShowQuote(true);
  };
  const handleProjectExit = () => {
    console.log("quote close");
    setShowQuote(false);
  };

  const handleProjectHover = ({ target }) => {
    target.classList.add(classes["project-hover"]);
  };

  return (
    <div className={classes.mainWrapper}>
      <ProjectView
        showProject={showQuote}
        project={project}
        handler={handleProjectExit}
      />
      {/* <Test /> */}
      <NavBar />

      <div className={`${classes.header}`}>
        <div className={classes["header-content"]}>
          <span className={classes.name}>
            DANIEL <br />
            DOBROVOLS
          </span>
          <span className={classes["name-sub"]}>KIY</span>

          <div className={classes.descWrapper}>
            <div className={classes.desc}>
              <h4>Developer</h4>
              <h4>Javascript & Java</h4>
            </div>

            <div className={classes.links}>
              <a
                href="http://danban451.github.io/portfolio/resume.pdf"
                download
              >
                Download Resume
              </a>
              <a href="/portfolio/#contact">Contact Me</a>
            </div>
          </div>
          <div className={classes.space}></div>
        </div>

        <img src={me} alt="" className={classes["header-image"]} />
      </div>

      <div className={classes.grid}>
        <div className={classes["grid-inner"]}>
          <div className={classes.title}>
            <span>Skills</span>
          </div>
          <div className={classes.skill}>
            <img src={react_native_icon} alt="" />
            <span>REACT JS</span>
            <span>
              Traverse the DOM and combine components into masterpeices
            </span>
          </div>
          <div className={classes.skill}>
            <img src={react_native_icon} alt="" />
            <span>REACT NATIVE</span>
            <span>Building apps on multiple platforms</span>
          </div>
          <div className={classes.skill}>
            <img src={redux_icon} alt="" />
            <span>REDUX</span>
            <span>
              JavaScript library for managing and centralizing application state
            </span>
          </div>
          <div className={classes.skill}>
            <img src={spring_icon} alt="" />
            <span>SPRING</span>
            <span>
              Application framework and inversion of control container for the
              Java platform
            </span>
          </div>
          <div className={classes.skill}>
            <img src={jules_icon} alt="" />
            <span>JULES</span>
            <span>
              Automate components related to building, testing, and deploying,
              facilitating continuous integration and continuous delivery
            </span>
          </div>
          <div className={classes.skill}>
            <img src={scrum_icon} alt="" />
            <span>SCRUM & JIRA's</span>
            <span>
              Proficient in utilizing the Scrum framework for effective project
              management, with significant experience in its application in
              software development
            </span>
          </div>
          <div className={`${classes.title} ${classes["programs-title"]}`}>
            <span>Programs</span>
          </div>
          <div className={classes.program}>
            <img src={vs_code_icon} alt="" />
            <span>Visual Studio Code</span>
          </div>
          <div className={classes.program}>
            <img src={github_icon} alt="" />
            <span>Github</span>
          </div>
          <div className={classes.program}>
            <img src={xcode_icon} alt="" />
            <span>XCode</span>
          </div>
        </div>
      </div>
      <div id="projects" className={classes.projects}>
        <div className={classes.title}>
          <span>Projects</span>
        </div>
        <div className={classes["projects-inner"]}>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={fantum_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(0);
              }}
              className={classes["project-content"]}
            >
              <h2>Fantum</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={unitedhomes_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(1);
              }}
              className={classes["project-content"]}
            >
              <h2>United Homes</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={rcheban_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(2);
              }}
              className={classes["project-content"]}
            >
              <h2>RCheban Towing</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={skycity_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(3);
              }}
              className={classes["project-content"]}
            >
              <h2>SkyCity Trucking</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={optimal_exterior_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(4);
              }}
              className={classes["project-content"]}
            >
              <h2>Optimal Exterior</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={tetris_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(5);
              }}
              className={classes["project-content"]}
            >
              <h2>Tetris</h2>
            </a>
          </div>
          <div
            className={classes.project}
            onMouseOver={(e) => handleProjectHover(e)}
          >
            <img src={asteroids_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(6);
              }}
              className={classes["project-content"]}
            >
              <h2>Asteroids</h2>
            </a>
          </div>
          <div className={classes.project}>
            <img src={visualizer_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(7);
              }}
              className={classes["project-content"]}
            >
              <h2>DijkstraVisualizer</h2>
            </a>
          </div>
        </div>
      </div>
      <div id="about" className={classes.about}>
        <div className={classes.title}>
          <span>About</span>
        </div>
        <div className={classes["about-inner"]}>
          <img src={me2} alt="" />
          <div>
            <h1>About Me </h1>
            <p>
              I possess a strong passion for my work, and prioritize the
              acquisition of education and knowledge above all other endeavors.
              I embrace the sentiment expressed by Einstein that the cultivation
              of a sharp and agile mind is an unceasing and enduring journey. In
              all aspects of my life, I strive to imbue my endeavors with
              meaning and purpose, eschewing the passive and lackadaisical
              approach to existence. My pursuits are firmly rooted in a desire
              to unveil the mysteries of the universe and unravel the
              intricacies of reality. However, I am equally driven by a
              deep-seated commitment to building my character and achieving
              excellence in all that I do. I firmly believe that every
              individual has the potential for greatness, given sufficient
              effort and dedication. I hold that the pursuit of mastery, the
              attainment of the highest level of proficiency in one's chosen
              field, is the most rewarding and meaningful approach to one's work
              and life.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className={classes.contact}>
        <div className={classes.title}>
          <span>Contact me</span>
        </div>
        <span>
          I'm always open to discuss your project and talk about new things.
        </span>
        <div className={classes["contact-methods"]}>
          <FontAwesomeIcon icon={faPhone} />
          <span>(907) 687-7403</span>
        </div>
        <div className={classes["contact-methods"]}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Danieldob200@gmail.com</span>
        </div>
        <span>Follow me</span>
        <ul className={classes.socials}>
          <a href="https://www.facebook.com/profile.php?id=100072146749775">
            <FontAwesomeIcon size={"2x"} icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/sapphirebuyer451/">
            <FontAwesomeIcon size={"2x"} icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/daniel-dobrovolskiy-a37721172/">
            <FontAwesomeIcon size={"2x"} icon={faLinkedin} />
          </a>
        </ul>
      </div>
      <div className={classes.footer}>
        <a href="/portfolio/#home">
          <img src={scroll_up_icon} alt="" />
        </a>
        <span>Copyright @ 2022. All Rights Reserved.</span>
      </div>
    </div>
  );
}
