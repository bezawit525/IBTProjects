import Link from 'next/link';
import { notFound } from 'next/navigation';
import { requireUser } from '@/lib/auth';
import { getForUser } from '@/lib/registrations';
import { getEvent, isPast } from '@/lib/events';
import { cancelAction } from '@/app/actions';
import SubmitButton from '@/components/SubmitButton';
import { formatDate, formatMoney } from '@/lib/format';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Your ticket', robots: { index: false } };

export default function TicketPage({ params }) {
  const user = requireUser(`/dashboard/registrations/${params.id}`);
  const reg = getForUser(user.id, params.id);   // attack 2: someone else's id returns null -> 404
  if (!reg) notFound();
  const event = getEvent(reg.eventSlug);
  return (
    <div className="narrow">
      <p><Link href="/dashboard">Back to your tickets</Link></p>
      <h1>{event.title}</h1>
      <article className={`ticket cat-${event.category}`} aria-label="Ticket">
        {event.image && <img src={event.image} alt={event.imageAlt || ''} width="800" height="450" />}
        <div className="ticket-row">
        <div className="card-body">
          <p className="tag">{reg.status === 'confirmed' ? 'Confirmed' : 'Cancelled'}</p>
          <p><strong>{reg.attendeeName}</strong> · {reg.quantity} {event.type === 'workshop' ? 'seat' : 'ticket'}{reg.quantity === 1 ? '' : 's'}</p>
          <p>{formatDate(event.date)}</p>
          <p className="muted">{event.location}</p>
          <p>Total to pay at the door: <strong>{formatMoney(reg.total)}</strong></p>
        </div>
        <div className="card-stub"><p className="seats">Entry code</p><p className="code">{reg.code}</p></div>
        </div>
      </article>
      {reg.status === 'confirmed' && !isPast(event) && (
        <form action={cancelAction}>
          <input type="hidden" name="id" value={reg.id} />
          <SubmitButton className="btn danger" pendingText="Cancelling…">Cancel this reservation</SubmitButton>
        </form>
      )}
    </div>
  );
}
