/**
 * Single source of truth for the site's content.
 *
 * Editing the data here updates every page. Drop your real links, projects and
 * resume details in once and the rest of the UI follows.
 */

export const site = {
  name: "Miray Hirabayashi",
  title: "Software Engineering Student at Iowa State University",
  tagline:
    "Software engineering student with a minor in Cybersecurity, building full-stack web apps, mobile apps, and ML tools — focused on clean code and real-world impact.",
  shortBio:
    "I build full-stack web apps, mobile apps, and data-driven tools with an eye for clean architecture and a passion for shipping things that work.",
  email: "mirayhirabayashi@gmail.com",
  location: "Ames, Iowa",
  resumePath: "/resume.pdf",
  appUrl: "https://github.com/MirayHirabayashi",
  socials: {
    github: "https://github.com/MirayHirabayashi",
    linkedin: "https://www.linkedin.com/in/miray-hirabayashi/",
  },
} as const;

export const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export type Project = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nextclose",
    title: "NextClose",
    summary: "Full-stack ML web app that predicts next-day stock price direction.",
    description:
      "A full-stack ML web app that predicts next-day stock price direction, with a FastAPI backend deployed on Google Cloud Run and a Next.js frontend.",
    tech: ["Python", "FastAPI", "scikit-learn", "Docker", "Google Cloud Platform", "Next.js", "TypeScript", "PostgreSQL", "React", "Tailwind CSS"],
    github: "https://github.com/MirayHirabayashi/nextclose",
    demo: "https://nextclose.vercel.app/",
  },
  {
    slug: "globebase",
    title: "GlobeBase",
    summary: "Interactive 3D globe for tracking travel across the world.",
    description:
      "A full-stack 3D globe travel tracker built with Next.js and Three.js, letting users log and revisit the places they've traveled.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Three.js", "Tailwind CSS"],
    github: "https://github.com/MirayHirabayashi/globebase",
    demo: "https://globebase.vercel.app/",
    featured: true,
  },
  {
    slug: "iowa-after-class",
    title: "Iowa After Class",
    summary: "Full-stack event discovery platform for students in Iowa.",
    description:
      "A full-stack event discovery platform for students in Iowa, pulling real-time listings from the Ticketmaster API.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demo: "https://www.iowaafterclass.com/",
    featured: true,
  },
  {
    slug: "worksync",
    title: "WorkSync",
    summary: "Mobile app for employee and project management.",
    description:
      "An Android app for small businesses to manage employees, tasks, and workflows.",
    tech: ["Java", "Android Studio", "Gradle", "REST APIs", "WebSockets"],
    github: "https://github.com/achen2304/WorkSync",
    featured: false,
  },
  {
    slug: "stock-price-predictor",
    title: "Stock Price Predictor",
    summary: "ML model that predicts daily S&P 500 movement.",
    description:
      "A machine learning model that predicts the daily direction of the S&P 500 index.",
    tech: ["Python", "scikit-learn", "pandas", "matplotlib"],
    github: "https://github.com/MirayHirabayashi/stock-price-predictor",
  },
  {
    slug: "inkspeed",
    title: "inkspeed",
    summary: "A dark-themed, minimalist typing speed test web application, built with React and styled using Tailwind CSS.",
    description:
      "A dark-themed, minimalist typing speed test web app built with React and Tailwind CSS.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/MirayHirabayashi/inkspeed",
    demo: "https://inkspeed.vercel.app/",
    featured: false,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "PHP", "SQL", "Swift", "HTML", "CSS"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Angular", "Next.js", "Node.js", "Express", "Flask", "Prisma", "Tailwind CSS", "SwiftUI", "scikit-learn"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Google Cloud Platform (GCP)", "Docker", "Supabase", "Vercel"],
  },
  {
    group: "Developer Tools",
    items: ["Git (GitHub, GitLab)", "Postman", "Figma", "Xcode", "Android Studio"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    group: "Environments",
    items: ["Linux (Ubuntu, Debian, Kali)", "macOS", "Windows"],
  },
];

export const education = [
  {
    school: "Iowa State University",
    degree: "B.S. in Software Engineering, Minor in Cybersecurity",
    period: "Expected May 2027",
    detail:
      "Relevant coursework: Object-Oriented Programming, Data Structures, Algorithms, Digital Logic, Cybersecurity Concepts, Embedded Systems, UI Design, Software Development Practices, Database Management Systems, Software Testing.",
  },
];

export const experience = [
  {
    role: "Administrative Intern",
    company: "Iowa Department of Transportation",
    period: "May 2025 – Present",
    points: [
      "Developed a Python CLI application to automate validation and reconciliation between Workday and Microsoft Access datasets, processing 11,000+ records and eliminating manual verification.",
      "Automated data entry and reporting workflows using Microsoft Excel (XLOOKUP), improving database accuracy and reducing manual processing time.",
    ],
  },
  {
    role: "Student Assistant",
    company: "Iowa State University — Language Studies Resource Center",
    period: "Dec 2024 – Present",
    points: [
      "Provide technical support and troubleshooting for hardware and software used by students and faculty.",
    ],
  },
];

export const faqs = [
  {
    q: "What kind of roles are you looking for?",
    a: "I'm seeking full-time software engineering roles starting in 2027 — full-stack, mobile, or anything in between.",
  },
  {
    q: "What's your strongest area?",
    a: "Full-stack web development with React and Next.js, along with solid Mobile Development and Python/ML experience.",
  },
  {
    q: "Are you open to relocation?",
    a: "Yes. I'm open to relocating anywhere for the right opportunity, and comfortable with hybrid or remote teams.",
  },
  {
    q: "How can I get a copy of your resume?",
    a: "You can view and download it on the Resume page, or reach out by email and I'll send it over directly.",
  },
];
