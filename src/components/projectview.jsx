import React from "react";

import { default as check_icon } from "../images/check-icon.svg";

import { default as fantum_gif } from "../images/fantum.gif";
import { default as unitedhomes_gif } from "../images/unitedhomes.gif";
import { default as rcheban_gif } from "../images/rcheban.gif";
import { default as skycity_gif } from "../images/skycity.gif";
import { default as optimal_exterior_gif } from "../images/optimal-exterior.gif";
import { default as tetris_gif } from "../images/tetris.gif";
import { default as asteroids_gif } from "../images/asteroids.gif";
import { default as visualizer_gif } from "../images/visualizer.gif";
import json from "../projects.json";

import classes from "../styles/main.module.css";

export default function ProjectView({ showProject, handler, project }) {
  let images = [fantum_gif, unitedhomes_gif, rcheban_gif, skycity_gif, optimal_exterior_gif, tetris_gif, asteroids_gif, visualizer_gif];
  let data = json[project];
  return (
    <div
      className={`project-view ${
        showProject ? "project-view-visible" : "project-view-hidden"
      }`}
    >
       <div className="project-view-inner">
        <button className="exit-btn" onClick={() => handler()}>
          X
        </button>
        <div className="content">                               
          <div className='company'>
            <h1>{data.title}</h1>      
            <p>
            {data.description}
            </p>
          </div>  
          <div className='development' style={{ marginTop: '30px' }}>    
            <ul>
              <div>
                <img src={check_icon} alt="" />
                <span>{data.perks[0]}</span>
              </div>
              <div>
                <img src={check_icon} alt="" />
                <span>{data.perks[1]}</span>
              </div>
              <div>
                <img src={check_icon} alt="" />
                <span>{data.perks[2]}</span>
              </div>        
            </ul>        
            <div>
              <img src={images[project]} alt="" />              
              <a href={data.url}>Visit Project</a>
            </div>
          </div>
            
        </div>        
      </div>
    </div>
  );
}
