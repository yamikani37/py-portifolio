// FILE: src/lib/constants.ts
// Static configuration and content for the site. No component logic here.
export const SITE_CONFIG = {
  name: "Yamikani Phiri",
  role: "Software Developer",
  tagline: "Building Systems for Culture, Community & Impact.",
  description: "Computer Science graduate and Software Developer building useful technology, culturally relevant systems, AI/ML applications, and data-driven solutions.",
  penName: "Nane Ndine Poet",
  url: "https://yamikani.dev",
  links: {
    github: "https://github.com/yamikani37",
    linkedin: "https://www.linkedin.com/in/phiriyamikani/",
    substack: "https://yamie37.substack.com/",
    email: "yami.kan37@gmail.com"
  }
}

export type Project = {
  id: string
  title: string
  description: string
  problem: string
  approach: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    id: "ekklesia",
    title: "Ekklesia",
    description: "A church management system built for real congregational use, covering member records, event scheduling, and SMS-based communication.",
    problem: "Churches were tracking membership, events, and announcements across spreadsheets and group chats, with no single place to manage any of it.",
    approach: "Built a full-stack member management system with role-based access, an event scheduler, and an SMS integration so admins can reach the congregation without a separate tool.",
    techStack: ["React", "Node.js", "PostgreSQL", "SMS API", "Tailwind CSS"],
    featured: true
  },
  {
    id: "artifact-platform",
    title: "Artifact Identification Platform",
    description: "An ML-driven platform that helps Zambian museums identify and catalog cultural artifacts.",
    problem: "Museums with limited staff and resources often lack the tooling to consistently catalog and classify cultural artifacts, putting institutional knowledge at risk.",
    approach: "Paired a FastAPI backend and PostgreSQL catalog with a computer-vision model to assist identification, exposed through a React interface built for non-technical museum staff.",
    techStack: ["Python", "FastAPI", "React", "PostgreSQL", "PyTorch"],
    featured: true
  },
  {
    id: "nyanjalang",
    title: "NyanjaLang",
    description: "An exploration of programming language and interpreter design using Nyanja (Chichewa) syntax concepts.",
    problem: "Most people learning to code in Zambia and Malawi start with syntax rooted entirely in English, which adds a layer of translation on top of learning to program.",
    approach: "Designed and implemented an interpreter with keywords and control structures drawn from Nyanja, as a working experiment in what a local-language programming language could look like.",
    techStack: ["Python", "Compiler Design", "Interpreters"],
    githubUrl: "https://github.com/yamikani37/nyanjaLang",
    liveUrl: "https://nyanja-lang.onrender.com/",
    featured: true
  },
  {
    id: "spread-lab",
    title: "Spread Lab",
    description: "An interactive quantitative analysis project exploring financial time series and cointegration in Python.",
    problem: "Understanding pairs-trading and spread relationships usually means working through econometrics in static notebooks that are hard to explore interactively.",
    approach: "Built a Python-based workflow for testing cointegration between asset pairs and visualizing spread behavior over time, as part of applying financial engineering coursework to real market data.",
    techStack: ["Python", "Pandas", "Econometrics", "Time Series"],
    featured: true
  },
  {
    id: "mundatech",
    title: "MundaTech",
    description: "A farming application featuring educational resources, budget planning tools, and crop management for small-scale farmers.",
    problem: "Small-scale farmers often lack easy access to budgeting tools and educational resources tailored to their crops and scale.",
    approach: "Built a mobile app combining crop management, budget planning, and educational content in one place for small-scale farmers.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yamikani37/mundatech",
    featured: false
  }
]

export const SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  frameworks: ["React", "Next.js", "Node.js", "Django", "FastAPI", "Oracle APEX", "PL/SQL"],
  databases: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  ml: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas"],
  tools: ["Git", "Docker", "Vercel", "Figma"]
}

// Maps a skill name to the ids of PROJECTS that use it, for the
// Skills -> Projects filtering interaction.
export const SKILL_PROJECT_MAP: Record<string, string[]> = {
  Python: ["artifact-platform", "nyanjalang", "spread-lab"],
  JavaScript: ["ekklesia", "mundatech"],
  TypeScript: ["ekklesia"],
  SQL: ["ekklesia", "artifact-platform"],
  React: ["ekklesia", "artifact-platform"],
  "Next.js": [],
  "Node.js": ["ekklesia", "mundatech"],
  Django: [],
  FastAPI: ["artifact-platform"],
  "Oracle APEX": [],
  "PL/SQL": [],
  PostgreSQL: ["ekklesia", "artifact-platform"],
  MongoDB: ["mundatech"],
  Supabase: [],
  Firebase: [],
  PyTorch: ["artifact-platform"],
  TensorFlow: [],
  "Scikit-learn": [],
  Pandas: ["spread-lab"],
  Git: [],
  Docker: [],
  Vercel: [],
  Figma: []
}

export const EXPERIENCE = [
  {
    id: "northrise",
    role: "Software Developer / Consultant",
    org: "Northrise University",
    period: "July 2025 - Present",
    summary: "Building and maintaining application features on Northrise's institutional software systems, with a focus on Oracle APEX and PL/SQL.",
    highlights: [
      "Frontend and backend development on Oracle APEX applications",
      "Writing and maintaining PL/SQL for application logic and data workflows",
      "QA and testing support across application releases",
      "User training and technical support for staff",
      "Database work and ongoing application maintenance",
      "Research into database migration and application modernization options"
    ]
  }
]

export const CURRENTLY = [
  {
    title: "Software Development",
    description: "Building and maintaining software systems, working with web technologies, databases, APIs, and application architecture."
  },
  {
    title: "Financial Engineering",
    description: "Completed WorldQuant University's Foundations of Financial Engineering certificate. Applying it through work with financial markets, financial data, econometrics, Python, and time series analysis."
  },
  {
    title: "AI & Machine Learning",
    description: "Exploring practical applications of machine learning, particularly where technology intersects with culture, language, and real-world problems."
  },
  {
    title: "Cultural Technology",
    description: "Continuing to explore ways technology can support African cultural preservation, accessibility, and representation."
  }
]
