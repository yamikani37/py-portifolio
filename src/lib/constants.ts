// FILE: src/lib/constants.ts
// This is a static configuration file, so no changes are needed here.
export const SITE_CONFIG = {
  name: "Yamikani Phiri",
  role: "Developer | Writer",
  tagline: "Turning Visions into Vibrant Realities.",
  description: "Computer Science final year student passionate about Machine Learning, Web Development, and Cultural Technology Projects",
  url: "https://yamikani.dev",
  links: {
    github: "https://github.com/yamikani37",
    linkedin: "https://www.linkedin.com/in/phiriyamikani/",
    substack: "https://yamie37.substack.com/",
    email: "yami.kan37@gmail.com"
  }
}

export const PROJECTS = [
  {
    id: "ekklesia",
    title: "Ekklesia",
    description: "A comprehensive church management system featuring member management, event scheduling, and SMS integration for seamless community communication.",
    techStack: ["React", "Node.js", "PostgreSQL", "SMS API", "Tailwind CSS"],
    githubUrl: "https://github.com/yamikaniphiri/ekklesia",
    featured: true
  },
  {
    id: "chewa-bemba-lang",
    title: "Chewa/Bemba Programming Language",
    description: "An innovative programming language designed for Zambian children, featuring syntax in local languages and an online compiler for educational purposes.",
    techStack: ["Python", "Compiler Design", "Web Assembly", "React"],
    githubUrl: "https://github.com/yamikaniphiri/chewa-bemba-lang",
    liveUrl: "https://chewabemba.dev",
    featured: true
  },
  {
    id: "artifact-platform",
    title: "Artifact Identification Platform",
    description: "ML-driven platform for Zambian museums to identify and catalog cultural artifacts, preserving heritage through technology.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    githubUrl: "https://github.com/yamikaniphiri/artifact-ml",
    featured: true
  },
  {
    id: "mundatech",
    title: "MundaTech",
    description: "Comprehensive farming application featuring educational resources, budget planning tools, and crop management for small-scale farmers.",
    techStack: ["React Native", "Node.js", "MongoDB", "Machine Learning"],
    githubUrl: "https://github.com/yamikaniphiri/mundatech",
    featured: false
  }
]

export const SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Django", "FastAPI"],
  styling: ["Tailwind CSS", "CSS3", "Styled Components"],
  databases: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  tools: ["Git", "Docker", "Vercel", "Figma", "Phootshop"],
  ml: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"]
}