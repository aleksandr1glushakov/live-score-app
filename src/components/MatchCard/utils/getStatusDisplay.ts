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

  // Check for HT first, regardless of status.type
  // HT can appear in both "inprogress" and "finished" statuses
  if (liveStatus === "HT") {
    return "HT";
  }

  if (status.type === "inprogress") {
    return "LIVE";
  }

  if (status.type === "finished") {
    return "ENDED";
  }

  if (status.type === "notstarted") {
    return "PRE-MATCH";
  }

  return liveStatus;
}
