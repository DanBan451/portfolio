import React from "react";
import { resolveIcon, techLabel } from "./icons";
import classes from "../styles/site.module.css";

/** Renders any icon key from the content JSON at a given pixel size. */
export function Icon({ name, size = 18, className, strokeWidth = 1.75 }) {
  const icon = resolveIcon(name);
  if (!icon) return null;
  if (icon.kind === "brand") {
    return (
      <svg
        role="img"
        aria-hidden="true"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
    );
  }
  const { Component } = icon;
  return <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}

/** Small logo + label chip used for a project's stack and the tools row. */
export function TechChip({ name, label }) {
  return (
    <li className={classes.chip} title={label || techLabel(name)}>
      <Icon name={name} size={14} />
      <span>{label || techLabel(name)}</span>
    </li>
  );
}
