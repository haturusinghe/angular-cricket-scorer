import { Ball } from './ball';
import { BowlerScore } from './bowler-score';
import { BatterScore } from './player-score';

export interface Over {
  overNumber: number;
  balls: Ball[];
  striker?: BatterScore;
  nonStriker?: BatterScore;
  bowler?: BowlerScore;
  wickets?: number;
  score?: number;
}
