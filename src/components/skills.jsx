import React from "react";
import { site } from "../content";
import { Icon } from "./icon";
import classes from "../styles/site.module.css";

// Tool names -> icon keys (brand where one exists, glyph otherwise).
const TOOL_ICON = {
  "Claude Code": "claudecode",
  Codex: "codex",
  Devin: "devin",
  Cursor: "cursor",
  Docker: "docker",
  GitHub: "github",
};

export default function Skills() {
  const { skills, programs } = site;
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.sectionHead}>
          <h2 className={classes.sectionTitle}>{skills.title}</h2>
        </div>
        <ul className={classes.skillGrid}>
          {skills.items.map((skill) => (
            <li key={skill.name} className={classes.skillCard}>
              <span className={classes.skillIcon}>
                <Icon name={skill.icon} size={20} />
              </span>
              <h3>{skill.name}</h3>
              <p>{skill.blurb}</p>
            </li>
          ))}
        </ul>
        <div className={classes.toolsRow}>
          <span className={classes.toolsLabel}>{programs.title}</span>
          <ul className={classes.chips}>
            {programs.items.map((tool) => (
              <li key={tool.name} className={classes.chip}>
                <Icon name={TOOL_ICON[tool.name] || tool.icon} size={14} />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
