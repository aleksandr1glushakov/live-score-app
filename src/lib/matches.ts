import { readFileSync } from "fs";
import { join } from "path";
import { Match } from "@/types/match";

/**
 * Server-side function to fetch matches data
 * This should be used in Server Components
 * @returns Promise<Match[]> Array of matches
 */
export async function getMatches(): Promise<Match[]> {
  try {
    const filePath = join(process.cwd(), "public", "data", "sports.json");
    const fileContents = readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return data as Match[];
  } catch (error) {
    console.error("Error reading sports.json:", error);
    throw new Error("Failed to load matches");
  }
}
