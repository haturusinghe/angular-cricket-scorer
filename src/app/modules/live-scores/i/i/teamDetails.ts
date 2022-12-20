import { Player } from './player';

export interface TeamDetails {
  id: number;
  members_count: number;
  matches: number;
  wins: number;
  losts: number;
  draws: number;
  name: string;
  logo: string;
  description: string;
  slogan: string;
  created_at: string;
  updated_at: string;
}
