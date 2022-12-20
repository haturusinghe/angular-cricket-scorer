import { Player } from './player';
import { TeamDetails } from './teamDetails';

export interface TeamResponse {
  success: string;
  teams: TeamDetails[];
}
