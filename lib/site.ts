/**
 * Site-wide details and page content. Every page reads from here, so you only change things once.
 * More content (contact) will be added to this file in later steps.
 */

export const site = {
  /** The name shown in the header, footer and page titles. */
  name: "Swift",
  /** Set NEXT_PUBLIC_SITE_URL when you get a custom domain. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://swiftworks.vercel.app",
  title: "Swift, full-stack developer",
  description:
    "Full-stack developer building AI-powered web apps and client websites, from idea to deployment. Based in Nigeria, open to freelance work.",
  email: "bashirawwal30@gmail.com",
  github: "https://github.com/bigswiftttt",
  x: "https://x.com/_big_swift",
  location: "Working remotely",
};

export const hero = {
  headline: "I build web products, carefully.",
  intro:
    "Full-stack developer building AI-powered web apps and business websites, from the first sketch to the deployed product.",
  availability: "Available for freelance projects and collaborations.",
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
    image: {
      src: "/work/devforge.jpg",
      alt: "The DevForge dashboard showing a repository's files, folders, dependencies and language breakdown",
      width: 1366,
      height: 552,
    },
    problem:
      "Getting your bearings in an unfamiliar codebase usually means opening folders one by one. DevForge shows the whole shape of a repository in a single dashboard.",
    approach:
      "Connect a GitHub repository and DevForge reads its real file tree and package.json, then charts the results: file and folder counts, a dependency breakdown, and a language split, with an AI-written report summarising what it finds.",
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
    image: {
      src: "/work/studyos.jpg",
      alt: "The StudyOS dashboard showing study streak, courses, pending tasks and focus time",
      width: 1366,
      height: 552,
    },
    problem:
      "Students study from scattered notes with no plan, then panic before exams. StudyOS keeps materials, study time and deadlines in one place.",
    approach:
      "Every course lives on a dashboard with a study streak, a course list and a task list. An AI assistant turns uploaded notes into summaries and flashcards, and a focus timer keeps study sessions structured.",
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
    image: {
      src: "/work/atlas.jpg",
      alt: "Atlas's document upload screen, adding a file to a research archive",
      width: 1366,
      height: 552,
    },
    problem:
      "Dense documents and unstructured data are hard to understand as text. Atlas turns them into something visual instead.",
    approach:
      "Documents are added to a personal archive, organised into collections. From there, Atlas synthesises them into visual models, so the structure of an idea is something you can see rather than only read.",
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
    image: {
      src: "/work/glamorous-thread.jpg",
      alt: "The Glamorous Thread homepage, showing its hero and booking call to action",
      width: 1366,
      height: 552,
    },
    problem:
      "A made-to-measure fashion studio needs more than a brochure site. Clients book consultations, browse collections and follow their orders.",
    approach:
      "The site presents the studio's collections and gallery, then moves visitors into booking a consultation, all within the studio's own gold-on-black identity.",
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
  stack: [
    { group: "Interface", items: "Next.js, React, TypeScript, Tailwind CSS" },
    { group: "Data and back end", items: "Node.js, Supabase, PostgreSQL" },
    { group: "AI", items: "Gemini API, Groq" },
    { group: "Delivery", items: "Vercel, Git, GitHub" },
  ],
};

export const contact = {
  heading: "Request a project",
  intro:
    "Tell me what you're building. I'll reply with questions or a plan, usually within a couple of days.",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}