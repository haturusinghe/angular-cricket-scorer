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
import { PostScore } from '../i/post-scores';
import { PreGameDataService } from './pre-game-data.service';
import { PostGameService } from './post-game.service';
import { ScoreCard } from './score-card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TestMatchScorerService } from './updated-scorer-service.service';

@Injectable({
  providedIn: 'root',
})
export class MatchDataServiceService {
  format = 'test';
  // Properties
  ballLeftForOver: number = 6;
  currentOverNumber: number = 1;
  ballsForThisOver = new Array<Ball>();

  inningThreshold: number = 0;

  allOvers = new Array<Over>();

  tournamentName: string = 'England Tour of Sri Lanka';

  teams: Team[] = this.playerDataService.getTeams();

  battingTeamIndex: number = 1;
  bowlerTeamIndex: number = 0;
  totalOvers: number = 3;

  battingTeamScore: TeamScore = {
    teamName: this.teams[this.battingTeamIndex].teamName,
    bowlingTeam: this.teams[this.battingTeamIndex == 0 ? 1 : 0].teamName,
    inning: '1st',
    totalScore: 0,
    wickets: 0,
  };

  preGameData = { tournamentName: '', totalOvers: 69 };

  currentOver: OverData = { currentOver: 1, ballsLeft: 6 };

  firstTeamBattingScores = new Array<BatterScore>();
  secondTeamBattingScores = new Array<BatterScore>();
  firstTeamBowlingScores = new Array<BowlerScore>();
  secondTeamBowlingScores = new Array<BowlerScore>();
  scoreTeamIndex = true;
  teamPlayerScores: PostScore[] = [
    {
      teamName: this.teams[this.battingTeamIndex].teamName,
      batting: this.firstTeamBattingScores,
      bowling: this.firstTeamBowlingScores,
    },
    {
      teamName: this.teams[this.battingTeamIndex == 0 ? 1 : 0].teamName,
      batting: this.secondTeamBattingScores,
      bowling: this.secondTeamBowlingScores,
    },
  ];

  // Batters
  striker: BatterScore = {
    player: this.teams[this.battingTeamIndex].selectedPlayers[2],
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
    player: this.teams[this.battingTeamIndex].selectedPlayers[3],
    runs: 0,
    ballsFaced: 0,
    fours: 0,
    sixes: 0,
    strikeRate: 0,
    isStrikingNow: false,
  };

  //Bowler
  bowler: BowlerScore = {
    player: this.teams[this.bowlerTeamIndex].selectedPlayers[3],
    runs: 0,
    maidenOvers: 0,
    overs: 0,
    wickets: 0,
    economyRate: 0,
  };
  lastBowlSpeed: number = 0;
  lastBowlType: string = '';

  meta: any;

  currentInning: number = 1;

  isTestMatch = true;

  constructor(
    private preGameDataService: PreGameDataService,
    private playerDataService: PlayerDataService,
    private playerChangeService: PlayerChangeService,
    private local: LocalStorageService,
    private session: SessionStorageService,
    private postGameService: PostGameService,
    private testMatchService: TestMatchScorerService,
    private _snackBar: MatSnackBar
  ) {}

  //Loads Data from Pre-Game Component
  /*
    # Used By:
      #
  */
  loadPreGameDataFromService() {
    this.preGameDataService
      .getTournamentName()
      .subscribe((tN) => (this.tournamentName = tN));
    this.preGameDataService
      .getOvers()
      .subscribe((ov) => (this.totalOvers = ov));

    let index = this.preGameDataService.getTeamIndexes();

    this.battingTeamIndex = index.batting;
    this.bowlerTeamIndex = index.bowling;

    this.preGameDataService.getFirstBattingTeam().subscribe((bat) => {
      this.battingTeamScore.teamName = bat.teamName;
      this.teamPlayerScores[0].teamName = bat.teamName;
      console.log(bat);
    });
    this.preGameDataService.getFirstBowlingTeam().subscribe((bowl) => {
      this.battingTeamScore.bowlingTeam = bowl.teamName;
      this.teamPlayerScores[1].teamName = bowl.teamName;
      console.log(bowl);
    });

    this.preGameDataService
      .getTeamsArray()
      .subscribe((arr) => (this.teams = arr));
  }

  //match-summary
  getBattingTeamScore(): Observable<TeamScore> {
    const bts = of(this.battingTeamScore);
    return bts;
  }

  //match-summary
  getMatchMetaDetails() {
    return {
      tName: this.tournamentName,
      totalOvers: this.totalOvers,
      batting: this.teams[this.battingTeamIndex].teamName,
      format: this.format,
    };
  }

  //match-summary
  getCurrentOver(): Observable<OverData> {
    const c = of(this.currentOver);
    return c;
  }

