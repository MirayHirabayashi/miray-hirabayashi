import type { MetadataRoute } from "next";

const baseUrl = "https://miray-hirabayashi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/about",
    "/resume",
    "/contact",
    "/privacy",
    "/support",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
