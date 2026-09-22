"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<"initial" | "hidden" | "shown">("initial");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setState("shown");
            return;
        }

        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
            setState("shown");
            return;
        }

        setState("hidden");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState("shown");
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            data-state={state}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}