  //batter-panel
  getStrikerDetails(): Observable<BatterScore> {
    const striker = of(this.striker);
    return striker;
  }

  //batter-panel
  getNonStrikerDetails(): Observable<BatterScore> {
    const nonStriker = of(this.nonStriker);
    return nonStriker;
  }

  //batter-panel
  swapBatsman() {
    let temp = this.striker;
    this.striker = this.nonStriker;
    this.nonStriker = temp;

    //
    this.striker.isStrikingNow = true;
    this.nonStriker.isStrikingNow = false;
  }

  //batter-panel
  changeStriker(player: Player) {
    this.striker.player = player;
    this.striker.ballsFaced = 0;
    this.striker.fours = 0;
    this.striker.runs = 0;
    this.striker.sixes = 0;
    this.striker.strikeRate = 0;
    this.striker.isStrikingNow = true;
  }

  //batter-panel
  changeLastShotType(shot: string) {
    this.lastShotPlayed = shot;
  }

  //change-batsman
  getBattingTeamPlayers(): Observable<Player[]> {
    const batters = of(this.teams[this.battingTeamIndex].selectedPlayers);
    return batters;
  }

  //bowler-panel
  getBowlerDetails(): Observable<BowlerScore> {
    const bowler = of(this.bowler);
    return bowler;
  }

  //bowler-panel
  changeBowler(player: Player) {
    this.bowler.player = player;
    this.bowler.economyRate = 0;
    this.bowler.maidenOvers = 0;
    this.bowler.overs = 0;
    this.bowler.runs = 0;
    this.bowler.wickets = 0;
  }

  //bowler-panel
  changeLastBowlInfo(type: string, speed: number) {
    this.lastBowlType = type;
    this.lastBowlSpeed = speed;
  }

  //change-bowler
  getBowlingTeamPlayers(): Observable<Player[]> {
    const bowlers = of(this.teams[this.bowlerTeamIndex].selectedPlayers);
    return bowlers;
  }

  //wagon-wheel-selector
  changeLastShotAngle(angle: number) {
    this.lastShotAngle = angle;
  }

  sendScores(scoreCard: ScoreCard) {
    this.postGameService.postScorecardToApi(scoreCard).subscribe((s) => {
      console.log(s);
    });
  }

  getTeamNames() {
    return {
      batters: this.teams[this.battingTeamIndex].teamName,
      bowlers: this.teams[this.battingTeamIndex == 0 ? 1 : 0].teamName,
    };
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

  //Swap Batting Teams when Overs/Wickets are over
  swapBattingTeam() {
    if (this.scoreTeamIndex == false) {
    }

    this.scoreTeamIndex = false;
    let temp = this.battingTeamIndex;
    this.battingTeamIndex = this.bowlerTeamIndex;
    this.bowlerTeamIndex = temp;

    this.currentOver.currentOver = 1;
    this.currentOver.ballsLeft = 6;

    this.battingTeamScore.teamName = this.teams[this.battingTeamIndex].teamName;
    this.battingTeamScore.bowlingTeam =
      this.teams[this.bowlerTeamIndex].teamName;
    this.battingTeamScore.totalScore = 0;
    this.battingTeamScore.wickets = 0;
    this.battingTeamScore.inning = '2nd';

    while (this.allOvers.length > 0) {
      this.allOvers.pop();
    }
    this.selectOpeningPlayers();
  }

  createScoreCard(): ScoreCard {
    let today = new Date().toLocaleDateString('en-GB');
    let bowlers = [];
    if (this.scoreTeamIndex) {
      bowlers = this.teamPlayerScores[1].bowling.map((b) => ({
        name: b.player.name,
        overs: b.overs,
        runs: b.runs,
        fours: 0,
      }));
    } else {
      bowlers = this.teamPlayerScores[0].bowling.map((b) => ({
        name: b.player.name,
        overs: b.overs,
        runs: b.runs,
        fours: 0,
      }));
    }

    let scoreCard = new ScoreCard(
      'test_match_1',
      today,
      'Over',
      this.teams[this.battingTeamIndex].teamName,
      this.teams[this.bowlerTeamIndex].teamName,
      {}
    );

    let inningsRecord = {
      overs: this.currentOver.currentOver - 1,
      batting: {
        runs: this.battingTeamScore.totalScore,
        wickets: this.battingTeamScore.wickets,
      },
      bowling: {
        bowlers: bowlers,
      },
      ball_by_ball: {},
    };

    scoreCard.score_card['innings'] = {
      batting: this.battingTeamScore.teamName,
      bowling: this.battingTeamScore.bowlingTeam,
      score: inningsRecord,
    };

    console.log(scoreCard);
    return scoreCard;
  }

  generateScoreCard(): ScoreCard {
    let today = new Date().toLocaleDateString('en-GB');

    let scoreCard = new ScoreCard(
      'test_match_1',
      today,
      'Over',
      this.teams[this.battingTeamIndex].teamName,
      this.teams[this.bowlerTeamIndex].teamName,
      {}
    );
    scoreCard.score_card['meta'] = {
      tName: this.tournamentName,
      totalOvers: this.totalOvers,
      batting: this.teams[this.battingTeamIndex].teamName,
      format: this.format,
    };
    scoreCard.score_card['summary'] = this.battingTeamScore;
    scoreCard.score_card['current_over'] = this.currentOver;
    scoreCard.score_card['current_players'] = {
      striker: this.striker,
      non_striker: this.nonStriker,
      bowler: this.bowler,
    };

    console.log(scoreCard);
    return scoreCard;
  }

  getPlayerTeamScores(): Observable<BatterScore[]> {
    const playerScores = of(this.firstTeamBattingScores);
    return playerScores;
  }

  getAllPlayerTeamScores(): Observable<PostScore[]> {
    const playerScores = of(this.teamPlayerScores);
    return playerScores;
  }

  getOverDetails(): Observable<Over[]> {
    const overs = of(this.allOvers);
    return overs;
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
    ball.striker = this.striker.player;
    ball.shotType = this.lastShotPlayed;
    ball.shotAngle = this.lastShotAngle;
    ball.nonStriker = this.nonStriker.player;
    // console.log(ball);

    //Update Batting Team Score & Wickets
    this.battingTeamScore.totalScore += ball.runs + extraScore;
    if (ball.Out.isOut) {
      this.battingTeamScore.wickets++;
      this.bowler.wickets++;
    }

    //Update Bowler Score
    this.bowler.runs += ball.runs + extraScore;

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
  }

  //runs-panel
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
    // console.log(this.currentOver);

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
      // console.log(this.allOvers);

      // this.saveCurrentOver();

      //Resets the current over data to beginning of new over
      this.currentOver.currentOver++;
      this.currentOver.ballsLeft = 6;
      this.currentOver.balls = [];

      //Since its the end of the over, update the bowler stats of overs bowled and eco-rate
      this.bowler.overs++;
      this.bowler.economyRate =
        Math.round((this.bowler.runs / this.bowler.overs) * 100) / 100;

      let sum = 0;
      this.ballsForThisOver.forEach((ball) => {
        sum += ball.runs;
      });
      if (sum == 0) {
        this.bowler.maidenOvers++;
      }
    }

