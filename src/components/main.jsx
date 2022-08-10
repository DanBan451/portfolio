import React from "react";
import NavBar from "./navbar";
import { default as portfolio_image } from "../images/me.jpeg";
import { default as portfolio_image_2 } from "../images/portfolio-image-2.jpeg";
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
import { default as moviedatabase_gif } from "../images/moviedatabase.gif";

import { default as phone_icon } from "../images/phone.png";
import { default as email_icon } from "../images/mail.png";
import { default as facebook_icon } from "../images/facebook.png";
import { default as instagram_icon } from "../images/instagram.png";
import { default as linkedin_icon } from "../images/linkedin.png";

import { default as scroll_up_icon } from "../images/scroll-up-icon.png";

export default function Main() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="header">
        <img src={portfolio_image} alt="" />
        <div className="content">
          <span>DANIEL DOBROVOLS</span>
          <span>KIY</span>
          <div className="content-inner">
            <h4>Frontend Developer</h4>
            <h4>React & React Native & Python</h4>
            <div className="links">
              <a href="resume.pdf" download>Download Resume</a>
              <a href="/#contact">Contact Me</a>
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
        <div className='projects-inner'>
          <div className="project">
            <h3>Optimal Exterior</h3>
            <img src={optimal_exterior_gif} alt="" />
            {/* <h3>Optimal Exterior</h3>
            <span>Collaborated with a designer in rebuilding a website for a local business.</span> */}
          </div>
          <div className="project">
          <h3>Tetris</h3>
            <img src={tetris_gif} alt="" />
            {/* <h3>Tetris</h3>
            <span>Rebuilt a classic arcade game from scratch using vanilla javascript. </span> */}
          </div>
          <div className="project">
            {/* <h3>Asteroids</h3>
            <span>Rebuilt a classic arcade game from scratch using c# and xaml</span> */}
            <h3>Asteroids</h3>
            <img src={asteroids_gif} alt="" />
          </div>
          <div className="project private">
            {/* <h3>Movie Database</h3>
            <span>Built a dummy movie database using react and components</span> */}
            <h3>Movie Database</h3>
            <img src={moviedatabase_gif} alt="" />
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
              Education is what I am aiming for in life. A career is not just
              something I want as for a job, it’s a part of my life, it’s not
              even a piece of my life, education is my whole life. I cannot see
              my life, without education! I cannot see my life without pursuing
              wisdom. Without uncovering the secrets to the universe, the
              secrets to being. I cannot see myself in the future without
              continuously uncovering, peaking into, the clock-work of reality.
              I’m hungry for wisdom! I want wisdom above all else! And I am one
              hell of a competitive person, and I cannot see myself in the
              future without climbing the hierarchy’s of this world. To me, I
              would much rather become somebody of value, somebody who knows
              things, rather than somebody who is just doing construction. I’m
              not pursuing college, a career, for the sake of money! Sure, I
              believe that will come as a result. But, it is only an outcome of
              the journey of becoming great! It is only the outcome of the
              journey to becoming a man of value! I am not a small picture
              thinker, far from it! I want to aim at the stars (knowing well
              that obtaining wisdom is conservative), I want to become the best
              in my field, aiming at becoming a world-class Software Engineer.
              Although, the reason is because I want to learn. Heres my
              philosophy in life, becoming a master in one field, automatically
              transfers knowledge to another field. I see the world of career as
              a tall tower. The towers signify people of value, and a pursuing a
              career is the journey to building your tower. The way to reach the
              highest point, is to focus on one tower! And by focusing on one,
              and becoming the master at that one, you will be in the clouds of
              understanding.
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
        <a href="/#home">
          <img src={scroll_up_icon} alt="" />
        </a>
        <span>Copyright @ 2022. All Rights Reserved.</span>
      </div>
    </React.Fragment>
  );
}
