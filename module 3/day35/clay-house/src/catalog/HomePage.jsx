import { Link, useSearchParams } from 'react-router-dom'
import { getProducts } from '../api/products.js'
import { CATEGORIES } from '../api/productsData.js'
import useFetch from '../hooks/useFetch.js'
import ErrorMessage from '../ui/ErrorMessage.jsx'
import Spinner from '../ui/Spinner.jsx'
import heroImg from '../assets/hero.jpg'
import CategoryBar from './CategoryBar.jsx'
import ProductCard from './ProductCard.jsx'

function Hero() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-10 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-clay">Handmade with love</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Discover the beauty of ceramics.</h1>
          <p className="mt-4 max-w-md text-sm text-muted">
            Explore handmade mugs, bowls, plates, vases, and decorative pieces for your home.
          </p>
          <a href="#collection" className="mt-6 inline-block rounded-md bg-clay px-6 py-2.5 text-sm font-semibold text-white hover:bg-clay-dark">
            Shop Now
          </a>
        </div>
        <img src={heroImg} alt="Stoneware vases and a bowl on a wooden shelf" className="h-64 w-full rounded-2xl object-cover md:h-72" />
      </div>
    </section>
  )
}

export default function HomePage() {
  const [params, setParams] = useSearchParams()
  const { data: products, error, loading, retry } = useFetch(getProducts)

  // Selected category lives in the URL: shareable and survives refresh.
  const wanted = params.get('category')
  const selected = CATEGORIES.find((c) => c.toLowerCase() === wanted?.toLowerCase()) ?? null
  const select = (c) => setParams(c ? { category: c.toLowerCase() } : {})

  const visible = products && (selected ? products.filter((p) => p.category === selected) : products)

  return (
    <>
      <Hero />
      <section id="collection" className="mx-auto max-w-6xl scroll-mt-4 px-5 pt-10">
        <h2 className="font-serif text-2xl">Our Collection</h2>
        <div className="mt-4"><CategoryBar selected={selected} onSelect={select} /></div>

        {loading && <Spinner label="Loading the collection…" />}
        {error && <ErrorMessage message="We couldn't load the collection. Please check your connection." onRetry={retry} />}
        {visible && visible.length === 0 && (
          <p className="py-16 text-center text-muted">
            Nothing in {selected} right now — new pieces are coming out of the kiln soon.{' '}
            <Link to="/" className="text-clay underline">See everything</Link>
          </p>
        )}
        {visible && visible.length > 0 && (
          <ul className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
            {visible.map((p) => <ProductCard key={p.id} product={p} />)}
          </ul>
        )}
      </section>
    </>
  )
}