    if (!this.isTestMatch) {
      if (this.currentOver.currentOver <= this.totalOvers) {
        if (ball.Out.isOut && ball.Out.type == 'RON') {
          if (this.battingTeamScore.wickets < 10) {
            if (ball.runs % 2 == 1) {
              this.addToTeamScores(structuredClone(this.striker)); // Add this strikers personal score to object containing batter scores
              //If all batters are not out then prompt to pick the next batsman
              this.playerChangeService
                .changeStriker('Select Next Striker')
                .subscribe((p) => {
                  this.changeStriker(p);
                });
            } else {
              this.addToTeamScores(structuredClone(this.nonStriker)); // Add this strikers personal score to object containing batter scores
              //If all batters are not out then prompt to pick the next batsman
              this.playerChangeService
                .changeStriker('Select Next Non-Striker')
                .subscribe((p) => {
                  this.changeNonStriker(p);
                });
            }
          }
        } else if (ball.Out.isOut) {
          if (this.battingTeamScore.wickets < 10) {
            //If the current striker is bowled out
            this.addToTeamScores(structuredClone(this.striker)); // Add this strikers personal score to object containing batter scores
            //If all batters are not out then prompt to pick the next batsman
            this.playerChangeService
              .changeStriker('Select Next Striker')
              .subscribe((p) => {
                this.changeStriker(p);
              });
          }
        }
      }

      if (this.ballLeftForOver == 0 && this.battingTeamScore.wickets < 10) {
        //When all balls for this over are bowled and not all batters are out
        if (this.currentOver.currentOver <= this.totalOvers) {
          // And not all overs are finished

          this.addToTeamScoresBowler(structuredClone(this.bowler)); // Add this bowlers score to object containing bowler scores
          //Prompt to pick next Bowler
          this.playerChangeService
            .changeBowler('Select Next Bowler')
            .subscribe((p) => {
              this.changeBowler(p);
            });
        }
      }

      // Swap Batting Team when Overs over
      if (
        this.currentOver.currentOver > this.totalOvers ||
        this.battingTeamScore.wickets >= 10
      ) {
        this._snackBar.open('Switching Batting Team', '', {
          horizontalPosition: 'start',
          verticalPosition: 'bottom',
          duration: 2 * 1000,
        });

        this.addToTeamScoresBowler(structuredClone(this.bowler));
        this.addToTeamScores(structuredClone(this.striker));
        this.addToTeamScores(structuredClone(this.nonStriker));

        this.sendScores(this.generateScoreCard()); //Uncomment Later After fixing
        // console.log(this.teamPlayerScores);

        this.inningThreshold++;
        if (this.inningThreshold == 2) {
          this.testMatchService.updateInningData(
            this.teamPlayerScores,
            this.currentInning,
            this.generateScoreCard()
          );
          this.inningThreshold = 0;
          if (this.currentInning == 1) {
            this.currentInning = 2;
          }
        }

        this.swapBattingTeam();
      }
    } else {
      if (ball.Out.isOut && ball.Out.type == 'RON') {
        if (this.battingTeamScore.wickets < 10) {
          if (ball.runs % 2 == 1) {
            this.addToTeamScores(structuredClone(this.striker)); // Add this strikers personal score to object containing batter scores
            //If all batters are not out then prompt to pick the next batsman
            this.playerChangeService
              .changeStriker('Select Next Striker')
              .subscribe((p) => {
                this.changeStriker(p);
              });
          } else {
            this.addToTeamScores(structuredClone(this.nonStriker)); // Add this strikers personal score to object containing batter scores
            //If all batters are not out then prompt to pick the next batsman
            this.playerChangeService
              .changeStriker('Select Next Non-Striker')
              .subscribe((p) => {
                this.changeNonStriker(p);
              });
          }
        }
      } else if (ball.Out.isOut) {
        if (this.battingTeamScore.wickets < 10) {
          //If the current striker is bowled out
          this.addToTeamScores(structuredClone(this.striker)); // Add this strikers personal score to object containing batter scores
          //If all batters are not out then prompt to pick the next batsman
          this.playerChangeService
            .changeStriker('Select Next Striker')
            .subscribe((p) => {
              this.changeStriker(p);
            });
        }
      }

      if (this.ballLeftForOver == 0 && this.battingTeamScore.wickets < 10) {
        //When all balls for this over are bowled and not all batters are out

        this.addToTeamScoresBowler(structuredClone(this.bowler)); // Add this bowlers score to object containing bowler scores
        //Prompt to pick next Bowler
        this.playerChangeService
          .changeBowler('Select Next Bowler')
          .subscribe((p) => {
            this.changeBowler(p);
          });
      }

      // Swap Batting Team when Overs over
      if (this.battingTeamScore.wickets >= 10) {
        this._snackBar.open('Switching Batting Team', '', {
          horizontalPosition: 'start',
          verticalPosition: 'bottom',
          duration: 2 * 1000,
        });

        this.addToTeamScoresBowler(structuredClone(this.bowler));
        this.addToTeamScores(structuredClone(this.striker));
        this.addToTeamScores(structuredClone(this.nonStriker));

        // this.createScoreCard(); //Uncomment Later After fixing

        this.inningThreshold++;
        if (this.inningThreshold == 2) {
          this.testMatchService.updateInningData(
            this.teamPlayerScores,
            this.currentInning,
            this.generateScoreCard()
          );
          this.inningThreshold = 0;
          if (this.currentInning == 1) {
            this.currentInning = 2;
          }
        }

        this.swapBattingTeam();
      }
    }

