import { Link } from 'react-router-dom'
import { money } from '../ui/format.js'

export default function ProductCard({ product }) {
  return (
    <li>
      <Link to={`/products/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-xl bg-sand">
          <img src={product.images[product.images.length > 1 ? 1 : 0]} alt={product.name} className="aspect-square w-full object-cover transition-transform group-hover:scale-105" />
          {product.stock === 0 && (
            <span className="absolute left-2 top-2 rounded bg-ink px-2 py-0.5 text-[11px] font-semibold text-white">Sold out</span>
          )}
        </div>
        <h3 className="mt-3 text-sm font-semibold">{product.name}</h3>
        <p className="text-sm text-muted">{money(product.price)}</p>
      </Link>
    </li>
  )
}
