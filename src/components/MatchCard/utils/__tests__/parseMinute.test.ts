import { parseMinute } from "../parseMinute";

describe("parseMinute", () => {
  it("extracts minute from status string", () => {
    expect(parseMinute("45")).toBe(45);
    expect(parseMinute("60+")).toBe(60);
    expect(parseMinute("90")).toBe(90);
  });

  it("returns null for non-numeric status", () => {
    expect(parseMinute("HT")).toBeNull();
    expect(parseMinute("FT")).toBeNull();
    expect(parseMinute("-")).toBeNull();
    expect(parseMinute("Cancelled")).toBeNull();
  });

  it("extracts first number from string", () => {
    expect(parseMinute("45+2")).toBe(45);
    expect(parseMinute("90+5")).toBe(90);
  });
});
