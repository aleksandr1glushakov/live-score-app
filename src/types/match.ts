export interface Team {
  id: number;
  name: string;
  slug: string;
  gender: string;
  subTeams: unknown[];
}

export interface Score {
  current: number;
  period1: number;
  normaltime: number;
}

export interface MatchStatus {
  code: number;
  type: "finished" | "inprogress" | "notstarted";
}

export interface Round {
  round: number;
}

export interface Match {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  date: string;
  time: string;
  status: MatchStatus;
  round: Round;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: Score;
  awayScore: Score;
  liveStatus: string; // Can be FT, HT, -, Cancelled, or minute like "60+"
}

export type FilterType = "all" | "result" | "live" | "upcoming";
