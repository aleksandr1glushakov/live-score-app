import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "data", "sports.json");
    const fileContents = await readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading sports.json:", error);
    return NextResponse.json({ error: "Failed to load matches" }, { status: 500 });
  }
}
