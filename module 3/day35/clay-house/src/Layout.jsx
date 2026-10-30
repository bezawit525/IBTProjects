import { Suspense } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import CartBadge from './cart/CartBadge.jsx'
import ErrorBoundary from './ui/ErrorBoundary.jsx'
import Spinner from './ui/Spinner.jsx'
import { VaseIcon } from './ui/Icons.jsx'

function Navbar() {
  const link = ({ isActive }) =>
    `text-sm font-medium hover:text-clay ${isActive ? 'text-clay' : 'text-ink'}`
  return (
    <header className="border-b border-line bg-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Main">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl text-clay">
          <VaseIcon className="h-6 w-6" />
          Clay House
        </Link>
        <div className="flex items-center gap-6">
          <NavLink to="/" end className={link}>Shop</NavLink>
          <CartBadge />
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 bg-sand py-6 text-center text-sm text-muted">
      Clay House — Handmade with care.
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* key resets the boundary when the user navigates away from a crashed screen */}
        <ErrorBoundary key={pathname}>
          <Suspense fallback={<Spinner label="Loading page…" />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
