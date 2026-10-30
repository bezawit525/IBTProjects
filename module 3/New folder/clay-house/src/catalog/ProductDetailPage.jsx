import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../api/products.js'
import useCart from '../cart/useCart.js'
import useFetch from '../hooks/useFetch.js'
import ErrorMessage from '../ui/ErrorMessage.jsx'
import { BagIcon, StarIcon } from '../ui/Icons.jsx'
import QuantityStepper from '../ui/QuantityStepper.jsx'
import Spinner from '../ui/Spinner.jsx'
import { money } from '../ui/format.js'

function ProductView({ product }) {
  const { add } = useCart()
  const [imageIndex, setImageIndex] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const inStock = product.stock > 0

  const handleAdd = () => {
    add(product, qty)
    setAdded(true)
  }

  return (
    <section className="mx-auto grid max-w-5xl gap-8 px-5 py-10 md:grid-cols-[auto_1fr]">
      <div className="flex gap-3">
        {product.images.length > 1 && (
          <div className="flex flex-col gap-2">
            {product.images.map((src, i) => (
              <button key={src} type="button" onClick={() => setImageIndex(i)} aria-label={`Show photo ${i + 1}`} aria-pressed={i === imageIndex}
                className={`h-14 w-14 overflow-hidden rounded-md border-2 ${i === imageIndex ? 'border-clay' : 'border-line'}`}>
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
        <img src={product.images[imageIndex]} alt={product.name} className="aspect-square w-full max-w-sm rounded-xl bg-sand object-cover" />
      </div>

      <div>
        <h1 className="font-serif text-3xl">{product.name}</h1>
        <p className="mt-1 text-xl">{money(product.price)}</p>
        <p className="mt-2 flex items-center gap-1 text-sm text-muted">
          <span className="flex text-amber-500" aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="h-4 w-4" />)}</span>
          <span>({product.rating}) · {product.reviews} reviews</span>
        </p>
        <p className="mt-4 max-w-md text-sm text-muted">{product.description}</p>

        <dl className="mt-5 space-y-1 text-sm">
          <div className="flex gap-2"><dt className="text-muted">Category:</dt><dd>{product.category}</dd></div>
          <div className="flex gap-2"><dt className="text-muted">Availability:</dt>
            <dd className={`font-semibold ${inStock ? 'text-ok' : 'text-danger'}`}>{inStock ? 'In stock' : 'Sold out'}</dd></div>
        </dl>

        <div className="mt-5 flex items-center gap-3 text-sm">
          <span className="text-muted">Quantity:</span>
          <QuantityStepper value={qty} max={Math.max(product.stock, 1)} onChange={setQty} />
        </div>

        <button type="button" onClick={handleAdd} disabled={!inStock}
          className="mt-5 flex w-full max-w-sm items-center justify-center gap-2 rounded-md bg-clay py-3 text-sm font-semibold text-white hover:bg-clay-dark disabled:cursor-not-allowed disabled:opacity-50">
          <BagIcon className="h-5 w-5" /> Add to Cart
        </button>
        <p role="status" className="mt-3 min-h-5 text-sm text-ok">
          {added && <>Added to your cart. <Link to="/cart" className="underline">View cart</Link></>}
        </p>

        <h2 className="mt-8 font-serif text-lg">Product Details</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted">
          {product.details.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const { data: product, error, loading, retry } = useFetch(getProductById, id)

  if (loading) return <Spinner label="Loading piece…" />
  if (error) return <ErrorMessage message="We couldn't load this piece." onRetry={retry} />
  if (!product) {
    return (
      <section className="mx-auto max-w-xl px-5 py-20 text-center">
        <h1 className="font-serif text-3xl">We couldn't find that piece</h1>
        <p className="mt-3 text-muted">It may have sold out or moved. Have a look at the rest of the collection.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-clay px-8 py-3 text-sm font-semibold text-white hover:bg-clay-dark">Back to the shop</Link>
      </section>
    )
  }
  // key resets gallery + quantity when navigating between products
  return <ProductView key={product.id} product={product} />
}
