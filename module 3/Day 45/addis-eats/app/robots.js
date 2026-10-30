export default function robots() {
  const base = process.env.SITE_URL || "http://localhost:3000";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/menu"],
      disallow: ["/checkout", "/orders", "/kitchen", "/signin", "/api"]
    },
    sitemap: `${base}/sitemap.xml`
  };
}
