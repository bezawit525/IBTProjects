function safeCell(value) {
  let text = String(value ?? "");
  // Prevent spreadsheet formula execution when opening exported CSV files.
  if (/^[\s]*[=+@\-]/.test(text)) text = `'${text}`;
  if (/[",\r\n]/.test(text)) text = `"${text.replace(/"/g, '""')}"`;
  return text;
}

export function rowsToCsv(rows) {
  return "\uFEFF" + rows.map((row) => row.map(safeCell).join(",")).join("\r\n");
}

export function downloadCsv(filename, rows) {
  const blob = new Blob([rowsToCsv(rows)], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
