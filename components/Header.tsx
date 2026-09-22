"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
    { href: "/#work", label: "Work" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

/**
 * Fixed to the top. It tucks away while you read down the page and returns the
 * moment you scroll back up, or when the pointer moves to the top of the screen,
 * gaining a frosted backing once you leave the top.
 */
export function Header() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const overHeader = useRef(false);

    useEffect(() => {
        let last = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 24);
            if (Math.abs(y - last) > 6) {
                setHidden(y > last && y > 120 && !overHeader.current);
                last = y;
            }
        };

        /* Bring the header back whenever the pointer goes to the top of the screen. */
        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType === "mouse" && event.clientY < 96) setHidden(false);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("pointermove", onPointerMove);
        };
    }, []);

    return (
        <header
            onPointerEnter={() => {
                overHeader.current = true;
            }}
            onPointerLeave={() => {
                overHeader.current = false;
            }}
            className={[
                "fixed inset-x-0 top-0 z-30 border-b transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
                hidden ? "-translate-y-full focus-within:translate-y-0" : "translate-y-0",
                scrolled
                    ? "border-rule bg-bench/75 backdrop-blur-md"
                    : "border-transparent bg-transparent",
            ].join(" ")}
        >
            <div className="wrap flex flex-wrap items-center justify-between gap-x-6 py-2 md:py-6">
                <Link
                    href="/"
                    className="font-display text-2xl tracking-tight"
                    aria-label={`${site.name}, home`}
                >
                    {site.name}
                </Link>
                <div className="flex items-center gap-1 md:gap-3">
                    <nav aria-label="Main">
                        <ul className="flex items-center gap-2.5 text-sm md:gap-7 md:text-[0.9375rem]">
                            {nav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="nav-link py-3">
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}