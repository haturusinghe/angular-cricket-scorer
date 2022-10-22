import { Injectable } from '@angular/core';
import { Ball } from '../i/ball';
import { Over } from '../i/over';
import { Observable, of } from 'rxjs';
import { PlayerDataService } from './player-data.service';
import { Team } from '../i/team';
import { OverData } from '../i/over-data';
import { BowlerScore } from '../i/bowler-score';
import { BatterScore } from '../i/player-score';

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
  bowlerTeamIndex: number = 0;
  totalOvers: number = 50;

  currentOver: OverData = { currentOver: 1, ballsLeft: 6 };

  // Batters
  striker: BatterScore = {
    player: this.teams[this.battingTeamIndex].players[2],
    runs: 10,
    ballsFaced: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
  };

  nonStriker: BatterScore = {
    player: this.teams[this.battingTeamIndex].players[3],
    runs: 0,
    ballsFaced: 50,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
  };

  //Bowler
  bowler: BowlerScore = {
    player: this.teams[this.bowlerTeamIndex].players[3],
    runs: 0,
    maidenOvers: 0,
    overs: 0,
    wickets: 0,
    economyRate: 0,
  };

  constructor(private playerDataService: PlayerDataService) {}

  changeBowler() {
    const index = Math.floor(
      Math.random() * this.teams[this.bowlerTeamIndex].players.length
    );
    this.bowler = {
      player: this.teams[this.battingTeamIndex].players[index],
      runs: 0,
      maidenOvers: 0,
      overs: 0,
      wickets: 0,
      economyRate: 0,
    };
  }

  changeStriker() {
    const index = Math.floor(
      Math.random() * this.teams[this.battingTeamIndex].players.length
    );
    this.striker = {
      player: this.teams[this.battingTeamIndex].players[index],
      runs: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
    };
  }

  swapBatsman() {
    let temp = this.striker;
    this.striker = this.nonStriker;
    this.nonStriker = temp;
  }

  getStrikerDetails(): Observable<BatterScore> {
    const striker = of(this.striker);
    return striker;
  }

  getNonStrikerDetails(): Observable<BatterScore> {
    const nonStriker = of(this.nonStriker);
    return nonStriker;
  }

  getBowlerDetails(): Observable<BowlerScore> {
    const bowler = of(this.bowler);
    return bowler;
  }

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
  }
}
