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
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage,
} from 'angular-web-storage';

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
  totalOvers: number = 3;

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
    isStrikingNow: true,
  };
  lastShotPlayed: string = '';
  lastShotAngle: number = 0;

  nonStriker: BatterScore = {
    player: this.teams[this.battingTeamIndex].players[3],
    runs: 0,
    ballsFaced: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    isStrikingNow: false,
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
  lastBowlType: string = '';

  constructor(
    private playerDataService: PlayerDataService,
    private playerChangeService: PlayerChangeService,
    private local: LocalStorageService,
    private session: SessionStorageService
  ) {
    /* let d = this.local.get('CURRENT_OVER');
    console.log(d.currentOver);
    if (d.currentOver) {
      this.currentOver = d.currentOver;
    } */
    /* let d = this.local.get('CURRENT_MATCH');
    console.log(d.allOvers);
    if (d.allOvers) {
      this.allOvers = d.allOvers;
    } */
  }

  changeLastShotType(shot: string) {
    this.lastShotPlayed = shot;
  }

  changeLastShotAngle(angle: number) {
    this.lastShotAngle = angle;
  }

  changeLastBowlInfo(type: string, speed: number) {
    this.lastBowlType = type;
    this.lastBowlSpeed = speed;
  }

  getBattingTeamPlayers(): Observable<Player[]> {
    const batters = of(this.teams[this.battingTeamIndex].players);
    return batters;
  }

  getBowlingTeamPlayers(): Observable<Player[]> {
    const bowlers = of(this.teams[this.bowlerTeamIndex].players);
    return bowlers;
  }

  changeBowler(player: Player) {
    this.bowler.player = player;
    this.bowler.economyRate = 0;
    this.bowler.maidenOvers = 0;
    this.bowler.overs = 0;
    this.bowler.runs = 0;
    this.bowler.wickets = 0;
  }

  changeStriker(player: Player) {
    this.striker.player = player;
    this.striker.ballsFaced = 0;
    this.striker.fours = 0;
    this.striker.runs = 0;
    this.striker.sixes = 0;
    this.striker.strikeRate = 0;
    this.striker.isStrikingNow = true;
  }

  //Change Non Striker
  changeNonStriker(player: Player) {
    this.nonStriker.player = player;
    this.nonStriker.ballsFaced = 0;
    this.nonStriker.fours = 0;
    this.nonStriker.runs = 0;
    this.nonStriker.sixes = 0;
    this.nonStriker.strikeRate = 0;
    this.nonStriker.isStrikingNow = false;
  }

  swapBatsman() {
    let temp = this.striker;
    this.striker = this.nonStriker;
    this.nonStriker = temp;

    //
    this.striker.isStrikingNow = true;
    this.nonStriker.isStrikingNow = false;
  }

  //Swap Batting Teams when Overs/Wickets are over
  swapBattingTeam() {
    let temp = this.battingTeamIndex;
    this.battingTeamIndex = this.bowlerTeamIndex;
    this.bowlerTeamIndex = temp;

    this.currentOver.currentOver = 1;
    this.currentOver.ballsLeft = 6;

    this.battingTeamScore.teamName = this.teams[this.battingTeamIndex].teamName;
    this.battingTeamScore.totalScore = 0;
    this.battingTeamScore.wickets = 0;
    this.battingTeamScore.inning = '2nd';

    while (this.allOvers.length > 0) {
      this.allOvers.pop();
    }
    console.log(this.allOvers);

    this.selectOpeningPlayers();
  }

  selectOpeningPlayers() {
    this.playerChangeService
      .changeStriker('Select Starting Striker')
      .subscribe((p) => {
        this.changeStriker(p);

        this.playerChangeService
          .changeStriker('Select Starting Non-Striker')
          .subscribe((p) => {
            this.changeNonStriker(p);

            this.playerChangeService
              .changeBowler('Select Starting Bowler')
              .subscribe((p) => {
                this.changeBowler(p);
              });
          });
      });
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

  //Saving Data Locally
  saveAllOversLocally() {
    this.local.set('CURRENT_MATCH', {
      // teams: this.teams,
      // battingTeamScore: this.battingTeamScore,
      // battingTeamIndex: this.battingTeamIndex,
      // bowlerTeamIndex: this.bowlerTeamIndex,
      // totalOvers: this.totalOvers,
      // currentOver: this.currentOver,
      allOvers: this.allOvers,
      // striker: this.striker,
      // nonStriker: this.nonStriker,
      // bowler: this.bowler,
    });
  }

  saveCurrentOver() {
    this.local.set('CURRENT_OVER', {
      currentOver: this.currentOver,
    });
  }

  readLocalData() {
    let d = this.local.get('CURRENT_OVER');
    console.log(d);
  }

  updatePlayerInfoForBall(ball: Ball) {
    //Update the Striker and Bowler for this
    ball.bowler = this.bowler.player;
    ball.bowlType = this.lastBowlType;
    ball.bowlSpeed = this.lastBowlSpeed;
    let extraScore: number = 0;
    if (ball.extras.includes('WD') || ball.extras.includes('NB')) {
      extraScore++;
    }
    //Update Batting Team Score & Wickets
    this.battingTeamScore.totalScore += ball.runs + extraScore;
    if (ball.Out.isOut) {
      this.battingTeamScore.wickets++;
    }

    //Update Bowler Score
    this.bowler.runs += ball.runs + extraScore;

    ball.striker = this.striker.player;
    ball.shotType = this.lastShotPlayed;
    ball.shotAngle = this.lastShotAngle;

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

    ball.nonStriker = this.nonStriker.player;
  }

  recordBall(ball: Ball) {
    //Update the Striker and Bowler for this
    this.updatePlayerInfoForBall(ball);

    if (ball.runs % 2 == 1) {
      this.swapBatsman();
    }

    if (this.ballLeftForOver < 1) {
      //For handling when balls in an over ends

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
        score: this.battingTeamScore.totalScore,
        wickets: this.battingTeamScore.wickets,
        striker: structuredClone(this.striker),
        nonStriker: structuredClone(this.nonStriker),
        bowler: structuredClone(this.bowler),
      });

      // this.saveCurrentOver();

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
    }

    if (this.currentOver.currentOver <= this.totalOvers) {
      if (ball.Out.isOut) {
        this.playerChangeService
          .changeStriker('Select Next Striker')
          .subscribe((p) => {
            this.changeStriker(p);
          });
      }
    }

    if (this.ballLeftForOver == 0) {
      if (this.currentOver.currentOver <= this.totalOvers) {
        this.playerChangeService
          .changeBowler('Select Next Bowler')
          .subscribe((p) => {
            this.changeBowler(p);
          });
      }
    }

    // Swap Batting Team when Overs over
    if (this.currentOver.currentOver > this.totalOvers) {
      this.swapBattingTeam();
    }
    // this.saveAllOversLocally();
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
