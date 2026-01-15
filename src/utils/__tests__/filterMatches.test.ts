import { filterMatches, getFilterCounts } from "../filterMatches";
import { Match, FilterType } from "@/types/match";

const mockMatches: Match[] = [
  {
    id: "1",
    name: "Match 1",
    competitionId: "comp1",
    competition: "League 1",
    countryId: "c1",
    country: "Country 1",
    timestamp: 1470484800,
    date: "06.08.2016.",
    time: "12:00",
    status: { code: 100, type: "finished" },
    round: { round: 1 },
    homeTeam: { id: 1, name: "Team A", slug: "team-a", gender: "M", subTeams: [] },
    awayTeam: { id: 2, name: "Team B", slug: "team-b", gender: "M", subTeams: [] },
    homeScore: { current: 2, period1: 1, normaltime: 2 },
    awayScore: { current: 0, period1: 0, normaltime: 0 },
    liveStatus: "FT",
  },
  {
    id: "2",
    name: "Match 2",
    competitionId: "comp1",
    competition: "League 1",
    countryId: "c1",
    country: "Country 1",
    timestamp: 1470484800,
    date: "06.08.2016.",
    time: "12:00",
    status: { code: 200, type: "inprogress" },
    round: { round: 1 },
    homeTeam: { id: 3, name: "Team C", slug: "team-c", gender: "M", subTeams: [] },
    awayTeam: { id: 4, name: "Team D", slug: "team-d", gender: "M", subTeams: [] },
    homeScore: { current: 1, period1: 0, normaltime: 0 },
    awayScore: { current: 0, period1: 0, normaltime: 0 },
    liveStatus: "45",
  },
  {
    id: "3",
    name: "Match 3",
    competitionId: "comp1",
    competition: "League 1",
    countryId: "c1",
    country: "Country 1",
    timestamp: 1470484800,
    date: "06.08.2016.",
    time: "12:00",
    status: { code: 300, type: "notstarted" },
    round: { round: 1 },
    homeTeam: { id: 5, name: "Team E", slug: "team-e", gender: "M", subTeams: [] },
    awayTeam: { id: 6, name: "Team F", slug: "team-f", gender: "M", subTeams: [] },
    homeScore: { current: 0, period1: 0, normaltime: 0 },
    awayScore: { current: 0, period1: 0, normaltime: 0 },
    liveStatus: "-",
  },
];

describe("filterMatches", () => {
  it("should return all matches when filter is 'all'", () => {
    const result = filterMatches(mockMatches, "all");
    expect(result).toHaveLength(3);
  });

  it("should return only finished matches when filter is 'result'", () => {
    const result = filterMatches(mockMatches, "result");
    expect(result).toHaveLength(1);
    expect(result[0].status.type).toBe("finished");
  });

  it("should return only in-progress matches when filter is 'live'", () => {
    const result = filterMatches(mockMatches, "live");
    expect(result).toHaveLength(1);
    expect(result[0].status.type).toBe("inprogress");
  });

  it("should return only not-started matches when filter is 'upcoming'", () => {
    const result = filterMatches(mockMatches, "upcoming");
    expect(result).toHaveLength(1);
    expect(result[0].status.type).toBe("notstarted");
  });
});

describe("getFilterCounts", () => {
  it("should return correct counts for all filter types", () => {
    const counts = getFilterCounts(mockMatches);
    expect(counts.all).toBe(3);
    expect(counts.result).toBe(1);
    expect(counts.live).toBe(1);
    expect(counts.upcoming).toBe(1);
  });

  it("should return zero counts for empty array", () => {
    const counts = getFilterCounts([]);
    expect(counts.all).toBe(0);
    expect(counts.result).toBe(0);
    expect(counts.live).toBe(0);
    expect(counts.upcoming).toBe(0);
  });
});
