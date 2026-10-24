'use client';
// Client component: search/filter state lives in the browser, so no network round-trip per keystroke.
import { useMemo, useState } from 'react';
import EventCard from './EventCard';

export default function EventBrowser({ events }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events.filter((e) => (type === 'all' || e.type === type) && (!q || (e.title + ' ' + e.summary + ' ' + e.location).toLowerCase().includes(q)));
  }, [events, query, type]);

  return (
    <>
      <div className="filters" role="search">
        <label>Search events
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title, topic or place" />
        </label>
        <label>Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">All events</option>
            <option value="ticket">Ticketed events</option>
            <option value="workshop">Workshops</option>
          </select>
        </label>
      </div>
      <p aria-live="polite" className="muted">{shown.length} event{shown.length === 1 ? '' : 's'} found</p>
      {shown.length === 0 ? (
        <div className="empty">
          <h2>No events match your search</h2>
          <p>Try a shorter search or switch the type back to “All events”.</p>
          <button className="btn secondary" onClick={() => { setQuery(''); setType('all'); }}>Clear filters</button>
        </div>
      ) : (
        <div className="grid">{shown.map((e) => <EventCard key={e.slug} event={e} seatsLeft={e.seatsLeft} />)}</div>
      )}
    </>
  );
}
