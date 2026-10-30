const base = { fill: 'currentColor', 'aria-hidden': true }

export const VaseIcon = (p) => (
  <svg viewBox="0 0 32 32" {...base} {...p}>
    <path d="M12 3h8v3h-2v3c4 1.5 7 5 7 10 0 5-3.6 9-9 9s-9-4-9-9c0-5 3-8.5 7-10V6h-2z" />
  </svg>
)

export const BagIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
    <path d="M5 8h14l-1 12H6L5 8z" strokeLinejoin="round" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
  </svg>
)

export const TrashIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...p}>
    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CheckCircleIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const StarIcon = (p) => (
  <svg viewBox="0 0 20 20" {...base} {...p}>
    <path d="M10 1.5l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.4 4.9 17.2 6 11.5 1.7 7.5l5.8-.7z" />
  </svg>
)
