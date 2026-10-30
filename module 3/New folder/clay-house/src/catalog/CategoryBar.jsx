import { CATEGORIES } from '../api/productsData.js'

export default function CategoryBar({ selected, onSelect }) {
  const pill = (active) =>
    `rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
      active ? 'border-clay bg-clay text-white' : 'border-line bg-white text-ink hover:border-clay'
    }`
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      <button type="button" className={pill(!selected)} aria-pressed={!selected} onClick={() => onSelect(null)}>All</button>
      {CATEGORIES.map((c) => (
        <button key={c} type="button" className={pill(selected === c)} aria-pressed={selected === c} onClick={() => onSelect(c)}>
          {c}
        </button>
      ))}
    </div>
  )
}
