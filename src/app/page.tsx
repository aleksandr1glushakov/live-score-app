import { getMatches } from "@/lib/matches";
import MatchesPage from "@/components/MatchesPage";


export default async function Home() {
  const matches = await getMatches();

  return <MatchesPage initialMatches={matches} />;
}
