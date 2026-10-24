import React from "react";

import fantum_gif from "../images/fantum.gif";
import unitedhomes_gif from "../images/unitedhomes.gif";
import rcheban_gif from "../images/rcheban.gif";
import skycity_gif from "../images/skycity.gif";
import optimal_exterior_gif from "../images/optimal-exterior.gif";
import tetris_gif from "../images/tetris.gif";
import asteroids_gif from "../images/asteroids.gif";
import visualizer_gif from "../images/visualizer.gif";

import dramarama_mp4 from "../videos/dramarama.mp4";
import vy_horizon_mp4 from "../videos/vy-horizon.mp4";
import accellence_craft_mp4 from "../videos/accellence-craft.mp4";
import evolution_gaming_mp4 from "../videos/evolution-gaming.mp4";

// Maps the `media` key in projects.json to a bundled asset.
export const MEDIA = {
  fantum: { type: "image", src: fantum_gif },
  unitedhomes: { type: "image", src: unitedhomes_gif },
  rcheban: { type: "image", src: rcheban_gif },
  skycity: { type: "image", src: skycity_gif },
  "optimal-exterior": { type: "image", src: optimal_exterior_gif },
  tetris: { type: "image", src: tetris_gif },
  asteroids: { type: "image", src: asteroids_gif },
  visualizer: { type: "image", src: visualizer_gif },
  dramarama: { type: "video", src: dramarama_mp4 },
  "vy-horizon": { type: "video", src: vy_horizon_mp4 },
  "accellence-craft": { type: "video", src: accellence_craft_mp4 },
  "evolution-gaming": { type: "video", src: evolution_gaming_mp4 },
};

/**
 * Renders a project's screen recording: an animated GIF for older projects,
 * or an autoplaying, looping, muted MP4 (behaves like a GIF, ~10x smaller).
 */
export default function ProjectMedia({ media, alt = "", className }) {
  const item = MEDIA[media];
  if (!item) return null;
  if (item.type === "video") {
    return (
      <video
        className={className}
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
      />
    );
  }
  return <img className={className} src={item.src} alt={alt} />;
}
