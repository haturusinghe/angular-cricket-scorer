import { BowlerScore } from './bowler-score';
import { Over } from './over';
import { OverData } from './over-data';
import { BatterScore } from './player-score';
import { Team } from './team';
import { TeamScore } from './team-score';

export interface MatchData {
  teams: Team[];
  battingTeamScore: TeamScore;
  battingTeamIndex: number;
  bowlerTeamIndex: number;
  totalOvers: number;
  currentOver: OverData;
  allOvers:Over[];
  striker: BatterScore;
  nonStriker: BatterScore;
  bowler: BowlerScore;
}
