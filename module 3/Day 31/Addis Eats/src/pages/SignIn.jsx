import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
  const { isAuthenticated, signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to="/checkout" replace />;
  }

  function handleSignIn(event) {
    event.preventDefault();

    signIn();

    const destination = location.state?.from?.pathname || "/checkout";

    navigate(destination, { replace: true });
  }

  return (
    <section className="siggnin">
      <h2>Sign In</h2>
      <from onSubmit={handleSignIn}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="password" required />
        </label>
        <button type="submit">Sign In</button>
      </from>
    </section>
  );
}

export default SignIn;
