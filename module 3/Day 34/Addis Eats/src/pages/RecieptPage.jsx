import { Link } from "react-router-dom";

function ReceiptPage() {
  return (
    <section>
      <h2>Order Receipt</h2>

      <p>Your order confirmation will appear here.</p>

      <Link to="/menu">Return to Menu</Link>
    </section>
  );
}

export default ReceiptPage;
