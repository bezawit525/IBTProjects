import { Link } from 'react-router-dom'
import { getLastOrder } from '../api/orders.js'
import plants from '../assets/plants.jpg'
import { CheckCircleIcon } from '../ui/Icons.jsx'
import { money } from '../ui/format.js'

export default function OrderSuccessPage() {
  const order = getLastOrder()

  if (!order) {
    return (
      <section className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-serif text-3xl">No recent order</h1>
        <p className="mt-3 text-muted">Your confirmation appears here right after you place an order.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-clay px-8 py-3 text-sm font-semibold text-white hover:bg-clay-dark">Continue Shopping</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-5 py-10">
      <div className="text-center">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-ok" />
        <h1 className="mt-4 font-serif text-3xl">Thank you for your order!</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Your order has been successfully placed, {order.customer.fullName.split(' ')[0]}. We'll be in touch on {order.customer.phone} about delivery.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_220px]">
        <div>
          <div className="rounded-lg bg-sand py-5 text-center">
            <p className="text-xs text-muted">Order Reference</p>
            <p className="font-serif text-2xl font-semibold">{order.ref}</p>
          </div>
          <h2 className="mt-6 font-serif text-lg">Order Summary</h2>
          <ul className="mt-3 divide-y divide-line">
            {order.items.map((i) => (
              <li key={i.id} className="flex items-center gap-3 py-3 text-sm">
                <img src={i.image} alt="" className="h-12 w-12 rounded-md object-cover" />
                <span className="flex-1">{i.name} <span className="text-muted">× {i.qty}</span></span>
                <span>{money(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="space-y-1 border-t border-line pt-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted">Shipping</dt><dd>{money(order.shipping)}</dd></div>
            <div className="flex justify-between font-bold"><dt>Total</dt><dd>{money(order.total)}</dd></div>
          </dl>
        </div>
        <img src={plants} alt="" className="hidden h-full w-full rounded-xl object-cover md:block" />
      </div>

      <Link to="/" className="mx-auto mt-8 block max-w-sm rounded-md bg-clay py-3 text-center text-sm font-semibold text-white hover:bg-clay-dark">Continue Shopping</Link>
    </section>
  )
}
