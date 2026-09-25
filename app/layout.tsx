import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";
import "./sections.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s, ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
};

/* Runs before first paint. Dark is the default; a saved light choice is respected. */
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

/*
  Person structured data (JSON-LD). This is what tells Google that
  "Muhammad Swift" and "Awwal Bashir" are the same person, rather than two
  unrelated names that happen to appear on the same page.
*/
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.displayName,
  alternateName: site.legalName,
  url: site.url,
  jobTitle: "Full-stack developer",
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.x],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <SmoothScroll />
        <Cursor />
        <div className="scroll-progress" aria-hidden="true" />

        <a
          href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bench"
        >
        Skip to content
      </a>
      <Header />
      <main id="main" className="pt-[3.75rem] md:pt-[5.75rem]">
        {children}
      </main>
      <Footer />
    </body>
    </html>
  );
}