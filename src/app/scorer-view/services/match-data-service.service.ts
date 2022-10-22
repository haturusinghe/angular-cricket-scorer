import { Injectable } from '@angular/core';
import { Ball } from '../i/ball';
import { Over } from '../i/over';

@Injectable({
  providedIn: 'root',
})
export class MatchDataServiceService {
  ballLeftForOver: number = 6;
  currentOverNumber: number = 1;
  currentOverData: Over = { overNumber: 1, balls: [] };
  overs: Over[] = [];

  constructor() {}

  recordBall(ball: Ball) {
    if (this.ballLeftForOver < 1) {
      this.ballLeftForOver = 6;
      this.overs.push(this.currentOverData);
      this.currentOverData.overNumber++;
      console.log(this.overs);
    }

    if (!ball.extras.includes('W') || !ball.extras.includes('WD')) {
      this.ballLeftForOver--;
    }

    this.currentOverData.balls.push(ball);
    console.log(this.currentOverData);
  }
}
