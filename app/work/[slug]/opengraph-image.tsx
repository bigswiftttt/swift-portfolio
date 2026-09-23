import { ImageResponse } from "next/og";
import { getProject, projects } from "@/lib/site";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Case study";
  const kind = project ? `${project.kind}, ${project.year}` : "";

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
        <div style={{ display: "flex", fontSize: 30, letterSpacing: -0.5, opacity: 0.8 }}>
          Swift — case study
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#a39b8e" }}>
            {kind}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
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