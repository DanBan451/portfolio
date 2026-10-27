import React from "react";
import { site, mediaUrl } from "../content";
import classes from "../styles/site.module.css";

export default function About() {
  const { about } = site;
  return (
    <section id="about" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.sectionHead}>
          <h2 className={classes.sectionTitle}>{about.title}</h2>
        </div>

        <div className={classes.aboutGrid}>
          <div className={classes.aboutPhotoWrap}>
            <img src={mediaUrl(about.photo)} alt="" className={classes.aboutPhoto} />
          </div>
          <div className={classes.aboutText}>
            <h3 className={classes.aboutHeading}>{about.heading}</h3>
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>

        {about.timeline?.length > 0 && (
          <div className={classes.timelineWrap}>
            <h3 className={classes.groupTitle}>{about.timelineTitle}</h3>
            <ol className={classes.timeline}>
              {about.timeline.map((entry) => (
                <li key={entry.year}>
                  <span className={`${classes.mono} ${classes.timelineYear}`}>{entry.year}</span>
                  <span className={classes.timelineText}>{entry.text}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
