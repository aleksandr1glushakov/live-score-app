import { Match } from "@/types/match";

/**
 * Determines the display status for a match based on its state
 * @param match - The match object
 * @returns The status string to display (LIVE, CANCELLED, ENDED, HT, PRE-MATCH, etc.)
 */
export function getStatusDisplay(match: Match): string {
  const { status, liveStatus } = match;

  if (liveStatus === "Cancelled" || liveStatus === "CANCELLED") {
    return "CANCELLED";
  }

  if (status.type === "inprogress") {
    return "LIVE";
  }

  if (status.type === "finished") {
    if (liveStatus === "HT") {
      return "HT";
    }
    return "ENDED";
  }

  if (status.type === "notstarted") {
    return "PRE-MATCH";
  }

  return liveStatus;
}
