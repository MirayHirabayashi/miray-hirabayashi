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
  location: "Ames, Iowa, USA",
  resumePath: "/resume.pdf",
  appUrl: "https://github.com/MirayHirabayashi",
  socials: {
    github: "https://github.com/MirayHirabayashi",
    linkedin: "https://www.linkedin.com/in/miray-hirabayashi/",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
] as const;

/** Short availability facts shown on the Contact page and mobile menu. */
export const availability = {
  headline: "Open to 2027 new-grad roles",
  details: [
    { label: "Roles", value: "Full-stack, mobile, or any tech engineering" },
    { label: "Graduating", value: "May 2027" },
    { label: "Based in", value: "Ames, Iowa, USA" },
    { label: "Open to", value: "Relocation or remote work" },
  ],
} as const;

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
  /** Small caps label shown above the project name, e.g. "WEB · FULL-STACK". */
  category?: string;
  /** Short word displayed on the card's color banner. */
  glyph?: string;
  /** Tailwind gradient classes for the card's color banner. */
  gradient?: string;
  /** Projects with `showcase` appear on the Projects page, in array order. */
  showcase?: boolean;
};

export const projects: Project[] = [
  {
    slug: "globebase",
    category: "Web · Full-stack",
    glyph: "3D",
    gradient: "from-[#0b1e4d] via-[#1e5bff] to-[#64d2ff]",
    showcase: true,
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
    category: "Web · Full-stack",
    glyph: "LIVE",
    gradient: "from-[#ff375f] to-[#ff9f0a]",
    showcase: true,
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
    category: "Android · Team project",
    glyph: "CRM",
    gradient: "from-[#30d158] to-[#64d2ff]",
    showcase: true,
    title: "WorkSync",
    summary: "Mobile app for employee and project management.",
    description:
      "An employee and project management app for small businesses. I built the Android UI and app logic in Java, integrating REST APIs, WebSockets, and full CRUD.",
    tech: ["Java", "Android Studio", "Gradle", "REST APIs", "WebSockets"],
    github: "https://github.com/achen2304/WorkSync",
    featured: false,
  },
  {
    slug: "nextclose",
    category: "Machine learning · Full-stack",
    glyph: "ML",
    gradient: "from-black to-[#1f6f3a]",
    showcase: true,
    title: "NextClose",
    summary: "Full-stack ML web app that predicts next-day stock price direction.",
    description:
      "A full-stack ML web app that predicts next-day stock price direction, with a FastAPI backend deployed on Google Cloud Run and a Next.js frontend.",
    tech: ["Python", "FastAPI", "scikit-learn", "Docker", "Google Cloud Platform", "Next.js", "TypeScript", "PostgreSQL", "React", "Tailwind CSS"],
    github: "https://github.com/MirayHirabayashi/nextclose",
    demo: "https://nextclose.vercel.app/",
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
    items: ["React", "Angular", "Next.js", "Node.js", "Express", "Flask", "Prisma", "Tailwind CSS", "scikit-learn", "FastAPI"],
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
    items: ["Linux", "macOS", "Windows"],
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
    role: "Undergraduate Teaching Assistant",
    company: "Iowa State University — Department of Electrical and Computer Engineering",
    period: "Sep 2026 – Present",
    points: [
      "Support 20+ students with C programming and Linux-based lab exercises, troubleshooting code and explaining operating system concepts including processes, threads, scheduling, and memory management.",
      "Grade assignments and lab reports, reviewing students' C programs and Makefiles while evaluating their understanding of operating system concepts and providing constructive feedback.",
    ],
  },
  {
    role: "Student Assistant",
    company: "Iowa State University — Language Studies Resource Center",
    period: "Dec 2024 – Present",
    points: [
      "Troubleshoot hardware and software issues for students and faculty, supporting classroom technology, displays, projectors, printing/scanning systems, and related equipment.",
    ],
  },
  {
    role: "Administrative Intern",
    company: "Iowa Department of Transportation",
    period: "May 2025 – Sep 2026",
    points: [
      "Developed a Python CLI application to automate validation and reconciliation between Workday and Microsoft Access datasets, processing 11,000+ records and eliminating manual verification.",
    ],
  },
];

export const faqs = [
  {
    q: "How can I get in touch about a role?",
    a: "Email is best. You can also connect with me on LinkedIn. Everything is on the Contact page.",
  },
  {
    q: "Where can I find your résumé?",
    a: "On the Résumé page, where you can also download it as a PDF.",
  },
  {
    q: "Can I use code from your projects?",
    a: "Each repository on GitHub has its own license. Check the repo before reusing any code, and feel free to email me if you're unsure.",
  },
  {
    q: "Some projects don't have a code link. Why?",
    a: "A few projects are private or were built with a team, so only the live demo is public.",
  },
  {
    q: "A link on this site is broken. What should I do?",
    a: "Thanks for catching it! Send me a quick email with the page and link, and I'll fix it.",
  },
];
