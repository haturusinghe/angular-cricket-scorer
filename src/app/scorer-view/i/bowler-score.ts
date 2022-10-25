import { Player } from './player';
export interface BowlerScore {
  player: Player;
  overs: number;
  maidenOvers: number;
  runs: number;
  wickets: number;
  economyRate: number;
}
