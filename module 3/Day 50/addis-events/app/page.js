import Link from 'next/link';
import EventCard from '@/components/EventCard';
import { getEvents } from '@/lib/events';
import { seatsLeft } from '@/lib/registrations';

export const revalidate = 60; // static page, refreshed at most once a minute so seat counts stay roughly current

export default function Home() {
  const featured = getEvents().slice(0, 3);
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Addis Ababa · Events &amp; workshops</p>
          <h1>Reserve your seat at Addis Ababa’s next event</h1>
          <p className="lead">Find a concert, summit or hands-on workshop, reserve in under a minute, and keep every ticket in one place.</p>
          <div className="row">
            <Link href="/events" className="btn">Browse events</Link>
            <Link href="/signup" className="btn ghost">Create an account</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="soon">
        <h2 id="soon">Coming up soon</h2>
        <div className="grid">{featured.map((e) => <EventCard key={e.slug} event={e} seatsLeft={seatsLeft(e.slug)} />)}</div>
      </section>
      <section aria-labelledby="how">
        <h2 id="how">How it works</h2>
        <ol className="steps">
          <li><span>1</span><h3>Pick an event</h3><p>Search by title, topic or place.</p></li>
          <li><span>2</span><h3>Reserve in a minute</h3><p>Create an account once, then reserve up to five seats.</p></li>
          <li><span>3</span><h3>Show your code</h3><p>Your ticket and entry code live in your dashboard.</p></li>
        </ol>
      </section>
    </div>
  );
}
