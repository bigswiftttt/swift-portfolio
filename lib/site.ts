/**
 * Site-wide details and page content. Every page reads from here, so you only change things once.
 * More content (contact) will be added to this file in later steps.
 */

export const site = {
  /** The name shown in the header, footer and page titles. */
  name: "Swift",
  /** The name being indexed for search: shown in <title>, meta description, and structured data. */
  displayName: "Muhammad Swift",
  /** Legal name, carried alongside displayName so both are indexed as the same person. */
  legalName: "Awwal Bashir",
  /** Set NEXT_PUBLIC_SITE_URL when you get a custom domain. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hiremswift.vercel.app",
  title: "Muhammad Swift (Awwal Bashir), full-stack developer",
  description:
    "Muhammad Swift (Awwal Bashir), a full-stack developer building AI-powered web apps and client websites. Based in Nigeria, open to freelance work.",
  email: "bashirawwal30@gmail.com",
  github: "https://github.com/bigswiftttt",
  x: "https://x.com/_big_swift",
  location: "Working remotely",
};

export const hero = {
  headline: "What are you trying to build?",
  /** The hero's two answers, standing in for the usual pair of buttons. */
  answers: [
    { label: "Show me your work", href: "#work" },
    { label: "I have a project", href: "#contact" },
  ],
  meta: "Full-stack developer. Available for freelance work.",
};

type ProjectImage = { src: string; alt: string; width: number; height: number };

