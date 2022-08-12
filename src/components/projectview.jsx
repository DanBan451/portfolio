import React from "react";
import { default as check_icon } from "../images/check-icon.svg";
import { default as optimal_exterior_gif } from "../images/optimal-exterior.gif";
import { default as tetris_gif } from "../images/tetris.gif";
import { default as asteroids_gif } from "../images/asteroids.gif";
import { default as moviedatabase_gif } from "../images/moviedatabase.gif";
import json from "../projects.json";

export default function ProjectView({ showProject, handler, project }) {
  let images = [optimal_exterior_gif, tetris_gif, asteroids_gif, moviedatabase_gif];
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
          <div className='development'>    
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
