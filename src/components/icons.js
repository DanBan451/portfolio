// Maps the short icon names used in src/content/site.json to FontAwesome icons.
// Add an entry here if you want to use a new icon name in the JSON.
// Any JSON icon value that looks like a file path (contains "/" or an image
// extension) is rendered as an <img> from public/media/ instead.
import {
  faHome,
  faAddressCard,
  faProjectDiagram,
  faEnvelope,
  faPhone,
  faGlobe,
  faFileLines,
  faBrain,
  faDiagramProject,
  faDatabase,
  faCloud,
  faShieldHalved,
  faWandMagicSparkles,
  faTerminal,
  faCode,
  faRobot,
  faICursor,
  faLayerGroup,
  faServer,
  faMagnifyingGlass,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faMedium,
  faDev,
  faReact,
  faAws,
  faDocker,
  faPython,
  faJava,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

export const ICONS = {
  // navigation
  home: faHome,
  projects: faProjectDiagram,
  about: faAddressCard,
  contact: faEnvelope,
  resume: faFileLines,
  // contact methods
  email: faEnvelope,
  phone: faPhone,
  // socials
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
  facebook: faFacebook,
  x: faTwitter,
  twitter: faTwitter,
  youtube: faYoutube,
  medium: faMedium,
  dev: faDev,
  website: faGlobe,
  // skills & tools
  brain: faBrain,
  agents: faDiagramProject,
  database: faDatabase,
  cloud: faCloud,
  shield: faShieldHalved,
  wand: faWandMagicSparkles,
  terminal: faTerminal,
  code: faCode,
  robot: faRobot,
  cursor: faICursor,
  layers: faLayerGroup,
  server: faServer,
  search: faMagnifyingGlass,
  tools: faScrewdriverWrench,
  react: faReact,
  aws: faAws,
  docker: faDocker,
  python: faPython,
  java: faJava,
  node: faNodeJs,
};

export function iconFor(name) {
  return ICONS[name] || faGlobe;
}

/** True if a JSON icon value refers to an image file rather than an icon name. */
export function isImageIcon(value) {
  return typeof value === "string" && /[/.]/.test(value);
}
