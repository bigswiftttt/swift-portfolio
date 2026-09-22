"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;
        let frame = 0;
        let seen = false;

        const render = () => {
            x += (targetX - x) * 0.2;
            y += (targetY - y) * 0.2;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            if (Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1) {
                frame = requestAnimationFrame(render);
            } else {
                frame = 0;
            }
        };

        const onMove = (event: PointerEvent) => {
            targetX = event.clientX;
            targetY = event.clientY;
            if (!seen) {
                seen = true;
                x = targetX;
                y = targetY;
                el.dataset.visible = "true";
            }
            const over = (event.target as Element | null)?.closest(
                "a, button, [data-cursor]",
            );
            el.dataset.hover = over ? "true" : "false";
            if (!frame) frame = requestAnimationFrame(render);
        };

        const onLeave = () => {
            seen = false;
            el.dataset.visible = "false";
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);

        return () => {
            window.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("pointerleave", onLeave);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="cursor"
            aria-hidden="true"
            data-visible="false"
            data-hover="false"
        />
    );
}