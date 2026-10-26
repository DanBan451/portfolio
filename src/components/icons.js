// Maps the short icon names used in src/content/site.json to FontAwesome icons.
// Add an entry here if you want to use a new icon name in the JSON.
import {
  faHome,
  faAddressCard,
  faProjectDiagram,
  faEnvelope,
  faPhone,
  faGlobe,
  faFileLines,
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
};

export function iconFor(name) {
  return ICONS[name] || faGlobe;
}
