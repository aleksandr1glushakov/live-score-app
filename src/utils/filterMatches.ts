import { Match, FilterType } from "@/types/match";

export function filterMatches(matches: Match[], filter: FilterType): Match[] {
  switch (filter) {
    case "result":
      return matches.filter((match) => match.status.type === "finished");
    case "live":
      return matches.filter((match) => match.status.type === "inprogress");
    case "upcoming":
      return matches.filter((match) => match.status.type === "notstarted");
    case "all":
    default:
      return matches;
  }
}

export function getFilterCounts(matches: Match[]) {
  return {
    all: matches.length,
    result: matches.filter((m) => m.status.type === "finished").length,
    live: matches.filter((m) => m.status.type === "inprogress").length,
    upcoming: matches.filter((m) => m.status.type === "notstarted").length,
  };
}
