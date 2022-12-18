export interface TeamScore {
  teamName: string;
  bowlingTeam?: string;
  inning: number;
  totalScore: number;
  wickets: number;
  currentOver?: number;
  overBallsBowled?: number;
  totalOvers?: number;
}
