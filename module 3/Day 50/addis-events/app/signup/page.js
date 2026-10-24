import AuthForm from '@/components/AuthForm';
import { safeNext } from '@/lib/format';
export const metadata = { title: 'Create an account', robots: { index: false } };
export default function SignUp({ searchParams }) {
  return (
    <div className="page narrow">
      <h1>Create an account</h1>
      <AuthForm mode="signup" next={safeNext(searchParams?.next)} />
    </div>
  );
}
