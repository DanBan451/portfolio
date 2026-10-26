import React from "react";
import { mediaUrl, mediaType } from "../content";

/**
 * Renders a project's screen recording from public/media/.
 * `media` is the value from projects.json, e.g. "projects/dramarama.mp4".
 * Videos autoplay muted in a loop (behaves like a GIF, ~10x smaller);
 * anything else is rendered as an image.
 */
export default function ProjectMedia({ media, alt = "", className }) {
  if (!media) return null;
  const src = mediaUrl(media);
  if (mediaType(media) === "video") {
    return (
      <video
        className={className}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    );
  }
  return <img className={className} src={src} alt={alt} />;
}
