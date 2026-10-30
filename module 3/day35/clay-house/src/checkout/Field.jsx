import { useId } from 'react'

export default function Field({ label, required, error, multiline, ...props }) {
  const id = useId()
  const errId = `${id}-error`
  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold">
        {label}{required && <span className="text-clay"> *</span>}
      </label>
      <Tag id={id} rows={multiline ? 3 : undefined} aria-invalid={error ? true : undefined} aria-describedby={error ? errId : undefined}
        className={`w-full rounded-md border bg-white px-3 py-2 text-sm placeholder:text-muted/60 ${error ? 'border-2 border-danger' : 'border-line'}`}
        {...props} />
      {error && <p id={errId} className="mt-1 text-xs font-medium text-danger">⚠ {error}</p>}
    </div>
  )
}
