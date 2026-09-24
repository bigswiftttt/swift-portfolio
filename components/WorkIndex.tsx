import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";
import { Reveal } from "./Reveal";

/* A different pool of light for each placeholder, so cards without a screenshot don't look alike. */
const glows = ["20% 0%", "90% 10%", "10% 100%", "80% 90%"];

function Plate({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt=""
        width={project.image.width}
        height={project.image.height}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="work-card-image h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      className="flex h-full w-full flex-col justify-end p-6"
      style={{
        background: `radial-gradient(120% 90% at ${glows[index % glows.length]}, color-mix(in srgb, var(--accent) 32%, transparent), transparent 62%), linear-gradient(160deg, var(--paper), var(--bench))`,
      }}
    >
      <span className="font-display text-3xl leading-none tracking-tight">
        {project.title}
      </span>
    </div>
  );
}

/**
 * The project grid. Every card shows its screenshot at all times, on phone and
 * desktop alike. Desktop adds a hover moment (the image lifts, the card's
 * siblings dim) but seeing the work never depends on a pointer existing.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="work-grid grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={index * 90}>
          <Link href={`/work/${project.slug}`} className="work-card group block">
            <div className="work-card-frame relative overflow-hidden border border-rule">
              <div style={{ aspectRatio: "1366 / 552" }}>
                <Plate project={project} index={index} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <span className="title work-title text-[length:clamp(1.5rem,2.6vw,2.25rem)]">
                {project.title}
              </span>
              <span className="text-graphite md:shrink-0">
                {project.kind}, {project.year}
              </span>
            </div>
            <p className="measure mt-2 text-graphite">{project.summary}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}