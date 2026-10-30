export function formatETB(amount) {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    maximumFractionDigits: 2
  }).format(Number(amount) || 0);
}

export function formatAddisDate(value) {
  if (!value) return "Date unavailable";
  return new Intl.DateTimeFormat("en-ET", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Addis_Ababa"
  }).format(new Date(value));
}

export function formatRelativeTime(value) {
  if (!value) return "Time unavailable";
  const seconds = Math.round((new Date(value).getTime() - Date.now()) / 1000);
  const units = [
    [31536000, "year"], [2592000, "month"], [86400, "day"],
    [3600, "hour"], [60, "minute"], [1, "second"]
  ];
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const [size, unit] of units) {
    if (Math.abs(seconds) >= size || unit === "second") {
      return formatter.format(Math.round(seconds / size), unit);
    }
  }
}
