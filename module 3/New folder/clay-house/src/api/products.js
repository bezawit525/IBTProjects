import { PRODUCTS } from './productsData.js'

// Simulated network call so loading / error / abort handling is real.
// Swap the body for fetch('/api/products', { signal }) when a backend exists.
function respond(value, signal, ms = 500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(value), ms)
    signal?.addEventListener('abort', () => {
      clearTimeout(timer)
      reject(new DOMException('Aborted', 'AbortError'))
    })
  })
}

export function getProducts(signal) {
  return respond(PRODUCTS, signal)
}

export function getProductById(signal, id) {
  return respond(PRODUCTS.find((p) => p.id === id) ?? null, signal, 300)
}
