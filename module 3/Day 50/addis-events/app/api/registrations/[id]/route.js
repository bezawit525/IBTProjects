import { getUser } from '@/lib/auth';
import { cancelForUser } from '@/lib/registrations';

// Same two checks as cancelAction, reachable with fetch() so the attacks can be run from the console:
//   await fetch('/api/registrations/<id>', { method: 'DELETE' })
export async function DELETE(_req, { params }) {
  const user = getUser();
  if (!user) return Response.json({ error: 'Sign in required.' }, { status: 401 });
  const result = cancelForUser(user.id, params.id);
  if (!result.ok) return Response.json({ error: 'Not found.' }, { status: 404 });
  return Response.json({ ok: true });
}