export const work = {
  heading: "Selected work",
  intro:
    "Products I've designed and built, from the first sketch to deployment.",
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  summary: string;
  links: { live: string; source?: string };
  /** The technologies used to build this specific project, shown on its case study page. */
  stack?: string[];
  /**
   * A screenshot for the hover preview and the case study's main image. Save
   * the file in /public/work/ and fill this in, for example:
   * image: { src: "/work/devforge.png", alt: "The DevForge architecture graph", width: 1600, height: 1100 }
   * Until then the preview shows a designed placeholder.
   */
  image?: ProjectImage;
  /** The case study's opening paragraph. Falls back to `summary` when left out. */
  problem?: string;
  /** How the product actually works, in a sentence or two. */
  approach?: string;
  /** The features list on the case study page. */
  features?: { name: string; description: string }[];
  /** Extra screenshots shown further down the case study page. */
  gallery?: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "devforge",
    title: "DevForge",
    kind: "Repository analysis tool",
    year: "2026",
    summary:
      "Connect a GitHub repository and see its architecture, dependencies and language mix as interactive graphs, with an AI-written report.",
    links: {
      live: "https://devforge-ms.vercel.app",
      source: "https://github.com/bigswiftttt/devforge",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Groq"],
    image: {
      src: "/work/devforge.jpg",
      alt: "The DevForge dashboard showing a repository's files, folders, dependencies and language breakdown",
      width: 1366,
      height: 552,
    },
    problem:
      "Getting your bearings in an unfamiliar codebase usually means opening folders one by one, guessing at how pieces connect. That guesswork costs real time on every new project, every handover, every audit. DevForge shows the whole shape of a repository in a single dashboard, so the first ten minutes in an unfamiliar codebase are spent understanding it instead of excavating it.",
    approach:
      "Connect a GitHub repository from an account or search for any public one, and DevForge pulls its real file tree and package.json through the GitHub API. From that parsed data it builds an interactive architecture map, a dependency graph, and a language breakdown, all drawn from the repository's actual structure rather than a guess. An AI model is used for exactly one part of the job: writing a short report that summarises what the parsed data shows, strengths, risks, and suggestions. Every chart and number on the dashboard comes from the repository itself, so it stays checkable rather than being an AI's opinion dressed up as data.",
    features: [
      { name: "Repository dashboard", description: "File counts, folder counts, dependency counts and recent commits at a glance." },
      { name: "Language breakdown", description: "A visual split of the languages used across the repository." },
      { name: "AI-written report", description: "A short written summary of the repository, generated from the parsed data." },
      { name: "Multi-repository support", description: "Import any repository from a connected GitHub account, or search public repositories directly." },
    ],
    gallery: [
      {
        src: "/work/devforge-list.jpg",
        alt: "The DevForge repositories screen, listing imported and public repositories",
        width: 1366,
        height: 552,
      },
      {
        src: "/work/devforge-dependencies.jpg",
        alt: "The DevForge dependency graph, mapping a repository's packages",
        width: 1352,
        height: 545,
      },
    ],
  },
  {
    slug: "studyos",
    title: "StudyOS",
    kind: "AI study app",
    year: "2026",
    summary:
      "Turns lecture notes and PDFs into summaries, flashcards and practice questions, and builds a revision plan when an exam is close.",
    links: {
      live: "https://studyos-ms.vercel.app",
      source: "https://github.com/bigswiftttt/studyos",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini API"],
    image: {
      src: "/work/studyos.jpg",
      alt: "The StudyOS dashboard showing study streak, courses, pending tasks and focus time",
      width: 1366,
      height: 552,
    },
    problem:
      "Students study from scattered notes, spread across PDFs, photographed slides and half-finished documents, with no real plan tying it together. That usually ends the same way: a panic in the final days before an exam. StudyOS keeps materials, study time and deadlines in one place, and gives that last-minute panic an actual plan instead of a scramble.",
    approach:
      "Every course lives on a dashboard alongside a study streak, a task list and a focus timer, so a student can see at a glance what's due and how consistently they've been showing up. Upload a set of lecture notes or a PDF, and an AI assistant turns it into a summary, a set of flashcards and practice questions, work that would otherwise take an hour of manual note-taking. When an exam is close, Panic Mode takes stock of what's left uncovered and builds a short, realistic revision plan instead of an unhelpful list of everything at once. A study persona and streak system are layered on top to make consistency visible, since seeing seven days in a row is a better motivator than an abstract to-do list.",
    features: [
      { name: "Dashboard", description: "Study streak, course count, pending tasks and focus time for the day." },
      { name: "AI assistant", description: "Upload a PDF and get a summary, flashcards and multiple-choice questions." },
      { name: "Course tracking", description: "Add courses and topics, and check them off as they're covered." },
      { name: "Panic mode", description: "A crash revision plan generated when an exam is close." },
    ],
    gallery: [
      {
        src: "/work/studyos-courses.jpg",
        alt: "A StudyOS course page, showing topics checked off as covered",
        width: 1366,
        height: 552,
      },
      {
        src: "/work/studyos-stats.jpg",
        alt: "StudyOS's statistics page, showing focus hours, quiz scores and streaks",
        width: 1352,
        height: 545,
      },
    ],
  },
  {
    slug: "atlas",
    title: "Atlas",
    kind: "Visual knowledge tool",
    year: "2026",
    summary:
      "Upload documents, spreadsheets or raw text and get them turned into clear visual models.",
    links: {
      live: "https://atlas-ms.vercel.app",
      source: "https://github.com/bigswiftttt/atlas",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: {
      src: "/work/atlas.jpg",
      alt: "Atlas's document upload screen, adding a file to a research archive",
      width: 1366,
      height: 552,
    },
    problem:
      "Dense documents and unstructured data, research papers, spreadsheets, long reports, are hard to hold in your head as plain text. The structure of an argument or a dataset gets lost in paragraphs and rows. Atlas turns that structure into something visual instead, closer to how the idea actually looks in your mind than how it's forced to look on a page.",
    approach:
      "Documents are uploaded into a personal archive and organised into collections, so a body of research stays sorted rather than scattered across folders and tabs. From there, Atlas's synthesis step turns a document's content into a visual model of its ideas, surfacing structure that would otherwise take a careful re-read to notice. A network view then shows how separate entries in the archive relate to each other, useful once a collection grows past a handful of documents and the connections between them stop being obvious at a glance.",
    features: [
      { name: "Archive", description: "Upload documents and keep them organised in collections." },
      { name: "Synthesis", description: "Turns a document's content into a visual model of its ideas." },
      { name: "Network view", description: "Shows how entries in the archive relate to each other." },
    ],
    gallery: [
      {
        src: "/work/atlas-signup.jpg",
        alt: "The Atlas sign-up screen, styled around the idea of provisioning a research archive",
        width: 1366,
        height: 552,
      },
      {
        src: "/work/atlas-dashboard.jpg",
        alt: "The Atlas dashboard, showing recent documents and archive totals",
        width: 1352,
        height: 545,
      },
    ],
  },
  {
    slug: "glamorous-thread",
    title: "Glamorous Thread",
    kind: "Website and booking platform",
    year: "2026",
    summary:
      "A bespoke fashion studio's website, with collections, consultation booking, order tracking and a client account area.",
    links: {
      live: "https://glamorous-thread.vercel.app",
      source: "https://github.com/bigswiftttt/glamorous-thread",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: {
      src: "/work/glamorous-thread.jpg",
      alt: "The Glamorous Thread homepage, showing its hero and booking call to action",
      width: 1366,
      height: 552,
    },
    problem:
      "A made-to-measure fashion studio needs more than a brochure site with a phone number at the bottom. Clients expect to browse real collections, understand what a consultation involves, and book one without a back-and-forth message thread just to get started.",
    approach:
      "The site opens with the studio's own gold-on-black identity, then moves visitors from browsing into action: collections and a filterable gallery for bridal, native wear, corporate and event work, a consultation booking flow, and a signed-in account area for order tracking. The whole experience stays inside the studio's existing brand language rather than a generic template, since for a fashion business the site itself is part of the product's presentation.",
    features: [
      { name: "Collections and gallery", description: "Bridal, native wear, corporate and event work, browsable by category." },
      { name: "Booking", description: "Clients book a consultation directly from the site." },
      { name: "Client account area", description: "A signed-in area for order tracking and account details." },
    ],
    gallery: [
      {
        src: "/work/gt-gallery.jpg",
        alt: "The Glamorous Thread gallery, filterable by collection",
        width: 1366,
        height: 552,
      },
      {
        src: "/work/gt-login.jpg",
        alt: "The Glamorous Thread sign-in screen, for the client account area",
        width: 1352,
        height: 545,
      },
    ],
  },
];

export const servicesIntro = {
  heading: "Services",
  intro: "Three kinds of work, each taken from the first conversation to launch.",
};

export const services = [
  {
    name: "Product builds",
    description:
      "Full-stack web apps built from a brief to a deployed product, with sign-in, a database and the screens people actually use.",
  },
  {
    name: "AI features",
    description:
      "Summaries, analysis and generation added to a product, with the model kept to the parts of the job where it helps.",
  },
  {
    name: "Business websites",
    description:
      "Sites for studios, shops and small teams, including booking, galleries and client accounts.",
  },
];

export const processIntro = {
  heading: "How a project runs",
  intro: "Four steps, the same for every project.",
};

export const steps = [
  {
    name: "Brief",
    description: "We agree what the product has to do and who will use it.",
  },
  {
    name: "Prototype",
    description: "You react to something you can click before anything is final.",
  },
  {
    name: "MVP",
    description:
      "A working version with the core features live, so you can test it for real.",
  },
  {
    name: "Finished product",
    description: "Polished, deployed, handed over, and I stay available for fixes.",
  },
];

export const about = {
  heading: "About",
  lead: "I build digital products from idea to deployment.",
  body: "I'm a full-stack developer and university student interested in the space between design and engineering. I build web products with a strong focus on interface, usability, and the systems underneath them. I've worked on everything from AI-powered applications and developer tools to study platforms and client projects. I enjoy the entire process: figuring out what should exist, building it properly, and watching it become something real. Based in Nigeria. Open to freelance work and interesting problems.",
  portrait: {
    src: "/about/portrait.jpg",
    alt: "Portrait of Swift",
    width: 1000,
    height: 1250,
  },
};

export const skillsIntro = {
  heading: "Skills",
  intro: "Tools and technologies I build with.",
};

export const skills = [
  { group: "Languages", items: "TypeScript, JavaScript, HTML, CSS, SQL" },
  { group: "Frontend", items: "React, Next.js, Tailwind CSS" },
  { group: "Backend and data", items: "Node.js, Supabase, PostgreSQL" },
  { group: "AI", items: "Gemini API, Groq" },
  { group: "E-commerce", items: "Shopify, Liquid" },
  { group: "Tools and delivery", items: "Git, GitHub, Vercel" },
];

export const experienceIntro = {
  heading: "Experience",
  intro: "How I got here, in order.",
};

export const experience = [
  {
    period: "Dec 2023",
    title: "Montessori Kids Store",
    description:
      "Built a Shopify store for an online kids' shop based in Australia.",
  },
  {
    period: "Dec 2023 – Mar 2024",
    title: "New Love Expression",
    description:
      "Built a Shopify store for an online shop selling plus-size women's clothing and jewellery.",
  },
  {
    period: "Apr 2024 – Jul 2024",
    title: "CharlieLuxHome",
    description: "Built a Shopify website for a home décor retailer.",
  },
  {
    period: "Mid 2024 onward",
    title: "Learning to build with code",
    description:
      "Stepped away from Shopify work to learn full-stack development from the ground up.",
  },
  {
    period: "2026",
    title: "Full-stack projects",
    description:
      "Designed and built DevForge, StudyOS, Atlas and Glamorous Thread, shown in Selected work above.",
  },
];

export const contact = {
  heading: "Request a project",
  intro:
    "Tell me what you're building. I'll reply with questions or a plan, usually within a couple of days.",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}