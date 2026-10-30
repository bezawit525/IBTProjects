export default function sitemap() {
  const base = process.env.SITE_URL || "http://localhost:3000";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/menu`, changeFrequency: "daily", priority: 0.9 }
  ];
}
