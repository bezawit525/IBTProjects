export default function Spinner({ label = 'Loading…' }) {
  return (
    <div role="status" className="flex items-center justify-center gap-3 py-16 text-muted">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-line border-t-clay" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  )
}
