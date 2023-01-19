import { Player } from './player';

export interface Out {
  isOut: boolean;
  type?: string;
}
export interface Ball {
  runs: number;
  is4: boolean;
  is6: boolean;
  extras: string[];
  striker: Player;
  shotType?: string;
  shotAngle?: number;
  nonStriker?: Player;
  bowler?: Player;
  bowlType?: string;
  bowlSpeed?: number;
  Out: Out;
}
