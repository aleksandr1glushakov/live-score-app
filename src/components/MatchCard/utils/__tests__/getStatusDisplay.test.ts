import { getStatusDisplay } from "../getStatusDisplay";
import { Match } from "@/types/match";

const createMockMatch = (overrides: Partial<Match>): Match => ({
  id: "1",
  name: "Test Match",
  competitionId: "comp1",
  competition: "Test League",
  countryId: "c1",
  country: "Test Country",
  timestamp: 1470484800,
  date: "06.08.2016.",
  time: "12:00",
  status: { code: 100, type: "finished" },
  round: { round: 1 },
  homeTeam: { id: 1, name: "Team A", slug: "team-a", gender: "M", subTeams: [] },
  awayTeam: { id: 2, name: "Team B", slug: "team-b", gender: "M", subTeams: [] },
  homeScore: { current: 0, period1: 0, normaltime: 0 },
  awayScore: { current: 0, period1: 0, normaltime: 0 },
  liveStatus: "FT",
  ...overrides,
});

describe("getStatusDisplay", () => {
  it("returns CANCELLED for cancelled matches", () => {
    const match = createMockMatch({ liveStatus: "Cancelled" });
    expect(getStatusDisplay(match)).toBe("CANCELLED");
  });

  it("returns LIVE for in-progress matches", () => {
    const match = createMockMatch({ status: { code: 200, type: "inprogress" }, liveStatus: "45" });
    expect(getStatusDisplay(match)).toBe("LIVE");
  });

  it("returns HT for half-time matches (finished status)", () => {
    const match = createMockMatch({ status: { code: 100, type: "finished" }, liveStatus: "HT" });
    expect(getStatusDisplay(match)).toBe("HT");
  });

  it("returns HT for half-time matches (inprogress status)", () => {
    const match = createMockMatch({ status: { code: 200, type: "inprogress" }, liveStatus: "HT" });
    expect(getStatusDisplay(match)).toBe("HT");
  });

  it("returns ENDED for finished matches", () => {
    const match = createMockMatch({ status: { code: 100, type: "finished" }, liveStatus: "FT" });
    expect(getStatusDisplay(match)).toBe("ENDED");
  });

  it("returns PRE-MATCH for not-started matches", () => {
    const match = createMockMatch({ status: { code: 300, type: "notstarted" }, liveStatus: "-" });
    expect(getStatusDisplay(match)).toBe("PRE-MATCH");
  });
});
