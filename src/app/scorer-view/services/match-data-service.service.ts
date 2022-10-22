import { Injectable } from '@angular/core';
import { Ball } from '../i/ball';
import { Over } from '../i/over';
import { Observable, of } from 'rxjs';
import { PlayerDataService } from './player-data.service';
import { Team } from '../i/team';
import { OverData } from '../i/over-data';

@Injectable({
  providedIn: 'root',
})
export class MatchDataServiceService {
  ballLeftForOver: number = 6;
  currentOverNumber: number = 1;
  ballsForThisOver = new Array<Ball>();

  allOvers = new Array<Over>();

  tournamentName: string = 'England Tour of Sri Lanka';
  teams: Team[] = this.playerDataService.getTeams();
  battingTeamIndex: number = 1;
  totalOvers: number = 50;

  currentOver: OverData = { currentOver: 1, ballsLeft: 6 };

  constructor(private playerDataService: PlayerDataService) {}

  getOverDetails(): Observable<Over[]> {
    const overs = of(this.allOvers);
    return overs;
  }

  getMatchMetaDetails() {
    return {
      tName: this.tournamentName,
      totalOvers: this.totalOvers,
      batting: this.teams[this.battingTeamIndex].teamName,
    };
  }

  getCurrentOver(): Observable<OverData> {
    const c = of(this.currentOver);
    return c;
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
      // this.currentOver.ballsLeft = 6;
      this.currentOverNumber++;

      this.ballsForThisOver = new Array<Ball>();
    }

    if (!(ball.extras.includes('WD') || ball.extras.includes('NB'))) {
      this.ballLeftForOver--;
      this.currentOver.ballsLeft--;
    }

    console.log(
      'Current Over:' +
        this.currentOverNumber +
        ' Balls Left:' +
        this.ballLeftForOver
    );

    this.ballsForThisOver.push(ball);
    console.log(this.ballsForThisOver);

    if (this.ballLeftForOver == 0) {
      this.currentOver.currentOver++;
      this.currentOver.ballsLeft = 6;
    }
  }
}
