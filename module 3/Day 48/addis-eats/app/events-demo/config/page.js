export default function ConfigDemoPage() {
  const siteUrl = process.env.SITE_URL || "Site URL not configured";
  return <main><p className="eyebrow">Day 48</p><h1>Application Configuration</h1><section className="form-card"><h2>Public site URL</h2><p>{siteUrl}</p><p className="muted">Never display private environment variables in a page.</p></section></main>;
}
