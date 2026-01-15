/**
 * Gets the ordinal suffix for a day number
 * @param day - Day of the month
 * @returns Ordinal suffix (ST, ND, RD, or TH)
 */
function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "TH";
  }
  switch (day % 10) {
    case 1:
      return "ST";
    case 2:
      return "ND";
    case 3:
      return "RD";
    default:
      return "TH";
  }
}

/**
 * Formats a Unix timestamp to a readable date string
 * Uses UTC to avoid timezone issues and matches the feed data
 * @param timestamp - Unix timestamp in seconds
 * @returns Formatted string like "AUG 6TH 14:00"
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const suffix = getOrdinalSuffix(day);
  return `${month} ${day}${suffix} ${hours}:${minutes}`;
}
