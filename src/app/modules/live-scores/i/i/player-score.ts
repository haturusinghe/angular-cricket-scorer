import { Player } from './player';

export interface BatterScore {
  player: Player;
  name?: string;
  runs: number;
  ballsFaced: number;
  sixes: number;
  fours: number;
  strikeRate: number;
  isStrikingNow?: boolean;
}
