import { Over } from './over';

export interface Scorecard {
  match_id: string;
  date: string;
  description: string;
  team_one: string;
  team_two: string;
  score_card: ScoreCard;
  created_at: string;
  updated_at: string;
  id: number;
}

export interface ScoreCard {
  meta: Meta;
  summary: Summary;
  current_over: CurrentOver;
  current_players: CurrentPlayers;
  innings: Innings;
}

export interface CurrentOver {
  currentOver: number;
  ballsLeft: number;
  balls: Ball[];
}

export interface Ball {
  runs: number;
  is4: boolean;
  is6: boolean;
  extras: any[];
  Out: Out;
  bowler: Player;
  bowlType: string;
  bowlSpeed: number;
  striker: Player;
  shotType: string;
  shotAngle: number;
  nonStriker: Player;
}

export interface Out {
  isOut: boolean;
  type: string;
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

export interface CurrentPlayers {
  striker: NonStriker;
  nonStriker: NonStriker;
  bowler: Bowl;
}

export interface CurrentBatsmans {
  striker: NonStriker;
  non_striker: NonStriker;
}
export interface Bowl {
  player: Player;
  runs: number;
  maidenOvers: number;
  overs: number;
  wickets: number;
  economyRate: number;
}

export interface NonStriker {
  player: Player;
  runs: number;
  ballsFaced: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isStrikingNow: boolean;
}

export interface Innings {
  a_1: A1;
  b_1: A1;
  a_2: A1;
  b_2: A1;
}

export interface A1 {
  teamName: string;
  batting: NonStriker[];
  bowling: Bowl[];
  allOvers: Over[];
  current_players: CurrentPlayers;
  totalScore?:number;
  extras?:number;
}
export interface A2 {}

export interface Meta {
  tName: string;
  totalOvers: number;
  batting: string;
  format: string;
}

export interface Summary {
  teamName: string;
  bowlingTeam: string;
  inning: string;
  totalScore: number;
  wickets: number;
}
