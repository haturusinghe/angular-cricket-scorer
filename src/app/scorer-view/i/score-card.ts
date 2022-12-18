export interface Scorecard {
  a_1: A1;
  a_2: A1;
  b_1: A1;
  b_2: A1;
  batting: boolean;
  totalOvers: number;
  inning: number;
}

export interface A1 {
  teamName: string;
  batting: Batting[];
  bowling: Bowling[];
  totalRuns?: number;

  wickets?: number;
  ballsbowled?: number;
  currentOver?: number;
}

export interface Batting {
  player: Player;
  runs: number;
  ballsFaced: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isStrikingNow: boolean;
}

export interface Player {
  id: number;
  name: string;
  photo: null;
  user_id: number;
  date_of_birth: string;
  batting_type: string;
  bowling_type: null;
  fielding_pos: null;
  batting_pos: null;
  wicket_keeper: number;
  description: null;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}

export enum BattingType {
  RightHandedBatsman = 'Right-Handed Batsman',
}

export interface Pivot {
  team_id: number;
  player_id: number;
  verified: number;
}

export interface Bowling {
  player: Player;
  runs: number;
  maidenOvers: number;
  overs: number;
  wickets: number;
  economyRate: number;
}
