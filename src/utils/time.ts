// Utility helpers for normalizing and formatting session time strings
export function cleanTimeString(timeString?: string): string {
  if (!timeString) return "";
  const cleaned = timeString.replace(/\s*\([^)]*\)/g, "").trim();
  if (!cleaned) return "";
  if (cleaned.toLowerCase() === "not specified") return "";
  return cleaned;
}

export function getTimeSuffix(timeString?: string): string {
  const cleaned = cleanTimeString(timeString);
  return cleaned ? ` · ${cleaned}` : "";
}
