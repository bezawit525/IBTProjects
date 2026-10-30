import { useEffect, useState } from 'react'

// fetcher must be a stable (module-level) function: fetcher(signal, arg).
// The in-flight request is aborted on cleanup, so a slow response can never overwrite a newer one.
export default function useFetch(fetcher, arg) {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState({ key: null, data: null, error: null })
  const key = `${String(arg)}#${attempt}`

  useEffect(() => {
    const controller = new AbortController()
    fetcher(controller.signal, arg)
      .then((data) => setResult({ key, data, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') setResult({ key, data: null, error })
      })
    return () => controller.abort()
  }, [fetcher, arg, key])

  const loading = result.key !== key
  return {
    data: loading ? null : result.data,
    error: loading ? null : result.error,
    loading,
    retry: () => setAttempt((n) => n + 1),
  }
}
