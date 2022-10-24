import { Ball } from './ball';
import { BowlerScore } from './bowler-score';
import { BatterScore } from './player-score';

export interface PostScore {
  teamName: string;
  batters: BatterScore[];
  bowlers: BowlerScore[];
}
