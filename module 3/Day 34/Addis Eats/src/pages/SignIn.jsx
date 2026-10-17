import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function SignIn() {
  const { isAuthenticated, signIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/checkout" replace />;
  }

  function handleSignIn(event) {
    event.preventDefault();

    signIn();

    const destination = location.state?.from?.pathname || "/checkout";

    navigate(destination, {
      replace: true,
    });
  }

  return (
    <section className="signin">
      <h2>Sign In</h2>

      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="Password" required />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </section>
  );
}

export default SignIn;
