import { Player } from './player';
import { TeamDetails } from './teamDetails';

export interface Cricketer {
  id: number;
  name: string;
  photo: string;
  user_id: number;
  date_of_birth: string;
  batting_type: string;
  bowling_type: string;
}
