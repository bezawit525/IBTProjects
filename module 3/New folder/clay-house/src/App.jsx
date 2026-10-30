import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './catalog/HomePage.jsx'
import ProductDetailPage from './catalog/ProductDetailPage.jsx'
import CartPage from './cart/CartPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'

// Checkout and confirmation are only needed late in the journey — split them out.
const CheckoutPage = lazy(() => import('./checkout/CheckoutPage.jsx'))
const OrderSuccessPage = lazy(() => import('./checkout/OrderSuccessPage.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order-success" element={<OrderSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
