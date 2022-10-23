import { Injectable } from '@angular/core';
import { Ball } from '../i/ball';
import { Over } from '../i/over';
import { Observable, of, Subject } from 'rxjs';
import { PlayerDataService } from './player-data.service';
import { Team } from '../i/team';
import { OverData } from '../i/over-data';
import { BowlerScore } from '../i/bowler-score';
import { BatterScore } from '../i/player-score';
import { TeamScore } from '../i/team-score';
import { Player } from '../i/player';
import { PlayerChangeService } from './player-change.service';

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

  battingTeamScore: TeamScore = {
    teamName: this.teams[this.battingTeamIndex].teamName,
    inning: '1st',
    totalScore: 0,
    wickets: 0,
  };

  currentOver: OverData = { currentOver: 1, ballsLeft: 6 };

  // Batters
  striker: BatterScore = {
    player: this.teams[this.battingTeamIndex].players[2],
    runs: 0,
    ballsFaced: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
  };
  lastShotPlayed: string = '';

  nonStriker: BatterScore = {
    player: this.teams[this.battingTeamIndex].players[3],
    runs: 0,
    ballsFaced: 0,
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
  lastBowlSpeed: number = 0;
  lastBowlType: String = '';

  constructor(
    private playerDataService: PlayerDataService,
    private playerChangeService: PlayerChangeService
  ) {}

  getBattingTeamPlayers(): Observable<Player[]> {
    const batters = of(this.teams[this.battingTeamIndex].players);
    return batters;
  }

  getBowlingTeamPlayers(): Observable<Player[]> {
    const bowlers = of(this.teams[this.bowlerTeamIndex].players);
    return bowlers;
  }

  changeBowler(player: Player) {
    const index = Math.floor(
      Math.random() * this.teams[this.bowlerTeamIndex].players.length
    );
    let randomPlayer = this.teams[this.battingTeamIndex].players[index];

    this.bowler.player = player;
    this.bowler.economyRate = 0;
    this.bowler.maidenOvers = 0;
    this.bowler.overs = 0;
    this.bowler.runs = 0;
    this.bowler.wickets = 0;
  }

  changeStriker(player: Player) {
    const index = Math.floor(
      Math.random() * this.teams[this.battingTeamIndex].players.length
    );
    let randomPlayer = this.teams[this.battingTeamIndex].players[index];
    this.striker.player = player;
    this.striker.ballsFaced = 0;
    this.striker.fours = 0;
    this.striker.runs = 0;
    this.striker.sixes = 0;
    this.striker.strikeRate = 0;
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

  getBattingTeamScore(): Observable<TeamScore> {
    const bts = of(this.battingTeamScore);
    return bts;
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
    //Update the Striker and Bowler for this
    ball.bowler = this.bowler.player;
    ball.striker = this.striker.player;

    let extraScore: number = 0;
    if (ball.extras.includes('WD') || ball.extras.includes('NB')) {
      extraScore++;
    }
    //Update Bowler Score
    this.bowler.runs += ball.runs + extraScore;
    this.battingTeamScore.totalScore += ball.runs + extraScore;

    //Updating Striker Score
    this.striker.ballsFaced++;
    this.striker.runs += ball.runs;
    if (ball.is4) {
      this.striker.fours++;
    }
    if (ball.is6) {
      this.striker.sixes++;
    }
    this.striker.strikeRate =
      Math.round((this.striker.runs / this.striker.ballsFaced) * 100 * 100) /
      100;

    if (ball.runs % 2 == 1) {
      this.swapBatsman();
    }

    if (this.ballLeftForOver < 1) {
      //For handling when balls in an over ends
      /* this.allOvers.push({
        // Add current over data to large array containing all over data
        overNumber: this.currentOverNumber,
        balls: this.ballsForThisOver,
      }); */

      this.ballLeftForOver = 6; //Update Number of balls for new Over
      this.currentOverNumber++; //Update current over number to next over

      this.ballsForThisOver = new Array<Ball>(); //Replace Balls Array with Empty array
    }
    if (!(ball.extras.includes('WD') || ball.extras.includes('NB'))) {
      //Decrement balls count when its not a Wide or No Ball
      this.ballLeftForOver--;
      this.currentOver.ballsLeft--;
    }

    this.ballsForThisOver.push(ball);
    this.currentOver.balls = this.ballsForThisOver;

    if (this.ballLeftForOver == 0) {
      //Update Current Over Data to Next over when balls are finished for this over
      this.allOvers.push({
        // Add current over data to large array containing all over data
        overNumber: this.currentOverNumber,
        balls: this.ballsForThisOver,
      });
      this.currentOver.currentOver++;
      this.currentOver.ballsLeft = 6;
      this.currentOver.balls = [];
      this.bowler.overs++;
      let sum = 0;
      this.ballsForThisOver.forEach((ball) => {
        sum += ball.runs;
      });
      if (sum == 0) {
        this.bowler.maidenOvers++;
      }
      this.playerChangeService.changeBowler().subscribe((p) => {
        console.log(p);
        this.changeBowler(p);
      });
    }

    if (ball.Out.isOut) {
      this.playerChangeService.changeStriker().subscribe((p) => {
        console.log(p);
        this.changeStriker(p);
      });
    }
  }

  /* changeCurrentBowler() {
    this.playerChangeService.getBowlerDetails().subscribe((p) => {
      console.log(p);
      this.changeBowler(p);
      this.myDataSetter(p);
    });
  }

  changeCurrentStriker() {
    this.playerChangeService
      .getStrikerDetails()
      .subscribe((p) => this.changeStriker(p));
  } */
}