    // this.saveAllOversLocally();
  }

  endInnings() {
    /* this.addToTeamScoresBowler(structuredClone(this.bowler));
    this.addToTeamScores(structuredClone(this.striker));
    this.addToTeamScores(structuredClone(this.nonStriker));
    this.testMatchService.updateInningData(this.teamPlayerScores, inning); */

    this._snackBar.open('Declared - Switching Batting Team', '', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 2 * 1000,
    });

    this.addToTeamScoresBowler(structuredClone(this.bowler));
    this.addToTeamScores(structuredClone(this.striker));
    this.addToTeamScores(structuredClone(this.nonStriker));

    // this.sendScores(this.createScoreCard()); //Uncomment Later After fixing
    // console.log(this.teamPlayerScores);

    this.inningThreshold++;
    if (this.inningThreshold == 2) {
      this.testMatchService.updateInningData(
        this.teamPlayerScores,
        this.currentInning,
        this.generateScoreCard()
      );
      this.inningThreshold = 0;
      if (this.currentInning == 1) {
        this.currentInning = 2;
      }
    }

    this.swapBattingTeam();
  }

  //runs-panel
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

  addToTeamScores(b: BatterScore) {
    if (this.scoreTeamIndex) {
      this.teamPlayerScores[0].batting.push(b);
    } else {
      this.teamPlayerScores[1].batting.push(b);
    }
  }

  addToTeamScoresBowler(b: BowlerScore) {
    if (this.scoreTeamIndex) {
      this.teamPlayerScores[1].bowling.push(b);
    } else {
      this.teamPlayerScores[0].bowling.push(b);
    }
  }
}
