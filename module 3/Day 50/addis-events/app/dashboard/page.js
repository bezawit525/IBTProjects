import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { listForUser } from '@/lib/registrations';
import { getEvent, isPast } from '@/lib/events';
import { formatMoney, formatShortDate } from '@/lib/format';

export const dynamic = 'force-dynamic'; // per-user data: never cached or shared

export default function Dashboard() {
  const user = requireUser('/dashboard');        // layer 2
  const regs = listForUser(user.id);             // scoped query: only this user's rows
  const active = regs.filter((r) => r.status === 'confirmed');
  const upcoming = active.filter((r) => !isPast(getEvent(r.eventSlug)));
  const seats = active.reduce((n, r) => n + r.quantity, 0);
  const spend = active.reduce((n, r) => n + r.total, 0);
  const byType = { ticket: 0, workshop: 0 };
  active.forEach((r) => { byType[getEvent(r.eventSlug).type] += r.quantity; });
  const max = Math.max(1, byType.ticket, byType.workshop);

  return (
    <>
      <h1>Your tickets</h1>
      {regs.length === 0 ? (
        <div className="empty">
          <h2>You have not reserved anything yet</h2>
          <p>Pick an event and your ticket will appear here with its entry code.</p>
          <Link href="/events" className="btn">Find an event</Link>
        </div>
      ) : (
        <>
          <ul className="stats">
            <li><span className="n">{upcoming.length}</span> upcoming event{upcoming.length === 1 ? '' : 's'}</li>
            <li><span className="n">{seats}</span> seat{seats === 1 ? '' : 's'} reserved</li>
            <li><span className="n">{formatMoney(spend)}</span> total to pay at the door</li>
          </ul>
          <section aria-labelledby="mix">
            <h2 id="mix">Seats by type</h2>
            {['ticket', 'workshop'].map((t) => (
              <div className="barrow" key={t}>
                <span>{t === 'ticket' ? 'Ticketed events' : 'Workshops'}</span>
                <span className="track" role="img" aria-label={`${byType[t]} seats`}><span className="fill" style={{ width: `${(byType[t] / max) * 100}%` }} /></span>
                <span>{byType[t]}</span>
              </div>
            ))}
          </section>
          <section aria-labelledby="all">
            <h2 id="all">All reservations</h2>
            <div className="scroll">
              <table>
                <caption className="sr">Your reservations</caption>
                <thead><tr><th scope="col">Event</th><th scope="col">Date</th><th scope="col">Seats</th><th scope="col">Total</th><th scope="col">Status</th><th scope="col"><span className="sr">Details</span></th></tr></thead>
                <tbody>
                  {regs.map((r) => {
                    const e = getEvent(r.eventSlug);
                    return (
                      <tr key={r.id}>
                        <td>{e.title}</td><td>{formatShortDate(e.date)}</td><td>{r.quantity}</td><td>{formatMoney(r.total)}</td>
                        <td><span className={`badge ${r.status}`}>{r.status === 'confirmed' ? 'Confirmed' : 'Cancelled'}</span></td>
                        <td><Link href={`/dashboard/registrations/${r.id}`}>View ticket<span className="sr"> for {e.title}</span></Link></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </>
  );
}
