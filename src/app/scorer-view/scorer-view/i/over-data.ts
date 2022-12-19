import { Ball } from './ball';

export interface OverData {
  currentOver: number;
  ballsLeft: number;
  balls?: Ball[];
}
