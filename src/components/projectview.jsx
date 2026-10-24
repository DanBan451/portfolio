import React from "react";

import { default as check_icon } from "../images/check-icon.svg";
import ProjectMedia from "./projectmedia";
import json from "../projects.json";

export default function ProjectView({ showProject, handler, project }) {
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
          <div className="company">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <div className="development" style={{ marginTop: "30px" }}>
            <ul>
              {data.perks.map((perk) => (
                <div key={perk}>
                  <img src={check_icon} alt="" />
                  <span>{perk}</span>
                </div>
              ))}
            </ul>
            <div>
              {/* Only mount the media while the popup is open so videos don't play in the background */}
              {showProject && <ProjectMedia media={data.media} alt={data.title} />}
              {data.url ? (
                <a href={data.url} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              ) : (
                <a href="#project-private" onClick={(e) => e.preventDefault()}>
                  Private Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
