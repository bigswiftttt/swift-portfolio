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
   * A screenshot for the hover preview. Save the file in /public/work/ and fill
   * this in, for example:
   * image: { src: "/work/devforge.png", alt: "The DevForge architecture graph", width: 1600, height: 1100 }
   * Until then the preview shows a designed placeholder.
   */
  image?: { src: string; alt: string; width: number; height: number };
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