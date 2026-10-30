// Generic +/- control. Knows nothing about products or carts.
export default function QuantityStepper({ value, min = 1, max = 99, onChange, label = 'Quantity' }) {
  const btn = 'flex h-8 w-8 items-center justify-center text-lg hover:bg-sand disabled:opacity-40 disabled:hover:bg-transparent'
  return (
    <div className="inline-flex items-center rounded-md border border-line bg-white" role="group" aria-label={label}>
      <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= min} aria-label="Decrease quantity">−</button>
      <span className="w-9 text-center text-sm font-medium" aria-live="polite">{value}</span>
      <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= max} aria-label="Increase quantity">+</button>
    </div>
  )
}
