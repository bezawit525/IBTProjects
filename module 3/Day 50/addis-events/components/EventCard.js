import Link from 'next/link';
import { formatMoney, formatShortDate } from '@/lib/format';

export default function EventCard({ event, seatsLeft }) {
  const label = event.type === 'workshop' ? 'Workshop' : 'Ticketed event';
  const low = seatsLeft > 0 && seatsLeft <= 10;
  return (
    <article className="card">
      <img src={event.image} alt={event.imageAlt} width="800" height="450" loading="lazy" />
      <span className={`chip chip-${event.type}`}>{label}</span>
      <div className="card-body">
        <h3><Link href={`/events/${event.slug}`}>{event.title}</Link></h3>
        <p className="muted">{event.summary}</p>
        <p className="meta">{formatShortDate(event.date)} · {event.location}</p>
      </div>
      <div className="card-stub">
        <p className="price">{formatMoney(event.price)}</p>
        <p className={`seats${low ? ' low' : ''}`}>{seatsLeft === 0 ? 'Sold out' : low ? `Only ${seatsLeft} left` : `${seatsLeft} seats left`}</p>
      </div>
    </article>
  );
}
