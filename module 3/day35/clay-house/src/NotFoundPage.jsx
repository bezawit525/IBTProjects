import { Link } from 'react-router-dom'
import vaseArt from './assets/vase-art.jpg'

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-xl px-5 py-16 text-center">
      <img src={vaseArt} alt="" className="mx-auto mb-8 h-48 w-auto rounded-3xl object-cover" />
      <h1 className="font-serif text-4xl">404 - Page Not Found</h1>
      <p className="mt-3 text-sm text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 inline-block rounded-md bg-clay px-8 py-3 text-sm font-semibold text-white hover:bg-clay-dark">
        Return Home
      </Link>
    </section>
  )
}
