import React from "react";
import { site, projects } from "../content";
import ProjectMedia from "./projectmedia";
import { Icon, TechChip } from "./icon";
import classes from "../styles/site.module.css";

export function StatusBadge({ status }) {
  if (!status) return null;
  const live = /^Live/.test(status);
  return (
    <span className={classes.badge}>
      <span className={`${classes.badgeDot} ${live ? classes.badgeDotLive : ""}`} aria-hidden="true" />
      {status}
    </span>
  );
}

function Meta({ project }) {
  return (
    <div className={classes.cardMeta}>
      <span className={classes.mono}>{project.period}</span>
      <StatusBadge status={project.status} />
    </div>
  );
}

function Stack({ tech, max }) {
  const list = max ? tech.slice(0, max) : tech;
  const rest = max ? tech.length - list.length : 0;
  return (
    <ul className={classes.chips}>
      {list.map((t) => (
        <TechChip key={t} name={t} />
      ))}
      {rest > 0 && <li className={`${classes.chip} ${classes.chipMore}`}>+{rest}</li>}
    </ul>
  );
}

function Links({ project, onOpen }) {
  const labels = site.projects;
  return (
    <div className={classes.cardActions}>
      <button type="button" className={classes.btnSmall} onClick={() => onOpen(project.id)}>
        {labels.detailsLabel}
      </button>
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer" className={classes.linkInline}>
          {labels.visitLabel}
          <Icon name="external" size={14} />
        </a>
      ) : (
        <span className={classes.linkMuted}>{labels.privateLabel}</span>
      )}
    </div>
  );
}

/** Full-width card for the AI product: media beside the story. */
function FeatureCard({ project, onOpen }) {
  return (
    <article className={classes.feature}>
      <button
        type="button"
        className={classes.featureMedia}
        onClick={() => onOpen(project.id)}
        aria-label={`${project.title}: details`}
      >
        <ProjectMedia media={project.media} alt="" />
      </button>
      <div className={classes.featureBody}>
        <div className={classes.featureCol}>
          <Meta project={project} />
          <h3 className={classes.featureTitle}>{project.title}</h3>
          <p className={classes.cardRole}>{project.role}</p>
          <p className={classes.featureSummary}>{project.summary}</p>
          <Links project={project} onOpen={onOpen} />
        </div>
        <div className={classes.featureCol}>
          <ul className={classes.highlights}>
            {project.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={14} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Stack tech={project.tech} />
        </div>
      </div>
    </article>
  );
}

/** Two-column card for the lead client project. */
function WideCard({ project, onOpen }) {
  return (
    <article className={`${classes.card} ${classes.cardWide}`}>
      <button
        type="button"
        className={classes.cardMedia}
        onClick={() => onOpen(project.id)}
        aria-label={`${project.title}: details`}
      >
        <ProjectMedia media={project.media} alt="" />
      </button>
      <div className={classes.cardBody}>
        <Meta project={project} />
        <h3 className={classes.cardTitle}>{project.title}</h3>
        {project.client && <p className={classes.cardClient}>{project.client}</p>}
        <p className={classes.cardSummary}>{project.summary}</p>
        <ul className={classes.highlights}>
          {project.highlights.slice(0, 2).map((h) => (
            <li key={h}>
              <Icon name="check" size={14} />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <Stack tech={project.tech} />
        <Links project={project} onOpen={onOpen} />
      </div>
    </article>
  );
}

function Card({ project, onOpen, compact }) {
  return (
    <article className={`${classes.card} ${compact ? classes.cardCompact : ""}`}>
      <button
        type="button"
        className={classes.cardMedia}
        onClick={() => onOpen(project.id)}
        aria-label={`${project.title}: details`}
      >
        <ProjectMedia media={project.media} alt="" />
      </button>
      <div className={classes.cardBody}>
        <Meta project={project} />
        <h3 className={classes.cardTitle}>{project.title}</h3>
        {project.client && <p className={classes.cardClient}>{project.client}</p>}
        <p className={classes.cardSummary}>{project.summary}</p>
        <Stack tech={project.tech} max={compact ? 3 : 5} />
        <Links project={project} onOpen={onOpen} />
      </div>
    </article>
  );
}

export default function Work({ onOpen }) {
  const { title, intro, groups } = site.projects;
  return (
    <section id="work" className={classes.section}>
      <div className={classes.container}>
        <div className={classes.sectionHead}>
          <h2 className={classes.sectionTitle}>{title}</h2>
          <p className={classes.sectionIntro}>{intro}</p>
        </div>

        {groups.map((group) => {
          const list = projects.filter((p) => p.group === group.id);
          if (!list.length) return null;
          const isAI = group.id === "ai";
          const compact = group.id === "foundations";
          return (
            <div key={group.id} className={classes.group}>
              <div className={classes.groupHead}>
                <h3 className={classes.groupTitle}>{group.title}</h3>
                <p className={classes.groupBlurb}>{group.blurb}</p>
              </div>
              {isAI ? (
                list.map((p) => <FeatureCard key={p.id} project={p} onOpen={onOpen} />)
              ) : (
                <div className={`${classes.cardGrid} ${compact ? classes.cardGridCompact : ""}`}>
                  {list.map((p) =>
                    p.featured ? (
                      <WideCard key={p.id} project={p} onOpen={onOpen} />
                    ) : (
                      <Card key={p.id} project={p} onOpen={onOpen} compact={compact} />
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
