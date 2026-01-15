import { Match, FilterType } from "@/types/match";

/**
 * Checks if a match is cancelled
 */
function isCancelled(match: Match): boolean {
  return (
    match.liveStatus === "Cancelled" || match.liveStatus === "CANCELLED"
  );
}

export function filterMatches(matches: Match[], filter: FilterType): Match[] {
  switch (filter) {
    case "result":
      // Finished matches (excluding cancelled)
      return matches.filter(
        (match) => match.status.type === "finished" && !isCancelled(match)
      );
    case "live":
      // Live matches (in progress, excluding cancelled)
      return matches.filter(
        (match) => match.status.type === "inprogress" && !isCancelled(match)
      );
    case "upcoming":
      // Upcoming matches (not started, excluding cancelled)
      return matches.filter(
        (match) => match.status.type === "notstarted" && !isCancelled(match)
      );
    case "all":
    default:
      // All matches (including cancelled)
      return matches;
  }
}

export function getFilterCounts(matches: Match[]) {
  return {
    all: matches.length,
    result: matches.filter(
      (m) => m.status.type === "finished" && !isCancelled(m)
    ).length,
    live: matches.filter(
      (m) => m.status.type === "inprogress" && !isCancelled(m)
    ).length,
    upcoming: matches.filter(
      (m) => m.status.type === "notstarted" && !isCancelled(m)
    ).length,
  };
}
