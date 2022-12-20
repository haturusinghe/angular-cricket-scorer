import { PlayerScoreCardComponent } from './../player-score-card/player-score-card.component';
import { Cricketer } from './cricketer';
import { Player } from './player';
import { TeamDetails } from './teamDetails';

export interface PlayingTeam {
  success: string;
  team: TeamDetails;
  players: Cricketer[];
}
