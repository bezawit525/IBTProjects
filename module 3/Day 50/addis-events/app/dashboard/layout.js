import { requireUser } from '@/lib/auth';
import { signOutAction } from '@/app/actions';
import SubmitButton from '@/components/SubmitButton';

export const metadata = { title: 'My tickets', robots: { index: false } };

export default function DashboardLayout({ children }) {
  const user = requireUser('/dashboard');
  return (
    <div className="page">
      <div className="bar">
        <p>Signed in as <strong>{user.name}</strong></p>
        <form action={signOutAction}><SubmitButton className="btn secondary small" pendingText="Signing out…">Sign out</SubmitButton></form>
      </div>
      {children}
    </div>
  );
}
