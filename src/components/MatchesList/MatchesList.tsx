"use client";

import { useMemo, forwardRef } from "react";
import MatchCard from "@/components/MatchCard";
import { Match, FilterType } from "@/types/match";
import { filterMatches } from "@/utils/filterMatches";
import { MatchesContainer, EmptyState } from "./MatchesList.styles";

interface MatchesListProps {
  matches: Match[];
  activeFilter: FilterType;
}

const MatchesList = forwardRef<HTMLDivElement, MatchesListProps>(
  ({ matches, activeFilter }, ref) => {
    const filteredMatches = useMemo(
      () => filterMatches(matches, activeFilter),
      [matches, activeFilter]
    );

    if (filteredMatches.length === 0) {
      return <EmptyState>No matches found for this filter.</EmptyState>;
    }

    return (
      <MatchesContainer ref={ref}>
        {filteredMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </MatchesContainer>
    );
  }
);

MatchesList.displayName = "MatchesList";

export default MatchesList;
