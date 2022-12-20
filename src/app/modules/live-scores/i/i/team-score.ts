export interface TeamScore {
  teamName: string;
  bowlingTeam?: string;
  inning: string;
  totalScore: number;
  wickets: number;
  currentOver?: number;
  overBallsBowled?: number;
  totalOvers?: number;
  date?: string;
  tournamentName?: string;
}
