import React from "react";
import { site, scrollToSection } from "../content";
import { Icon } from "./icon";
import classes from "../styles/site.module.css";

export default function Contact() {
  const { contact, socials, footer } = site;
  const copyright = footer.copyright.replace("{year}", String(new Date().getFullYear()));

  return (
    <>
      <section id="contact" className={classes.section}>
        <div className={`${classes.container} ${classes.contactBox}`}>
          <p className={classes.eyebrow}>{contact.title}</p>
          <h2 className={classes.contactHeading}>{contact.heading}</h2>
          <p className={classes.contactBlurb}>{contact.blurb}</p>
          <div className={classes.heroActions}>
            {contact.email && (
              <a href={`mailto:${contact.email}`} className={classes.btnPrimary}>
                <Icon name="email" size={16} />
                {contact.email}
              </a>
            )}
            {socials
              .filter((s) => s.icon !== "email")
              .map((s) => (
                <a key={s.name} href={s.url} className={classes.btnGhost} target="_blank" rel="noreferrer">
                  <Icon name={s.icon} size={16} />
                  {s.name}
                </a>
              ))}
          </div>
        </div>
      </section>

      <footer className={classes.footer}>
        <div className={`${classes.container} ${classes.footerInner}`}>
          <span>{copyright}</span>
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className={classes.linkInline}>
            <Icon name="up" size={14} />
            Top
          </a>
        </div>
      </footer>
    </>
  );
}
