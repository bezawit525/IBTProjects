export default function ErrorMessage({ message, onRetry }) {
  return (
    <div role="alert" className="mx-auto my-10 max-w-md rounded-xl border border-danger/30 bg-white p-6 text-center">
      <p className="font-semibold text-danger">Something went wrong</p>
      <p className="mt-1 text-sm text-muted">{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className="mt-4 rounded-md bg-clay px-5 py-2 text-sm font-semibold text-white hover:bg-clay-dark">
          Try again
        </button>
      )}
    </div>
  )
}
