// One icon system for the whole site.
//
//   UI glyphs  -> lucide-react (nav, skills, buttons, fallbacks)
//   Brand logos -> simple-icons (tech chips, tools, socials)
//
// Content JSON refers to icons by short keys ("brain", "react", "github").
// resolveIcon(key) returns { kind: "lucide", Component } or { kind: "brand", path, title }.
// Tech chips also get a display label from TECH_LABELS.

import {
  ArrowUp,
  ArrowUpRight,
  Bot,
  Brain,
  Briefcase,
  Check,
  Cloud,
  Code2,
  Container,
  Database,
  Download,
  ExternalLink,
  Layers,
  LayoutGrid,
  Mail,
  Menu,
  MessageSquare,
  MousePointer2,
  Terminal,
  User,
  Users,
  Wand2,
  Workflow,
  X,
} from "lucide-react";

import {
  siBootstrap,
  siClaude,
  siClaudecode,
  siClerk,
  siCss,
  siCursor,
  siDocker,
  siDotnet,
  siExpo,
  siFastapi,
  siFirebase,
  siGithub,
  siGraphql,
  siHtml5,
  siI18next,
  siJavascript,
  siNextdotjs,
  siPostgresql,
  siPytest,
  siPython,
  siReact,
  siRedux,
  siSass,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWordpress,
} from "simple-icons";

// LinkedIn is no longer distributed by simple-icons; standard "in" glyph on a 24px grid.
const linkedin = {
  title: "LinkedIn",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
};

const LUCIDE = {
  // navigation and sections
  projects: LayoutGrid,
  briefcase: Briefcase,
  about: User,
  contact: Mail,
  // skills
  brain: Brain,
  agents: Workflow,
  layers: Layers,
  cloud: Cloud,
  users: Users,
  wand: Wand2,
  // tools and misc
  terminal: Terminal,
  code: Code2,
  robot: Bot,
  email: Mail,
  // controls
  menu: Menu,
  close: X,
  check: Check,
  download: Download,
  external: ExternalLink,
  arrow: ArrowUpRight,
  up: ArrowUp,
};

const BRAND = {
  react: siReact,
  javascript: siJavascript,
  typescript: siTypescript,
  python: siPython,
  fastapi: siFastapi,
  claude: siClaude,
  claudecode: siClaudecode,
  nextjs: siNextdotjs,
  postgresql: siPostgresql,
  supabase: siSupabase,
  clerk: siClerk,
  vercel: siVercel,
  tailwind: siTailwindcss,
  pytest: siPytest,
  bootstrap: siBootstrap,
  sass: siSass,
  i18next: siI18next,
  graphql: siGraphql,
  expo: siExpo,
  firebase: siFirebase,
  redux: siRedux,
  wordpress: siWordpress,
  html: siHtml5,
  css: siCss,
  dotnet: siDotnet,
  docker: siDocker,
  github: siGithub,
  cursor: siCursor,
  linkedin,
};

// Brands simple-icons no longer ships (trademark policy) fall back to a glyph.
const BRAND_FALLBACK = {
  aws: Cloud,
  hygraph: Database,
  twilio: MessageSquare,
  emailjs: Mail,
  csharp: Code2,
  codex: Terminal,
  devin: Bot,
  container: Container,
  pointer: MousePointer2,
};

export const TECH_LABELS = {
  react: "React",
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  fastapi: "FastAPI",
  claude: "Claude",
  nextjs: "Next.js",
  postgresql: "PostgreSQL",
  supabase: "Supabase",
  clerk: "Clerk",
  aws: "AWS",
  vercel: "Vercel",
  tailwind: "Tailwind CSS",
  pytest: "pytest",
  bootstrap: "Bootstrap",
  sass: "Sass",
  i18next: "i18next",
  graphql: "GraphQL",
  hygraph: "Hygraph",
  expo: "Expo",
  firebase: "Firebase",
  redux: "Redux Toolkit",
  twilio: "Twilio Verify",
  emailjs: "EmailJS",
  wordpress: "WordPress",
  html: "HTML",
  css: "CSS",
  csharp: "C#",
  dotnet: ".NET",
  docker: "Docker",
  github: "GitHub",
};

export function resolveIcon(key) {
  if (BRAND[key]) return { kind: "brand", path: BRAND[key].path, title: BRAND[key].title };
  const Component = LUCIDE[key] || BRAND_FALLBACK[key];
  if (Component) return { kind: "lucide", Component };
  return null;
}

export function techLabel(key) {
  return TECH_LABELS[key] || key;
}
