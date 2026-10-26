import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "./navbar";
import ProjectView from "./projectview";
import ProjectMedia from "./projectmedia";
import { iconFor } from "./icons";
import {
  site,
  projects,
  mediaUrl,
  publicUrl,
  scrollToSection,
} from "../content";

import classes from "../styles/main.module.css";

/** Renders the surname with its trailing accent (e.g. "KIY") in the accent style. */
function HeroName({ firstName, lastName, lastNameAccent }) {
  const accent =
    lastNameAccent && lastName.endsWith(lastNameAccent) ? lastNameAccent : "";
  const base = accent ? lastName.slice(0, -accent.length) : lastName;
  return (
    <>
      <span className={classes.name}>
        {firstName} <br />
        {base}
      </span>
      {accent && <span className={classes["name-sub"]}>{accent}</span>}
    </>
  );
}

export default function Main() {
  const [showQuote, setShowQuote] = useState(false);
  const [project, setProject] = useState(0);
  const { hero, skills, programs, about, contact, socials, footer } = site;

  const handleProjecteOpen = (num) => {
    setProject(num);
    setShowQuote(true);
  };
  const handleProjectExit = () => {
    setShowQuote(false);
  };

  const handleProjectHover = ({ target }) => {
    target.classList.add(classes["project-hover"]);
  };

  const copyright = footer.copyright.replace(
    "{year}",
    String(new Date().getFullYear())
  );

  return (
    <div className={classes.mainWrapper}>
      <ProjectView
        showProject={showQuote}
        project={project}
        handler={handleProjectExit}
      />
      <NavBar />

      <div id="home" className={`${classes.header}`}>
        <div className={classes["header-content"]}>
          <HeroName {...hero} />

          <div className={classes.descWrapper}>
            <div className={classes.desc}>
              {hero.taglines.map((line) => (
                <h4 key={line}>{line}</h4>
              ))}
            </div>

            <div className={classes.links}>
              <a href={publicUrl(hero.resumeFile)} download>
                {hero.resumeLabel}
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                {hero.contactLabel}
              </a>
            </div>
          </div>
          <div className={classes.space}></div>
        </div>

        <img src={mediaUrl(hero.photo)} alt="" className={classes["header-image"]} />
      </div>

      <div className={classes.grid}>
        <div className={classes["grid-inner"]}>
          <div className={classes.title}>
            <span>{skills.title}</span>
          </div>
          {skills.items.map((skill) => (
            <div className={classes.skill} key={skill.name}>
              <img src={mediaUrl(skill.icon)} alt="" />
              <span>{skill.name}</span>
              <span>{skill.blurb}</span>
            </div>
          ))}
          <div className={`${classes.title} ${classes["programs-title"]}`}>
            <span>{programs.title}</span>
          </div>
          {programs.items.map((program) => (
            <div className={classes.program} key={program.name}>
              <img src={mediaUrl(program.icon)} alt="" />
              <span>{program.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="projects" className={classes.projects}>
        <div className={classes.title}>
          <span>{site.projects.title}</span>
        </div>
        <div className={classes["projects-inner"]}>
          {projects.map((item, index) => (
            <div
              key={item.media}
              className={classes.project}
              onMouseOver={(e) => handleProjectHover(e)}
            >
              <ProjectMedia media={item.media} alt={item.title} />
              <a
                href={`#project-${index}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleProjecteOpen(index);
                }}
                className={classes["project-content"]}
              >
                <h2>{item.title}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div id="about" className={classes.about}>
        <div className={classes.title}>
          <span>{about.title}</span>
        </div>
        <div
          className={classes["about-inner"]}
          style={{ "--about-photo": `url(${mediaUrl(about.photo)})` }}
        >
          <img src={mediaUrl(about.photo)} alt="" />
          <div>
            <h1>{about.heading}</h1>
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className={classes.contact}>
        <div className={classes.title}>
          <span>{contact.title}</span>
        </div>
        <span>{contact.blurb}</span>
        {contact.phone && (
          <div className={classes["contact-methods"]}>
            <FontAwesomeIcon icon={iconFor("phone")} />
            <span>{contact.phone}</span>
          </div>
        )}
        {contact.email && (
          <div className={classes["contact-methods"]}>
            <FontAwesomeIcon icon={iconFor("email")} />
            <span>{contact.email}</span>
          </div>
        )}
        <span>{contact.followLabel}</span>
        <ul className={classes.socials}>
          {socials.map((s) => (
            <a key={s.name} href={s.url} aria-label={s.name}>
              <FontAwesomeIcon size={"2x"} icon={iconFor(s.icon)} />
            </a>
          ))}
        </ul>
      </div>

      <div className={classes.footer}>
        <a href="#home" onClick={(e) => scrollToSection(e, "home")}>
          <img src={mediaUrl(footer.scrollUpIcon)} alt="" />
        </a>
        <span>{copyright}</span>
      </div>
    </div>
  );
}
