"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Filter from "@/components/Filter";
import MatchesList from "@/components/MatchesList";
import BackToTop from "@/components/BackToTop";
import { Match, FilterType } from "@/types/match";
import { getFilterCounts } from "@/utils/filterMatches";
import {
  Container,
  Content,
  Header,
  Layout,
} from "./MatchesPage.styles";

interface MatchesPageProps {
  initialMatches: Match[];
}

export default function MatchesPage({ initialMatches }: MatchesPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const matchesContainerRef = useRef<HTMLDivElement>(null);

  const filterCounts = useMemo(
    () => getFilterCounts(initialMatches),
    [initialMatches]
  );

  useEffect(() => {
    if (matchesContainerRef.current) {
      matchesContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeFilter]);

  return (
    <Container>
      <Content>
        <Header>Live Score</Header>
        <Layout>
          <Filter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={filterCounts}
          />
          <MatchesList
            ref={matchesContainerRef}
            matches={initialMatches}
            activeFilter={activeFilter}
          />
        </Layout>
      </Content>
      <BackToTop />
    </Container>
  );
}
