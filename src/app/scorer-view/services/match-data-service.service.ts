import { Injectable } from '@angular/core';
import { Ball } from '../i/ball';
import { Over } from '../i/over';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchDataServiceService {
  ballLeftForOver: number = 6;
  currentOverNumber: number = 1;
  ballsForThisOver = new Array<Ball>();

  allOvers = new Array<Over>();

  constructor() {}

  getOverDetails(): Observable<Over[]> {
    const overs = of(this.allOvers);
    return overs;
  }

  recordBall(ball: Ball) {
    /* if (this.ballLeftForOver < 1) {
      this.ballLeftForOver = 6;
      this.overs.push(this.currentOverData);
      this.currentOverData.overNumber++;
      console.log(this.overs);
    }

    if (!ball.extras.includes('W') || !ball.extras.includes('WD')) {
      this.ballLeftForOver--;
    }

    this.currentOverData.balls.push(ball);
    console.log(this.currentOverData); */

    if (this.ballLeftForOver < 1) {
      this.allOvers.push({
        overNumber: this.currentOverNumber,
        balls: this.ballsForThisOver,
      });
      console.log(this.allOvers);
      this.ballLeftForOver = 6;
      this.currentOverNumber++;
      this.ballsForThisOver = new Array<Ball>();
    }

    if (!(ball.extras.includes('WD') || ball.extras.includes('NB'))) {
      this.ballLeftForOver--;
    }

    console.log(
      'Current Over:' +
        this.currentOverNumber +
        ' Balls Left:' +
        this.ballLeftForOver
    );

    this.ballsForThisOver.push(ball);
    console.log(this.ballsForThisOver);
  }
}
