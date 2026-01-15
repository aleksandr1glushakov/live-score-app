import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../Filter";
import { FilterType } from "@/types/match";

const mockCounts = {
  all: 10,
  result: 5,
  live: 2,
  upcoming: 3,
};

describe("Filter", () => {
  it("renders all filter options with counts", () => {
    const mockOnFilterChange = jest.fn();
    render(
      <Filter
        activeFilter="all"
        onFilterChange={mockOnFilterChange}
        counts={mockCounts}
      />
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Result")).toBeInTheDocument();
    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByText("Upcoming")).toBeInTheDocument();

    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("calls onFilterChange when a filter is clicked", () => {
    const mockOnFilterChange = jest.fn();
    render(
      <Filter
        activeFilter="all"
        onFilterChange={mockOnFilterChange}
        counts={mockCounts}
      />
    );

    const liveFilter = screen.getByText("Live").closest("button");
    if (liveFilter) {
      fireEvent.click(liveFilter);
      expect(mockOnFilterChange).toHaveBeenCalledWith("live");
    }
  });

  it("highlights the active filter", () => {
    const mockOnFilterChange = jest.fn();
    const { rerender } = render(
      <Filter
        activeFilter="all"
        onFilterChange={mockOnFilterChange}
        counts={mockCounts}
      />
    );

    const allFilter = screen.getByText("All").closest("button");
    expect(allFilter).toHaveStyle({ background: "#f5f5f5" });

    rerender(
      <Filter
        activeFilter="live"
        onFilterChange={mockOnFilterChange}
        counts={mockCounts}
      />
    );

    const liveFilter = screen.getByText("Live").closest("button");
    expect(liveFilter).toHaveStyle({ background: "#f5f5f5" });
  });
});
