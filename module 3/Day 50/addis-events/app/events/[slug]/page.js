import Link from 'next/link';
import { notFound } from 'next/navigation';
import RegisterForm from '@/components/RegisterForm';
import { getEvent, getEvents, isPast } from '@/lib/events';
import { seatsLeft } from '@/lib/registrations';
import { formatDate, formatMoney } from '@/lib/format';

export const revalidate = 60;
export const dynamicParams = false;
export const generateStaticParams = () => getEvents().map((e) => ({ slug: e.slug }));

export function generateMetadata({ params }) {
  const e = getEvent(params.slug);
  if (!e) return {};
  return { title: e.title, description: e.summary, alternates: { canonical: `/events/${e.slug}` }, openGraph: { title: e.title, description: e.summary, url: `/events/${e.slug}`, images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: e.title }] } };
}

export default function EventPage({ params }) {
  const event = getEvent(params.slug);
  if (!event) notFound();
  const left = seatsLeft(event.slug);
  const past = isPast(event);
  return (
    <div className="page narrow">
      <p><Link href="/events">Back to all events</Link></p>
      {event.image && <img className="cover" src={event.image} alt={event.imageAlt || ''} width="800" height="450" />}
      <h1>{event.title}</h1>
      <dl className="facts">
        <div><dt>When</dt><dd>{formatDate(event.date)}</dd></div>
        <div><dt>Where</dt><dd>{event.location}</dd></div>
        <div><dt>Price</dt><dd>{formatMoney(event.price)} per {event.type === 'workshop' ? 'seat' : 'ticket'}</dd></div>
        <div><dt>Availability</dt><dd>{left === 0 ? 'Sold out' : `${left} of ${event.capacity} left`}</dd></div>
      </dl>
      <p>{event.description}</p>
      <section className="panel" aria-labelledby="reserve">
        <h2 id="reserve">Reserve</h2>
        {past ? <p className="notice">This event has ended.</p> : <RegisterForm slug={event.slug} type={event.type} price={event.price} seatsLeft={left} />}
        <p className="muted">You will be asked to sign in first if you have not already.</p>
      </section>
    </div>
  );
}
