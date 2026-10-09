import { Link } from "react-router-dom";

function NotFound() {
  return (
    <secction className="not-found">
      <h2>Page Not Found</h2>
      <p>sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </secction>
  );
}

export default NotFound;
