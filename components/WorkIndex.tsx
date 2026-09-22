"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/site";
import { Reveal } from "./Reveal";

const PREVIEW_W = 340;
const PREVIEW_H = 240;

const glows = [
    "20% 0%",
    "90% 10%",
    "10% 100%",
    "80% 90%",
];

function Plate({ project, index }: { project: Project; index: number }) {
    if (project.image) {
        return (
            <Image
                src={project.image.src}
                alt=""
                width={project.image.width}
                height={project.image.height}
                sizes="340px"
                className="h-full w-full object-cover"
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
            <span className="mt-2 text-sm text-graphite">
                {project.kind}, {project.year}
            </span>
        </div>
    );
}

export function WorkIndex({ projects }: { projects: Project[] }) {
    const [active, setActive] = useState<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const list = listRef.current;
        const preview = previewRef.current;
        if (!list || !preview) return;
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;
        let frame = 0;
        let placed = false;

        const render = () => {
            const ease = reduced ? 1 : 0.14;
            x += (targetX - x) * ease;
            y += (targetY - y) * ease;
            preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            frame =
                Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1
                    ? requestAnimationFrame(render)
                    : 0;
        };

        const onMove = (event: PointerEvent) => {
            targetX = Math.min(event.clientX + 28, window.innerWidth - PREVIEW_W - 16);
            targetY = Math.max(
                88,
                Math.min(event.clientY - PREVIEW_H / 2, window.innerHeight - PREVIEW_H - 16),
            );
            if (!placed) {
                placed = true;
                x = targetX;
                y = targetY;
            }
            if (!frame) frame = requestAnimationFrame(render);
        };

        const onLeave = () => {
            placed = false;
            setActive(null);
        };

        list.addEventListener("pointermove", onMove, { passive: true });
        list.addEventListener("pointerleave", onLeave);

        return () => {
            list.removeEventListener("pointermove", onMove);
            list.removeEventListener("pointerleave", onLeave);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <>
            <ul ref={listRef} className="work-list border-b border-rule">
                {projects.map((project, index) => (
                    <li key={project.slug} className="work-row">
                        <Reveal delay={index * 90}>
                            <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-link grid gap-x-8 gap-y-3 py-9 md:grid-cols-12 md:items-baseline md:py-12"
                            onMouseEnter={() => setActive(index)}
                            >
                            <span className="title work-title md:col-span-5">
                                {project.title}
                            </span>
                            <span className="measure text-graphite md:col-span-4">
                                {project.summary}
                            </span>
                            <span className="text-graphite md:col-span-3 md:text-right">
                                {project.kind}, {project.year}
                            </span>
                            <span className="sr-only">(opens the live site in a new tab)</span>
                            </a>
                        </Reveal>
                    </li>
                ))}
            </ul>

            <div
                ref={previewRef}
                className="work-preview"
                data-active={active !== null}
                aria-hidden="true"
            >
                <div className="work-preview-frame">
                    {projects.map((project, index) => (
                        <div
                            key={project.slug}
                            className="work-plate"
                            data-on={active === index}
                        >
                            <Plate project={project} index={index} />
                        </div>
                    ))}
                </div>
            </div>
    </>
  );
}