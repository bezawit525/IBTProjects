import EventBrowser from '@/components/EventBrowser';
import { getEvents } from '@/lib/events';
import { seatsLeft } from '@/lib/registrations';

export const metadata = { title: 'All events', description: 'Every upcoming event and workshop in Addis Ababa.', alternates: { canonical: '/events' } };
export const revalidate = 60;

export default function EventsPage() {
  // Fetched on the server, handed to the client component as plain data.
  const events = getEvents().map((e) => ({ ...e, seatsLeft: seatsLeft(e.slug) }));
  return (
    <div className="page">
      <h1>All events</h1>
      <EventBrowser events={events} />
    </div>
  );
}
