'use client';
// Client component: holds the action's returned error state (useFormState).
import { useFormState } from 'react-dom';
import Link from 'next/link';
import SubmitButton from './SubmitButton';
import { signInAction, signUpAction } from '@/app/actions';

export default function AuthForm({ mode, next }) {
  const isSignUp = mode === 'signup';
  const [state, formAction] = useFormState(isSignUp ? signUpAction : signInAction, null);
  const q = next && next !== '/dashboard' ? `?next=${encodeURIComponent(next)}` : '';
  return (
    <form action={formAction} className="stack" noValidate>
      <input type="hidden" name="next" value={next} />
      {isSignUp && (
        <label>Full name
          <input name="name" autoComplete="name" required maxLength={80} />
        </label>
      )}
      <label>Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>Password
        <input name="password" type="password" required minLength={8} autoComplete={isSignUp ? 'new-password' : 'current-password'} />
      </label>
      <p role="alert" aria-live="polite" className="error">{state?.error}</p>
      <SubmitButton pendingText={isSignUp ? 'Creating account…' : 'Signing in…'}>
        {isSignUp ? 'Create account' : 'Sign in'}
      </SubmitButton>
      <p className="muted">
        {isSignUp ? <>Already registered? <Link href={'/signin' + q}>Sign in</Link></> : <>New here? <Link href={'/signup' + q}>Create an account</Link></>}
      </p>
    </form>
  );
}
