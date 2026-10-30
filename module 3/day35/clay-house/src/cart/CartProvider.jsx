import { useEffect, useMemo, useReducer } from 'react'
import { CartContext } from './cart-context.js'

const STORAGE_KEY = 'clay-house-cart'
export const SHIPPING_FLAT_RATE = 5

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const { product, qty } = action
      const existing = items.find((i) => i.id === product.id)
      if (existing) {
        return items.map((i) =>
          i.id === product.id ? { ...i, qty: Math.min(i.qty + qty, product.stock) } : i,
        )
      }
      return [
        ...items,
        { id: product.id, name: product.name, price: product.price, image: product.images[0], stock: product.stock, qty: Math.min(qty, product.stock) },
      ]
    }
    case 'setQty':
      return items.map((i) => (i.id === action.id ? { ...i, qty: Math.max(1, Math.min(action.qty, i.stock)) } : i))
    case 'remove':
      return items.filter((i) => i.id !== action.id)
    case 'clear':
      return []
    default:
      return items
  }
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export default function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* private mode / quota — cart still works for this session */
    }
  }, [items])

  const value = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
    const shipping = items.length ? SHIPPING_FLAT_RATE : 0
    return {
      items,
      count: items.reduce((sum, i) => sum + i.qty, 0),
      subtotal,
      shipping,
      total: subtotal + shipping,
      add: (product, qty = 1) => dispatch({ type: 'add', product, qty }),
      setQty: (id, qty) => dispatch({ type: 'setQty', id, qty }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
