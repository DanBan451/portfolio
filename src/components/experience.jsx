import React from "react";
import { site } from "../content";
import classes from "../styles/site.module.css";

export default function Experience({ onOpen }) {
  const { experience } = site;
  return (
    <section id="experience" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.sectionHead}>
          <h2 className={classes.sectionTitle}>{experience.title}</h2>
          <p className={classes.sectionIntro}>{experience.intro}</p>
        </div>

        <ol className={classes.xp}>
          {experience.entries.map((entry) => (
            <li key={`${entry.title}-${entry.period}`} className={classes.xpItem}>
              <div className={classes.xpWhen}>
                <span className={classes.mono}>{entry.period}</span>
                {entry.location && <span className={classes.xpWhere}>{entry.location}</span>}
              </div>
              <div className={classes.xpBody}>
                <h3 className={classes.xpTitle}>{entry.title}</h3>
                <p className={classes.xpOrg}>{entry.org}</p>
                {entry.summary && <p className={classes.xpSummary}>{entry.summary}</p>}
                {entry.bullets?.length > 0 && (
                  <ul className={classes.xpBullets}>
                    {entry.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                <div className={classes.xpFoot}>
                  {entry.tags?.length > 0 && (
                    <ul className={classes.tags}>
                      {entry.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  {entry.project && (
                    <button type="button" className={classes.linkInline} onClick={() => onOpen(entry.project)}>
                      {site.projects.detailsLabel}
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
