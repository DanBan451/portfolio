import React, { useEffect, useState } from "react";
import { site, publicUrl, scrollToSection } from "../content";
import { Icon } from "./icon";
import classes from "../styles/site.module.css";

export default function Nav() {
  const { nav, hero } = site;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const ids = nav.links.map((l) => l.section);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [nav.links]);

  const go = (event, section) => {
    setOpen(false);
    scrollToSection(event, section);
  };

  return (
    <header className={classes.nav}>
      <div className={`${classes.container} ${classes.navInner}`}>
        <a href="#home" className={classes.brand} onClick={(e) => go(e, "home")}>
          <span className={classes.brandMark} aria-hidden="true" />
          {hero.firstName} {hero.lastName}
        </a>

        <nav className={`${classes.navLinks} ${open ? classes.navLinksOpen : ""}`} aria-label="Sections">
          {nav.links.map((link) => (
            <a
              key={link.section}
              href={`#${link.section}`}
              onClick={(e) => go(e, link.section)}
              className={active === link.section ? classes.navActive : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href={publicUrl(hero.resumeFile)} className={classes.navResume} target="_blank" rel="noreferrer">
            <Icon name="download" size={14} />
            {nav.resumeLabel}
          </a>
        </nav>

        <button
          type="button"
          className={classes.navToggle}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>
    </header>
  );
}
