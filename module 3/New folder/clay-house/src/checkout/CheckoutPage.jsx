import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder } from '../api/orders.js'
import useCart from '../cart/useCart.js'
import { money } from '../ui/format.js'
import Field from './Field.jsx'
import { validate } from './validate.js'

const EMPTY = { fullName: '', phone: '', address: '', notes: '' }

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { items, subtotal, shipping, total, clear } = useCart()
  // Form state lives here and nowhere else.
  const [form, setForm] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const errors = validate(form)
  const show = (name) => (touched[name] ? errors[name] : undefined)
  const bind = (name) => ({
    name,
    value: form[name],
    onChange: (e) => setForm((f) => ({ ...f, [name]: e.target.value })),
    onBlur: () => setTouched((t) => ({ ...t, [name]: true })),
    error: show(name),
  })

  if (items.length === 0 && !submitting) {
    return (
      <section className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-serif text-3xl">Nothing to check out yet</h1>
        <p className="mt-3 text-muted">Add a piece to your cart first.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-clay px-8 py-3 text-sm font-semibold text-white hover:bg-clay-dark">Browse the collection</Link>
      </section>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ fullName: true, phone: true, address: true })
    if (Object.keys(errors).length > 0) return
    setSubmitting(true)
    setSubmitError('')
    try {
      await createOrder({
        customer: { fullName: form.fullName.trim(), phone: form.phone.trim(), address: form.address.trim(), notes: form.notes.trim() },
        items, subtotal, shipping, total,
      })
      clear()
      navigate('/order-success', { replace: true })
    } catch {
      setSubmitError('We could not place your order. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:grid-cols-[1fr_340px]">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <h1 className="font-serif text-2xl">Delivery Information</h1>
        <Field label="Full Name" required placeholder="Enter your full name" autoComplete="name" {...bind('fullName')} />
        <Field label="Phone Number" required type="tel" placeholder="Enter your phone number" autoComplete="tel" {...bind('phone')} />
        <Field label="Delivery Address" required multiline placeholder="Street address, city, etc." autoComplete="street-address" {...bind('address')} />
        <Field label="Additional Notes (optional)" multiline placeholder="Any special instructions?" {...bind('notes')} />
        {submitError && <p role="alert" className="text-sm font-medium text-danger">⚠ {submitError}</p>}
        <button type="submit" disabled={submitting} className="w-full rounded-md bg-clay py-3 text-sm font-semibold text-white hover:bg-clay-dark disabled:opacity-60">
          {submitting ? 'Placing order…' : 'Place Order'}
        </button>
      </form>

      <aside className="h-fit rounded-xl border border-line bg-white p-5 md:sticky md:top-6" aria-label="Order summary">
        <h2 className="font-serif text-lg">Order Summary</h2>
        <ul className="mt-4 space-y-3">
          {items.map((i) => (
            <li key={i.id} className="flex items-center gap-3 text-xs">
              <img src={i.image} alt="" className="h-12 w-12 rounded-md object-cover" />
              <span className="flex-1"><span className="block font-semibold">{i.name}</span>{money(i.price)} × {i.qty}</span>
              <span>{money(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-4 space-y-1 border-t border-line pt-3 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd>{money(subtotal)}</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Shipping</dt><dd>{money(shipping)}</dd></div>
          <div className="flex justify-between pt-1 text-base font-bold"><dt>Total</dt><dd>{money(total)}</dd></div>
        </dl>
      </aside>
    </section>
  )
}
