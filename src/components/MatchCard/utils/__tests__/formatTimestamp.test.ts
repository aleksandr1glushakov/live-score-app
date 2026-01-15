import { formatTimestamp } from "../formatTimestamp";

describe("formatTimestamp", () => {
  it("formats timestamp correctly", () => {
    // August 6, 2016, 12:00 UTC
    const timestamp = 1470484800;
    const result = formatTimestamp(timestamp);
    expect(result).toBe("AUG 6TH 12:00");
  });

  it("handles different months correctly", () => {
    // January 1, 2024, 00:00 UTC
    const timestamp = 1704067200;
    const result = formatTimestamp(timestamp);
    expect(result).toBe("JAN 1ST 00:00");
  });

  it("pads hours and minutes with zeros", () => {
    // March 15, 2024, 05:03 UTC
    const timestamp = 1710489780;
    const result = formatTimestamp(timestamp);
    expect(result).toMatch(/^\w{3} \d+TH \d{2}:\d{2}$/);
  });
});
