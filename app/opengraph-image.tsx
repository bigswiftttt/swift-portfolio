import { ImageResponse } from "next/og";
import { hero, site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0b0a",
          backgroundImage:
            "radial-gradient(120% 100% at 50% 0%, rgba(212,185,138,0.16), transparent 60%)",
          color: "#efe9df",
          padding: "76px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: -0.5 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {hero.headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 44,
              height: 3,
              width: 260,
              background: "#d4b98a",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}