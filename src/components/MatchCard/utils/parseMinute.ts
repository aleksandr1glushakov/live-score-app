/**
 * Parses the minute from a live status string
 * @param liveStatus - Status string like "45", "60+", "HT", etc.
 * @returns The minute number or null if not found
 */
export function parseMinute(liveStatus: string): number | null {
  const match = liveStatus.match(/(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return null;
}
