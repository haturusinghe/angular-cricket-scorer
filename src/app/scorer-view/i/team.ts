import { Player } from './player';

export interface Team {
  teamName: string;
  teamId?: number;
  allPlayers?: Player[];
  selectedPlayers: Player[];
  tossWon?: boolean;
  tossChoice?: string;
}
