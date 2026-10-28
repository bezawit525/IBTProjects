import Script from "next/script";

export default function DeferredAnalytics() {
  return <Script src="YOUR_REAL_ANALYTICS_SCRIPT_URL" strategy="lazyOnload" />;
}
