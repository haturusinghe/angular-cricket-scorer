import { Ball } from './ball';
import { BowlerScore } from './bowler-score';
import { BatterScore } from './player-score';

export interface PostScore {
  teamName: string;
  batting: BatterScore[];
  bowling: BowlerScore[];
}
