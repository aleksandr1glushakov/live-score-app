"use client";

import { FilterType } from "@/types/match";
import {
  FilterContainer,
  FilterTitle,
  FilterList,
  FilterItem,
  FilterCount,
} from "./Filter.styles";

interface FilterProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    result: number;
    live: number;
    upcoming: number;
  };
}

const FILTER_OPTIONS: { type: FilterType; label: string }[] = [
  { type: "all", label: "All" },
  { type: "result", label: "Result" },
  { type: "live", label: "Live" },
  { type: "upcoming", label: "Upcoming" },
];

export default function Filter({
  activeFilter,
  onFilterChange,
  counts,
}: FilterProps) {
  return (
    <FilterContainer>
        <FilterTitle>Filters</FilterTitle>
        <FilterList>
          {FILTER_OPTIONS.map((filter) => (
            <FilterItem
              key={filter.type}
              $active={activeFilter === filter.type}
              onClick={() => onFilterChange(filter.type)}
            >
              <span>{filter.label}</span>
              <FilterCount>{counts[filter.type]}</FilterCount>
            </FilterItem>
          ))}
        </FilterList>
    </FilterContainer>
  );
}
