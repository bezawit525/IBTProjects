'use client';
// Client component: needs useFormStatus (browser-only hook) to disable while pending.
import { useFormStatus } from 'react-dom';

export default function SubmitButton({ children, pendingText = 'Working…', className = 'btn' }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={className} disabled={pending} aria-disabled={pending}>
      {pending ? pendingText : children}
    </button>
  );
}
