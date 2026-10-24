export const formatMoney = (n) =>
  n === 0 ? 'Free' : new Intl.NumberFormat('en-ET', { style: 'currency', currency: 'ETB', maximumFractionDigits: 0 }).format(n);

export const formatDate = (iso) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Africa/Addis_Ababa' }).format(new Date(iso));

export const formatShortDate = (iso) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Africa/Addis_Ababa' }).format(new Date(iso));

// Only allow same-site relative paths. Blocks /signin?next=https://example.com
export function safeNext(value, fallback = '/dashboard') {
  if (typeof value !== 'string') return fallback;
  if (!value.startsWith('/') || value.startsWith('//')) return fallback;
  if (value.includes('\\') || /[\u0000-\u001f]/.test(value)) return fallback;
  return value;
}
