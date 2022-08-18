import React from "react";
import { useState } from "react";
import NavBar from "./navbar";
import { default as portfolio_image } from "../images/portfolio_image.jpg";
import { default as portfolio_image_2 } from "../images/portfolio_image_2.jpeg";
import { default as js_icon } from "../images/js-icon.png";
import { default as css_icon } from "../images/css-icon.png";
import { default as html_icon } from "../images/html-icon.png";
import { default as react_icon } from "../images/react-icon.png";
import { default as react_native_icon } from "../images/react-native-icon.png";
import { default as python_icon } from "../images/python-icon.png";
import { default as vs_code_icon } from "../images/vs-code.png";
import { default as github_icon } from "../images/github-icon.png";
import { default as xcode_icon } from "../images/xcode-icon.png";
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
    target.classlist.add("project-hover");
  };

  return (
    <React.Fragment>
      <ProjectView showProject={showQuote} project={project} handler={handleProjectExit} />
      <NavBar />
      <div className="header">
        <img src={portfolio_image} alt="" />
        <div className="content">
          <div>
            <span>DANIEL DOBROVOLS</span>
          </div>
          <span>KIY</span>
          <div className="content-inner">
            <h4>Developer</h4>
            <h4>Javascript & React</h4>
            <div className="links">
              <a
                href="http://danban451.github.io/portfolio/resume.pdf"
                download
              >
                Download Resume
              </a>
              <a href="/portfolio/#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid-inner">
          <div className="title">
            <span>Skills</span>
          </div>
          <div className="skill">
            <img src={js_icon} alt="" />
            <span>JAVASCRIPT</span>
            <span>Creation of dynamic and interactive web content</span>
          </div>
          <div className="skill">
            <img src={css_icon} alt="" />
            <span>CSS</span>
            <span>Add a touch of style and beauty</span>
          </div>
          <div className="skill">
            <img src={html_icon} alt="" />
            <span>HTML</span>
            <span>Add a touch of structure and order</span>
          </div>
          <div className="skill">
            <img src={react_native_icon} alt="" />
            <span>REACT JS</span>
            <span>
              Traverse the DOM and combine components into masterpeices
            </span>
          </div>
          <div className="skill">
            <img src={react_native_icon} alt="" />
            <span>REACT NATIVE</span>
            <span>Building apps on multiple platforms</span>
          </div>
          <div className="skill">
            <img src={python_icon} alt="" />
            <span>PYTHON</span>
            <span>
              Build websites and software, automate tasks, and conduct data
              analysis
            </span>
          </div>
          <div className="title programs-title">
            <span>Programs</span>
          </div>
          <div className="program">
            <img src={vs_code_icon} alt="" />
            <span>Visual Studio Code</span>
          </div>
          <div className="program">
            <img src={github_icon} alt="" />
            <span>Github</span>
          </div>
          <div className="program">
            <img src={xcode_icon} alt="" />
            <span>XCode</span>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        <div className="title">
          <span>Projects</span>
        </div>
        <div className="projects-inner">
          <div className="project" onMouseOver={(e) => handleProjectHover(e)}>
            <img src={optimal_exterior_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(0);
              }}
              className="project-content"
            >
              <h2>Optimal Exterior</h2>
            </a>
          </div>
          <div className="project" onMouseOver={(e) => handleProjectHover(e)}>
            <img src={tetris_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(1);
              }}
              className="project-content"
            >
              <h2>Tetris</h2>
            </a>
          </div>
          <div className="project" onMouseOver={(e) => handleProjectHover(e)}>
            <img src={asteroids_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(2);
              }}
              className="project-content"
            >
              <h2>Asteroids</h2>
            </a>
          </div>
          <div className="project">
            <img src={visualizer_gif} alt="" />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleProjecteOpen(3);
              }}
              className="project-content"
            >
              <h2>DijkstraVisualizer</h2>
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="about">
        <div className="title">
          <span>About</span>
        </div>
        <div className="about-inner">
          <img src={portfolio_image_2} alt="" />
          <div>
            <h1>About Me </h1>
            <p>
              Being very passionate about my work, I value education and
              knowledge above all else. The training of the mind to think, as
              Einstein best said, is the lifelong journey that I have embarked
              upon. In all aspects of my life, I find ways to make things
              meaningful and fun. The worst thing I could possibly imagine is to
              live life being passive and inactive — letting that clock tick as
              your numbers on this planet slowly run out. I am a person who
              wants to know the truth and uncover the secrets of the universe; a
              person who wants to peek into the clock-work of reality and walk
              in goodness and discipline. The very core of my beliefs lie in
              pursuing excellence above all else — in fighting weakness and
              building character. I truly believe that every single person has
              potential to become great if only they put in the work and time. I
              am not a believer in being a jack-of-all-trades — a person who is
              good at many things. I hold that mastery (becoming the 1% in what
              you do) is far more rewarding and meaningful.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="contact">
        <div className="title">
          <span>Contact me</span>
        </div>
        <span>
          I'm always open to discuss your project and talk about new things.
        </span>
        <div className="contact-methods">
          <img src={phone_icon} alt="" />
          <span>(907) 687-7403</span>
        </div>
        <div className="contact-methods">
          <img src={email_icon} alt="" />
          <span>Danieldob200@gmail.com</span>
        </div>
        <span>Follow me</span>
        <ul className="socials">
          <a href="https://www.facebook.com/profile.php?id=100072146749775">
            <img src={facebook_icon} alt="" />
          </a>
          <a href="https://www.instagram.com/sapphirebuyer451/">
            <img src={instagram_icon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-dobrovolskiy-a37721172/">
            <img src={linkedin_icon} alt="" />
          </a>
        </ul>
      </div>
      <div className="footer">
        <a href="/portfolio/#home">
          <img src={scroll_up_icon} alt="" />
        </a>
        <span>Copyright @ 2022. All Rights Reserved.</span>
      </div>
    </React.Fragment>
  );
}
