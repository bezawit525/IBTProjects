import AuthForm from '@/components/AuthForm';
import { safeNext } from '@/lib/format';
export const metadata = { title: 'Sign in', robots: { index: false } };
export default function SignIn({ searchParams }) {
  return (
    <div className="page narrow">
      <h1>Sign in</h1>
      <p className="muted">Demo account: demo@example.com / demo1234</p>
      <AuthForm mode="signin" next={safeNext(searchParams?.next)} />
    </div>
  );
}
