import { Player } from './player';
export interface BowlerScore {
  player: Player;
  name?: string;
  overs: number;
  maidenOvers: number;
  runs: number;
  wickets: number;
  economyRate: number;
}
