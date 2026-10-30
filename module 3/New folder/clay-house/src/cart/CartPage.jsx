import { Link } from 'react-router-dom'
import QuantityStepper from '../ui/QuantityStepper.jsx'
import { TrashIcon } from '../ui/Icons.jsx'
import { money } from '../ui/format.js'
import useCart from './useCart.js'

export default function CartPage() {
  const { items, subtotal, shipping, total, setQty, remove } = useCart()

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-serif text-3xl">Your Shopping Cart</h1>
        <p className="mt-4 text-muted">Your cart is empty. Find a piece to take home.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-clay px-8 py-3 text-sm font-semibold text-white hover:bg-clay-dark">
          Browse the collection
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-5 py-10">
      <h1 className="font-serif text-3xl">Your Shopping Cart</h1>

      <div className="mt-8 hidden grid-cols-[1fr_90px_130px_90px_32px] gap-4 border-b border-line pb-3 text-xs font-semibold text-muted sm:grid">
        <span>Product</span><span>Price</span><span>Quantity</span><span>Total</span><span />
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b border-line py-4 sm:grid-cols-[1fr_90px_130px_90px_32px]">
            <Link to={`/products/${item.id}`} className="col-span-2 flex items-center gap-4 sm:col-span-1">
              <img src={item.image} alt="" className="h-16 w-16 rounded-lg object-cover" />
              <span className="text-sm font-semibold">{item.name}</span>
            </Link>
            <span className="hidden text-sm sm:block">{money(item.price)}</span>
            <QuantityStepper value={item.qty} max={item.stock} onChange={(q) => setQty(item.id, q)} label={`Quantity of ${item.name}`} />
            <span className="hidden text-sm font-medium sm:block">{money(item.price * item.qty)}</span>
            <button type="button" onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`} className="text-muted hover:text-danger">
              <TrashIcon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>

      <dl className="ml-auto mt-6 w-full max-w-xs space-y-2 text-sm">
        <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd>{money(subtotal)}</dd></div>
        <div className="flex justify-between"><dt className="text-muted">Shipping</dt><dd>{money(shipping)}</dd></div>
        <div className="flex justify-between border-t border-line pt-2 text-base font-bold"><dt>Total</dt><dd>{money(total)}</dd></div>
      </dl>

      <Link to="/checkout" className="mt-6 block rounded-md bg-clay py-3 text-center text-sm font-semibold text-white hover:bg-clay-dark">
        Proceed to Checkout
      </Link>
      <Link to="/" className="mt-5 inline-block text-sm text-muted hover:text-clay">← Continue Shopping</Link>
    </section>
  )
}
