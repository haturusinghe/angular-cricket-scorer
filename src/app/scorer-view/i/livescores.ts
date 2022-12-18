import { Scorecard } from './score-card';
export interface LiveScores {
  match_id: string;
  date: string;
  description: string;
  team_one: string;
  team_two: string;
  scorecard: Scorecard;
  
}
