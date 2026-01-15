import { render, screen } from "@testing-library/react";
import MatchCard from "../MatchCard";
import { Match } from "@/types/match";

const mockMatch: Match = {
  id: "1",
  name: "FK Tyumen - Luch-Energiya Vladivostok",
  competitionId: "bbbg",
  competition: "Football National League",
  countryId: "cb",
  country: "Russia",
  timestamp: 1470484800,
  date: "06.08.2016.",
  time: "12:00",
  status: { code: 100, type: "finished" },
  round: { round: 6 },
  homeTeam: { id: 75207, name: "FK Tyumen", slug: "fk-tyumen", gender: "M", subTeams: [] },
  awayTeam: {
    id: 5852,
    name: "Luch-Energiya Vladivostok",
    slug: "luch-energiya-vladivostok",
    gender: "M",
    subTeams: [],
  },
  homeScore: { current: 2, period1: 0, normaltime: 0 },
  awayScore: { current: 0, period1: 0, normaltime: 0 },
  liveStatus: "FT",
};

describe("MatchCard", () => {
  it("renders match information correctly", () => {
    render(<MatchCard match={mockMatch} />);
    expect(screen.getByText("Russia")).toBeInTheDocument();
    expect(screen.getByText("Football National League")).toBeInTheDocument();
    expect(screen.getByText("FK Tyumen")).toBeInTheDocument();
    expect(screen.getByText("Luch-Energiya Vladivostok")).toBeInTheDocument();
    expect(screen.getByText("2 - 0")).toBeInTheDocument();
  });

  it("displays ENDED status for finished matches", () => {
    render(<MatchCard match={mockMatch} />);
    expect(screen.getByText("ENDED")).toBeInTheDocument();
  });

  it("displays LIVE status for in-progress matches", () => {
    const liveMatch = { ...mockMatch, status: { code: 200, type: "inprogress" }, liveStatus: "45" };
    render(<MatchCard match={liveMatch} />);
    expect(screen.getByText("LIVE")).toBeInTheDocument();
  });

  it("displays PRE-MATCH status for not-started matches", () => {
    const upcomingMatch = {
      ...mockMatch,
      status: { code: 300, type: "notstarted" },
      liveStatus: "-",
    };
    render(<MatchCard match={upcomingMatch} />);
    expect(screen.getByText("PRE-MATCH")).toBeInTheDocument();
  });

  it("displays CANCELLED status for cancelled matches", () => {
    const cancelledMatch = { ...mockMatch, liveStatus: "Cancelled" };
    render(<MatchCard match={cancelledMatch} />);
    expect(screen.getByText("CANCELLED")).toBeInTheDocument();
  });
});
