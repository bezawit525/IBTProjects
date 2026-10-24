import { SITE_URL } from '@/lib/site';
import { getEvents } from '@/lib/events';
export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/events`, changeFrequency: 'daily', priority: 0.9 },
    ...getEvents().map((e) => ({ url: `${SITE_URL}/events/${e.slug}`, changeFrequency: 'daily', priority: 0.7 }))
  ];
}
