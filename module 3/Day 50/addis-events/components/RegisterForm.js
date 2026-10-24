'use client';
import { useFormState } from 'react-dom';
import SubmitButton from './SubmitButton';
import { registerAction } from '@/app/actions';

export default function RegisterForm({ slug, type, price, seatsLeft }) {
  const [state, formAction] = useFormState(registerAction, null);
  const noun = type === 'workshop' ? 'seat' : 'ticket';
  if (seatsLeft === 0) return <p className="notice">Sold out. Check back: cancelled {noun}s are released.</p>;
  return (
    <form action={formAction} className="stack" noValidate>
      <input type="hidden" name="slug" value={slug} />
      <label>Attendee name
        <input name="attendeeName" required maxLength={80} autoComplete="name" />
      </label>
      <label>Number of {noun}s
        <input name="quantity" type="number" min="1" max={Math.min(5, seatsLeft)} defaultValue="1" required />
      </label>
      <p className="muted">{price === 0 ? 'Free event.' : 'Pay at the door. Your total appears on your ticket.'}</p>
      <p role="alert" aria-live="polite" className="error">{state?.error}</p>
      <SubmitButton pendingText="Reserving…">Reserve {noun}</SubmitButton>
    </form>
  );
}
