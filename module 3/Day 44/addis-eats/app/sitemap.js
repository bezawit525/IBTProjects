import { getSeoDishes } from "../lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap() {
  const dishes = getSeoDishes();

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/menu`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...dishes.map((dish) => ({
      url: `${siteUrl}/menu/${dish.id}`,
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];
}
