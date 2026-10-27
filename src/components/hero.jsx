import React from "react";
import { site, mediaUrl, publicUrl, scrollToSection } from "../content";
import { Icon } from "./icon";
import classes from "../styles/site.module.css";

export default function Hero() {
  const { hero } = site;
  return (
    <section id="home" className={classes.hero}>
      <div className={`${classes.container} ${classes.heroGrid}`}>
        <div className={classes.heroText}>
          <p className={classes.eyebrow}>
            <span className={classes.liveDot} aria-hidden="true" />
            {hero.availability}
          </p>
          <h1 className={classes.heroName}>
            {hero.firstName} {hero.lastName}
          </h1>
          <p className={classes.heroHeadline}>{hero.headline}</p>
          <p className={classes.heroTagline}>{hero.taglines[0]}</p>
          <p className={classes.heroIntro}>{hero.intro}</p>
          <div className={classes.heroActions}>
            <a href="#work" className={classes.btnPrimary} onClick={(e) => scrollToSection(e, "work")}>
              {hero.workLabel}
              <Icon name="arrow" size={16} />
            </a>
            <a href="#contact" className={classes.btnGhost} onClick={(e) => scrollToSection(e, "contact")}>
              {hero.contactLabel}
            </a>
            <a href={publicUrl(hero.resumeFile)} className={classes.btnGhost} target="_blank" rel="noreferrer">
              <Icon name="download" size={16} />
              {hero.resumeLabel}
            </a>
          </div>
        </div>

        <div className={classes.heroPhotoWrap}>
          <img src={mediaUrl(hero.photo)} alt={`${hero.firstName} ${hero.lastName}`} className={classes.heroPhoto} />
        </div>
      </div>

      <div className={classes.container}>
        <ul className={classes.proofStrip} aria-label="Highlights">
          {hero.proof.map((item) => (
            <li key={item.label}>
              <span className={classes.proofLabel}>{item.label}</span>
              <span className={classes.proofDetail}>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
