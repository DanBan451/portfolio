import React, { useEffect, useRef } from "react";
import { site, projects } from "../content";
import ProjectMedia from "./projectmedia";
import { Icon, TechChip } from "./icon";
import { StatusBadge } from "./work";
import classes from "../styles/site.module.css";

/** Full project write-up in a modal. Esc or the backdrop closes it. */
export default function ProjectDialog({ projectId, onClose }) {
  const project = projects.find((p) => p.id === projectId);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    document.body.classList.add("dialog-open");
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;
  const labels = site.projects;

  return (
    <div className={classes.dialogBackdrop} onClick={onClose} role="presentation">
      <div
        className={classes.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className={classes.dialogClose} onClick={onClose} aria-label="Close">
          <Icon name="close" size={18} />
        </button>

        <div className={classes.dialogMedia}>
          <ProjectMedia media={project.media} alt="" />
        </div>

        <div className={classes.dialogBody}>
          <div className={classes.cardMeta}>
            <span className={classes.mono}>{project.period}</span>
            <StatusBadge status={project.status} />
          </div>
          <h2 id="project-dialog-title" className={classes.dialogTitle}>
            {project.title}
          </h2>
          <p className={classes.cardRole}>
            {project.role}
            {project.client ? ` · ${project.client}` : ""}
          </p>

          <div className={classes.dialogText}>
            {project.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <ul className={classes.highlights}>
            {project.highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={14} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <ul className={classes.chips}>
            {project.tech.map((t) => (
              <TechChip key={t} name={t} />
            ))}
          </ul>

          <div className={classes.dialogActions}>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noreferrer" className={classes.btnPrimary}>
                {labels.visitLabel}
                <Icon name="external" size={16} />
              </a>
            ) : (
              <span className={classes.linkMuted}>{labels.privateLabel}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
