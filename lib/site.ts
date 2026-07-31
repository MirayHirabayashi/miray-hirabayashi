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
  /** Shown in the right-hand column of the project index. Optional — the row
   *  reads fine without it, so fill these in when you're sure of the dates. */
  year?: string;
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "iowa-after-class",
    title: "Iowa After Class",
    summary: "Full-stack event discovery platform for Iowa State students.",
    description:
      "A scalable event discovery platform built with Next.js and TypeScript, featuring serverless API routes that integrate real-time data from the Ticketmaster Discovery API. Prototyped UI/UX with a focus on performance and modular component architecture, then launched on Vercel with integrated analytics.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demo: "https://www.iowaafterclass.com/",
    featured: true,
  },
  {
    slug: "worksync",
    title: "WorkSync",
    summary: "Mobile app for employee and project management.",
    description:
      "An employee and project management app for small businesses to track staff, assign tasks, and manage workflows. Built the Android UI and application logic in Java with Gradle, integrating REST APIs, WebSockets, and full CRUD functionality. Set up CI/CD pipelines and unit testing in a collaborative Git/GitLab environment.",
    tech: ["Java", "Android Studio", "Gradle", "REST APIs", "WebSockets"],
    github: "https://github.com/achen2304/WorkSync",
    featured: true,
  },
  {
    slug: "stock-price-predictor",
    title: "Stock Price Predictor",
    summary: "ML model that predicts daily S&P 500 movement.",
    description:
      "A machine learning model that predicts the daily direction of the S&P 500 index. Engineered custom financial indicators and used scikit-learn, pandas, and matplotlib for model training, data processing, and visualization. Achieved a precision score of 0.57, outperforming the baseline model.",
    tech: ["Python", "scikit-learn", "pandas", "matplotlib"],
    github: "https://github.com/MirayHirabayashi/stock-price-predictor",
  },
  {
    slug: "inkspeed",
    title: "inkspeed",
    summary: "A dark-themed, minimalist typing speed test web application, built with React and styled using Tailwind CSS.",
    description:
      "A minimalist, dark-themed typing speed test web app built with React and Tailwind CSS. It delivers a clean and focused typing experience with real-time stats and a responsive design.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/MirayHirabayashi/inkspeed",
    demo: "https://inkspeed.vercel.app/",
    featured: true,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "PHP", "SQL", "Swift", "HTML", "CSS"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express", "Angular", "Flask", "Tailwind CSS", "SwiftUI", "scikit-learn"],
  },
  {
    group: "Tools & Databases",
    items: ["Git", "Xcode", "Android Studio", "Figma", "Postman", "Vite", "MySQL", "MongoDB"],
  },
  {
    group: "Environments",
    items: ["Linux (Ubuntu, Kali)", "macOS", "Windows",],
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
      "Developed a Python-based CLI tool to reconcile data between Workday and Microsoft Access exports, automating validation across 11,000+ records.",
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
