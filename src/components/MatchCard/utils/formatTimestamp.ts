/**
 * Formats a Unix timestamp to a readable date string
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
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${month} ${day}TH ${hours}:${minutes}`;
}
