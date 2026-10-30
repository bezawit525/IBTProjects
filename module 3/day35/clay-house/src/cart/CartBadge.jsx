import { NavLink } from 'react-router-dom'
import { BagIcon } from '../ui/Icons.jsx'
import useCart from './useCart.js'

export default function CartBadge() {
  const { count } = useCart()
  return (
    <NavLink
      to="/cart"
      className={({ isActive }) => `flex items-center gap-1.5 text-sm font-medium hover:text-clay ${isActive ? 'text-clay' : 'text-ink'}`}
      aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}
    >
      Cart
      <span className="relative">
        <BagIcon className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-clay px-1 text-[10px] font-bold text-white">
            {count}
          </span>
        )}
      </span>
    </NavLink>
  )
}
