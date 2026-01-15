"use client";

import { Match } from "@/types/match";
import { useMatchStatus } from "./hooks/useMatchStatus";
import { formatTimestamp } from "./utils";
import {
  Card,
  Country,
  Competition,
  StatusBadge,
  ScoreContainer,
  Score,
  TeamsContainer,
  TeamHome,
  TeamAway,
  TimeCircle,
  TimeText,
  DateTime,
} from "./MatchCard.styles";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const {
    homeScore,
    awayScore,
    homeTeam,
    awayTeam,
    country,
    competition,
    timestamp,
  } = match;

  const {
    statusDisplay,
    isLive,
    isFinished,
    isNotStarted,
    isCancelled,
    isHalfTime,
    minute,
    progress,
  } = useMatchStatus(match);

  return (
    <Card>
      <Country>{country}</Country>
      <Competition>{competition}</Competition>
      {isNotStarted && !isCancelled && (
        <DateTime>{formatTimestamp(timestamp)}</DateTime>
      )}
      <StatusBadge $status={statusDisplay}>{statusDisplay}</StatusBadge>

      <ScoreContainer>
        <Score>
          {homeScore.current} - {awayScore.current}
        </Score>
      </ScoreContainer>

      <TeamsContainer>
        <TeamHome>{homeTeam.name}</TeamHome>
        {(isLive || isHalfTime || isFinished) && (
          <TimeCircle
            $progress={isHalfTime ? 50 : progress || undefined}
            $isHalf={isHalfTime}
          >
            <TimeText>
              {isHalfTime ? "HT" : minute ? `${minute}'` : match.liveStatus}
            </TimeText>
          </TimeCircle>
        )}
        {!isLive && !isHalfTime && !isFinished && !isCancelled && (
          <TimeCircle>
            <TimeText></TimeText>
          </TimeCircle>
        )}
        <TeamAway>{awayTeam.name}</TeamAway>
      </TeamsContainer>
    </Card>
  );
}
