import React from "react";
import ProjectMedia from "./projectmedia";
import { site, projects, mediaUrl } from "../content";

export default function ProjectView({ showProject, handler, project }) {
  const data = projects[project];
  const labels = site.projects;
  if (!data) return null;
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
                  <img src={mediaUrl(labels.checkIcon)} alt="" />
                  <span>{perk}</span>
                </div>
              ))}
            </ul>
            <div>
              {/* Only mount the media while the popup is open so videos don't play in the background */}
              {showProject && <ProjectMedia media={data.media} alt={data.title} />}
              {data.url ? (
                <a href={data.url} target="_blank" rel="noreferrer">
                  {labels.visitLabel}
                </a>
              ) : (
                <a href="#project-private" onClick={(e) => e.preventDefault()}>
                  {labels.privateLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
