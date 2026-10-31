import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Intellispace",
    short_name: "Intellispace",
    description: "AI, software and IoT automation solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0d",
    theme_color: "#090a0d",
    icons: [
      {
        src: "/assets/logo-white.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
