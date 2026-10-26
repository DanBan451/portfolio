// Single entry point for all editable site content.
//
//   src/content/site.json      hero, nav, skills, programs, about, contact, socials, footer
//   src/content/projects.json  one object per project card
//   public/media/              the image/video files those JSON files refer to
//
// JSON values that name a file (photo, icon, media, scrollUpIcon, ...) are
// paths relative to public/media/. Use mediaUrl() to turn them into URLs that
// work from any base URL (local dev, GitHub Pages sub-path, custom domain).

import site from "./site.json";
import projects from "./projects.json";

export { site, projects };

const BASE = process.env.PUBLIC_URL || "";

/** URL for a file under public/media/, e.g. mediaUrl("projects/dramarama.mp4"). */
export function mediaUrl(file) {
  if (!file) return "";
  if (/^(https?:)?\/\//.test(file) || file.startsWith("data:")) return file;
  return `${BASE}/media/${file.replace(/^\/+/, "")}`;
}

/** URL for a file directly under public/, e.g. publicUrl("resume.pdf"). */
export function publicUrl(file) {
  return `${BASE}/${String(file).replace(/^\/+/, "")}`;
}

/** "video" for .mp4/.webm/.mov/.m4v, otherwise "image". */
export function mediaType(file) {
  return /\.(mp4|webm|mov|m4v)$/i.test(file || "") ? "video" : "image";
}

/** Smooth-scroll to a section id, with a hash fallback; safe to use as an onClick. */
export function scrollToSection(event, sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    if (event) event.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
  }
}
