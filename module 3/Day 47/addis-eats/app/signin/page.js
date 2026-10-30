import { getSession } from "../../lib/session";
import { redirect } from "next/navigation";
import { signIn } from "../actions";

export const metadata = { title: "Sign in", robots: { index: false, follow: false } };

function safeNext(value) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || value.includes("\\\\")) return "/";
  return value;
}

export default async function SignInPage({ searchParams }) {
  const user = await getSession();
  const query = await searchParams;
  const next = safeNext(query?.next);
  if (user) redirect(next);

  return (
    <main>
      <h1>Sign in</h1>
      <p>Use one of the demo accounts below to test the course project.</p>
      <div className="notice">
        <strong>Customer demo</strong>: 0911111111 / customer123<br />
        <strong>Staff demo</strong>: 0922222222 / staff123
      </div>
      <form className="form-card" action={signIn}>
        <input type="hidden" name="next" value={next} />
        <label>Phone number<input name="phone" inputMode="tel" pattern="09[0-9]{8}" placeholder="0911111111" required /></label>
        <label>Password<input name="password" type="password" required /></label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
