import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechHive",
    short_name: "TechHive",
    description:
      "TechHive LLP — IT consulting, custom software, and AI-powered products.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#60a5fa",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
