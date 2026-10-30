const LAST_ORDER_KEY = 'clay-house-last-order'

export function createOrder({ customer, items, subtotal, shipping, total }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ref = `#CH${String(Math.floor(Math.random() * 1_000_000)).padStart(6, '0')}`
      const order = { ref, customer, items, subtotal, shipping, total }
      try {
        sessionStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order))
      } catch {
        /* storage unavailable — confirmation page will show its empty state */
      }
      resolve(order)
    }, 700)
  })
}

export function getLastOrder() {
  try {
    return JSON.parse(sessionStorage.getItem(LAST_ORDER_KEY))
  } catch {
    return null
  }
}
