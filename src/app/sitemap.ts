import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const basURL = "https://travel-in-a-blink.vercel.app";
  return [
    {
      url: `${basURL}`,
      lastModified: new Date(),
    },
    {
      url: `${basURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${basURL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${basURL}/plans`,
      lastModified: new Date(),
    },
    {
      url: `${basURL}/reviews`,
      lastModified: new Date(),
    },
    {
      url: `${basURL}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${basURL}/contact`,
      lastModified: new Date(),
    },
  ];
}
