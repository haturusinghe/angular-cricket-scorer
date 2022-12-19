import { BattingType } from './score-card';
export interface Player {
  id: number;
  name: string;
  batting_pos?: any;
  bowling_type?: any;
  created_at?: any;
  date_of_birth?: any;
  description?: any;
  fielding_pos?: any;
  photo?: any;
  pivot?: any;
  updated_at?: any;
  user_id?: number;
  wicket_keeper?: number;
  batting_type?: string;
}
