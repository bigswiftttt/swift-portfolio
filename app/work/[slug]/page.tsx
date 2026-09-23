import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Roll } from "@/components/Roll";
import { projects } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.summary,
        openGraph: { title: project.title, description: project.summary },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProject(slug);
    if (!project) notFound();

    const index = projects.findIndex((p) => p.slug === project.slug);
    const next = projects[(index + 1) % projects.length];

    return (
        <article className="wrap pb-28 pt-10 md:pb-44 md:pt-16">
            <Reveal>
                <Link href="/#work" className="link text-graphite">
                    <Roll>All work</Roll>
                </Link>
            </Reveal>

            <header className="mt-8 md:mt-12">
                <Reveal>
                    <h1 className="display text-[length:clamp(2.75rem,8vw,7rem)]">
                        {project.title}
                    </h1>
                </Reveal>
                <Reveal delay={100}>
                    <p className="lead mt-6">{project.problem ?? project.summary}</p>
                </Reveal>
            </header>

            <Reveal delay={150}>
                <dl className="mt-12 grid gap-x-8 gap-y-6 border-y border-rule py-6 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
                    <div>
                        <dt className="text-graphite">Kind</dt>
                        <dd className="mt-1">{project.kind}</dd>
                    </div>
                    <div>
                        <dt className="text-graphite">Year</dt>
                        <dd className="mt-1">{project.year}</dd>
                    </div>
                    <div className="sm:col-span-2 md:col-span-2">
                        <dt className="text-graphite">Links</dt>
                        <dd className="mt-1 flex flex-wrap gap-x-5 gap-y-1">
                            <a
                                className="link"
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            Live site
                            </a>
                            {project.links.source && (
                                <a
                                    className="link"
                                    href={project.links.source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Source
                                </a>
                            )}
                        </dd>
                    </div>
                </dl>
            </Reveal>

    {
        project.image && (
            <Reveal delay={100}>
                <div className="mt-12 border border-rule md:mt-16">
                    <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image.width}
                        height={project.image.height}
                        sizes="(min-width: 1200px) 1100px, 90vw"
                        priority
                        className="h-auto w-full"
                    />
                </div>
            </Reveal>
        )
    }

    {
        project.approach && (
            <section className="mt-16 grid gap-4 border-t border-rule pt-10 md:mt-24 md:grid-cols-12 md:gap-8 md:pt-14">
                <Reveal className="md:col-span-3">
                    <h2 className="text-graphite">How it works</h2>
                </Reveal>
                <Reveal delay={80} className="md:col-span-8">
                    <p className="measure text-lg">{project.approach}</p>
                </Reveal>
            </section>
        )
    }

    {
        project.features && (
            <section className="mt-16 md:mt-24">
                <Reveal>
                    <h2 className="text-graphite">What it does</h2>
                </Reveal>
                <ul className="mt-6 border-b border-rule">
                    {project.features.map((feature, i) => (
                        <li key={feature.name}>
                            <Reveal delay={i * 80}>
                                <div className="rule-draw grid gap-1 py-6 md:grid-cols-12 md:gap-8">
                                    <h3 className="subtitle md:col-span-4">{feature.name}</h3>
                                    <p className="measure text-graphite md:col-span-7 md:col-start-6">
                                        {feature.description}
                                    </p>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }

    {
        project.gallery && project.gallery.length > 0 && (
            <section className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 md:gap-8">
                {project.gallery.map((image) => (
                    <Reveal key={image.src}>
                        <div className="border border-rule">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                sizes="(min-width: 768px) 50vw, 90vw"
                                className="h-auto w-full"
                            />
                        </div>
                    </Reveal>
                ))}
            </section>
        )
    }

    <nav
        aria-label="Next project"
        className="mt-20 border-t border-rule pt-10 md:mt-32"
    >
        <Reveal>
            <p className="text-graphite">Next project</p>
            <Link href={`/work/${next.slug}`} className="title link mt-2 inline-block">
                <Roll>{next.title}</Roll>
            </Link>
        </Reveal>
    </nav>
        </article>
  );
}