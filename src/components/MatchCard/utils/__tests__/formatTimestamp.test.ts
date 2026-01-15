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

  it("uses correct ordinal suffixes", () => {
    // Test 1st, 2nd, 3rd, 21st, 22nd, 23rd, 11th, 12th, 13th
    expect(formatTimestamp(new Date("2024-01-01T00:00:00Z").getTime() / 1000)).toContain("1ST");
    expect(formatTimestamp(new Date("2024-01-02T00:00:00Z").getTime() / 1000)).toContain("2ND");
    expect(formatTimestamp(new Date("2024-01-03T00:00:00Z").getTime() / 1000)).toContain("3RD");
    expect(formatTimestamp(new Date("2024-01-11T00:00:00Z").getTime() / 1000)).toContain("11TH");
    expect(formatTimestamp(new Date("2024-01-21T00:00:00Z").getTime() / 1000)).toContain("21ST");
    expect(formatTimestamp(new Date("2024-01-22T00:00:00Z").getTime() / 1000)).toContain("22ND");
    expect(formatTimestamp(new Date("2024-01-23T00:00:00Z").getTime() / 1000)).toContain("23RD");
  });

  it("pads hours and minutes with zeros", () => {
    // March 15, 2024, 05:03 UTC
    const timestamp = 1710489780;
    const result = formatTimestamp(timestamp);
    expect(result).toMatch(/^\w{3} \d+(ST|ND|RD|TH) \d{2}:\d{2}$/);
  });

  it("uses UTC timezone", () => {
    // Test that it uses UTC, not local timezone
    const timestamp = 1470484800; // August 6, 2016, 12:00 UTC
    const result = formatTimestamp(timestamp);
    // Should always be 12:00 regardless of local timezone
    expect(result).toContain("12:00");
  });
});
