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
import { ResumeCard, ResumeScoringService } from './resume-scoring.service';

@Injectable({
  providedIn: 'root',
})
export class MatchDataServiceService {
  constructor(
    private preGameDataService: PreGameDataService,
    private playerDataService: PlayerDataService,
    private playerChangeService: PlayerChangeService,
    private local: LocalStorageService,
    private session: SessionStorageService,
    private postGameService: PostGameService,
    private testMatchService: TestMatchScorerService,
    private resumeService: ResumeScoringService,
    private _snackBar: MatSnackBar
  ) {}

  format = 'test';
  // Properties
  ballLeftForOver: number = 6;
  currentOverNumber: number = 1;
  ballsForThisOver = new Array<Ball>();

  inningThreshold: number = 0; //#TODO : Check if we resume after inning change, still works

  allOvers = new Array<Over>();

  tournamentName: string = 'England Tour of Sri Lanka';

  teams: Team[] = this.playerDataService.getTeams();

  battingTeamIndex: number = 1;
  bowlerTeamIndex: number = 0;
  totalOvers: number = 3;

  battingTeamScore: TeamScore = {
    teamName: this.teams[this.battingTeamIndex].teamName,
    bowlingTeam: this.teams[this.battingTeamIndex == 0 ? 1 : 0].teamName,
    inning: '1',
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
  matchId: any;
  isResuming: boolean = false;
  notSwapped = false; // true/false if after the end of the inning teams are swapped ?

  //Loads Data from Pre-Game Component
  loadPreGameDataFromService() {
    this.preGameDataService.getMatchId().subscribe((id) => (this.matchId = id));

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

  //Resets Session
  resetScoringSession() {
    this.format = 'test';
    // Properties
    this.ballLeftForOver = 6;
    this.currentOverNumber = 1;
    this.ballsForThisOver = new Array<Ball>();

    this.inningThreshold = 0; //#TODO : Check if we resume after inning change, still works

    this.allOvers = new Array<Over>();

    this.tournamentName = 'RESET T';

    this.teams = this.playerDataService.getTeams();

    this.battingTeamIndex = 1;
    this.bowlerTeamIndex = 0;
    this.totalOvers = 3;

    this.battingTeamScore = {
      teamName: this.teams[this.battingTeamIndex].teamName,
      bowlingTeam: this.teams[this.battingTeamIndex == 0 ? 1 : 0].teamName,
      inning: '1',
      totalScore: 0,
      wickets: 0,
    };

    this.preGameData = { tournamentName: '', totalOvers: 69 };

    this.currentOver = { currentOver: 1, ballsLeft: 6 };

    this.firstTeamBattingScores = new Array<BatterScore>();
    this.secondTeamBattingScores = new Array<BatterScore>();
    this.firstTeamBowlingScores = new Array<BowlerScore>();
    this.secondTeamBowlingScores = new Array<BowlerScore>();
    this.scoreTeamIndex = true;
    this.teamPlayerScores = [
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
    this.striker = {
      player: this.teams[this.battingTeamIndex].selectedPlayers[2],
      runs: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
      isStrikingNow: true,
    };
    this.lastShotPlayed = '';
    this.lastShotAngle = 0;

    this.nonStriker = {
      player: this.teams[this.battingTeamIndex].selectedPlayers[3],
      runs: 0,
      ballsFaced: 0,
      fours: 0,
      sixes: 0,
      strikeRate: 0,
      isStrikingNow: false,
    };

    //Bowler
    this.bowler = {
      player: this.teams[this.bowlerTeamIndex].selectedPlayers[3],
      runs: 0,
      maidenOvers: 0,
      overs: 0,
      wickets: 0,
      economyRate: 0,
    };
    this.lastBowlSpeed = 0;
    this.lastBowlType = '';

    this.currentInning = 1;

    this.isTestMatch = true;
    this.isResuming = false;
    this.notSwapped = false; // true/false if after the end of the inning teams are swapped ?
  }

  //Resumes Session
  resumeScoringSession() {
    this.isResuming = true;
    let localResumeData: ResumeCard[] = [];
    let s = sessionStorage.getItem('resuming_match');
    if (s) {
      let data: ResumeCard = JSON.parse(s);
      localResumeData.push(data);
    }
    if (localResumeData.length > 0) {
      console.log(localResumeData[0]);

      this.matchId = localResumeData[0].match_id;
      this.tournamentName = localResumeData[0].tournament_name;

      this.ballLeftForOver = localResumeData[0].over_data.ballLeftForOver;
      this.currentOverNumber = localResumeData[0].over_data.currentOverNumber;
      this.totalOvers = localResumeData[0].over_data.totalOvers;

      this.allOvers = localResumeData[0].over_data.allOvers;
      this.currentOver = localResumeData[0].over_data.currentOver;
      this.ballsForThisOver = localResumeData[0].over_data.ballsForThisOver;

      this.isTestMatch = localResumeData[0].inning_data.isTestMatch;
      this.inningThreshold = localResumeData[0].inning_data.inningThreshold;
      this.currentInning = localResumeData[0].inning_data.currentInning;

      this.battingTeamScore = localResumeData[0].battingTeamScore;

      this.teamPlayerScores = localResumeData[0].teamPlayerScores;

      this.battingTeamIndex = localResumeData[0].team_data.battingTeamIndex;
      this.bowlerTeamIndex = localResumeData[0].team_data.bowlerTeamIndex;
      this.teams = localResumeData[0].team_data.teams;

      this.bowler = localResumeData[0].current_players.bowler;
      this.striker = localResumeData[0].current_players.striker;
      this.nonStriker = localResumeData[0].current_players.nonStriker;

      this.notSwapped = localResumeData[0].other.notSwapped;
      this.scoreTeamIndex = localResumeData[0].other.scoreTeamIndex;
      // this.currentInning = localResumeData[0].other.currentInning
    }
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
      matchId: this.matchId,
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

  /* sendScores(scoreCard: ScoreCard) {
    this.postGameService.postScorecardToApi(scoreCard).subscribe((s) => {
      console.log(s);
    });
  } */

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
  swapBattingTeam(swith: boolean) {
    // #NANDUN : This method has the logic for what to do when the batting teams change
    // DONT CHANGE THIS METHOD
    if (this.currentInning == 2 && this.inningThreshold == 0) {
      this.teamPlayerScores.forEach((s) => {
        while (s.batting.length > 0) {
          s.batting.pop();
        }
        while (s.bowling.length > 0) {
          s.bowling.pop();
        }
      });
    }

    // This keeps track if the batting teams change
    // Needed for keeping track of indivigual player scores
    this.scoreTeamIndex = !this.scoreTeamIndex;

    if (swith) {
      let temp = this.battingTeamIndex;
      this.battingTeamIndex = this.bowlerTeamIndex;
      this.bowlerTeamIndex = temp;
    }

    this.currentOver.currentOver = 1;
    this.currentOver.ballsLeft = 6;
    this.ballLeftForOver = 6;

    this.battingTeamScore.teamName = this.teams[this.battingTeamIndex].teamName;
    this.battingTeamScore.bowlingTeam =
      this.teams[this.bowlerTeamIndex].teamName;
    this.battingTeamScore.totalScore = 0;
    this.battingTeamScore.wickets = 0;
    this.battingTeamScore.inning = this.currentInning.toString();

    while (this.allOvers.length > 0) {
      this.allOvers.pop();
    }
    this.selectOpeningPlayers();
  }

  generateResumeCard(): ScoreCard {
    // #NANDUN : This methods create one ohject which has the entire state of the Scorer at a given moment
    // DO NOT CHANGE THIS
    let today = new Date().toLocaleDateString('en-GB');
    let resume_id = 'r_' + this.matchId;
    let scorer_id = sessionStorage.getItem('user_id');
    let description = { scorer_id: scorer_id, isOver: false };
    let resumeCard = new ScoreCard(
      resume_id,
      today,
      JSON.stringify(description),
      this.teams[this.battingTeamIndex].teamName,
      this.teams[this.bowlerTeamIndex].teamName,
      {}
    );

    resumeCard.score_card['match_id'] = this.matchId;
    resumeCard.score_card['tournament_name'] = this.tournamentName;

    resumeCard.score_card['current_players'] = {
      striker: this.striker,
      nonStriker: this.nonStriker,
      bowler: this.bowler,
    };

    resumeCard.score_card['over_data'] = {
      ballLeftForOver: this.ballLeftForOver,
      currentOverNumber: this.currentOverNumber,
      allOvers: this.allOvers,
      currentOver: this.currentOver,
      ballsForThisOver: this.ballsForThisOver,
      totalOvers: this.totalOvers,
    };

    resumeCard.score_card['inning_data'] = {
      isTestMatch: this.isTestMatch,
      inningThreshold: this.inningThreshold,
      currentInning: this.currentInning,
    };

    resumeCard.score_card['team_data'] = {
      battingTeamIndex: this.battingTeamIndex,
      bowlerTeamIndex: this.bowlerTeamIndex,
      teams: this.teams,
    };

    resumeCard.score_card['battingTeamScore'] = this.battingTeamScore;
    resumeCard.score_card['teamPlayerScores'] = this.teamPlayerScores;

    resumeCard.score_card['other'] = {
      notSwapped: this.notSwapped,
      currentInning: this.currentInning,
      scoreTeamIndex: this.scoreTeamIndex,
    };
    // console.log(resumeCard);
    return resumeCard;
  }

  generateScoreCard(): ScoreCard {
    // #NANDUN (better not to use this)
    let today = new Date().toLocaleDateString('en-GB');

    let scorer_id = sessionStorage.getItem('user_id');
    let description = { scorer_id: scorer_id, isOver: false };

    let scoreCard = new ScoreCard(
      this.matchId,
      today,
      JSON.stringify(description),
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

    // console.log(scoreCard);
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

  updatePlayerInfoForBall(ball: Ball) {
    //Update the Striker and Bowler for this
    ball.bowler = this.bowler.player;
    ball.bowlType = this.lastBowlType;
    ball.bowlSpeed = this.lastBowlSpeed;

    let extraScore: number = 0;
    /* if (ball.extras.includes('WD') || ball.extras.includes('NB')) {
      extraScore++;
    } */

    if (
      ball.extras.includes('LBy') ||
      ball.extras.includes('By') ||
      ball.extras.includes('WD') ||
      ball.extras.includes('NB')
    ) {
      if (ball.extras.includes('WD') || ball.extras.includes('NB')) {
        extraScore++;
      }
      extraScore += ball.runs;
    }

    // #TODO: Fix Extras Scoring Rules
    ball.striker = this.striker.player;
    ball.shotType = this.lastShotPlayed;
    ball.shotAngle = this.lastShotAngle;
    ball.nonStriker = this.nonStriker.player;
    // console.log(ball);

    //Update Batting Team Score & Wickets
    this.battingTeamScore.totalScore +=
      extraScore <= 0 ? ball.runs : extraScore;
    if (ball.Out.isOut) {
      this.battingTeamScore.wickets++;
      this.bowler.wickets++;
    }

    //Update Bowler Score
    this.bowler.runs += extraScore <= 0 ? ball.runs : extraScore;

    //Updating Striker Score
    if (ball.extras.includes('WD') || ball.extras.includes('NB')) {
    } else {
      this.striker.ballsFaced++;
    }

    if (extraScore <= 0) {
      this.striker.runs += ball.runs;

      if (ball.is4) {
        this.striker.fours++;
      }
      if (ball.is6) {
        this.striker.sixes++;
      }
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
      this.swapBatsman();
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
      //FOR ODI
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
                  this.updateBackEnd();
                });
            } else {
              this.addToTeamScores(structuredClone(this.nonStriker)); // Add this strikers personal score to object containing batter scores
              //If all batters are not out then prompt to pick the next batsman
              this.playerChangeService
                .changeStriker('Select Next Non-Striker')
                .subscribe((p) => {
                  this.changeNonStriker(p);
                  this.updateBackEnd();
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
                this.updateBackEnd();
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
              this.updateBackEnd();
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

        // this.sendScores(this.generateScoreCard()); //Uncomment Later After fixing
        // console.log(this.teamPlayerScores);

        this.inningThreshold++;
        if (this.inningThreshold == 2) {
          /*  this.testMatchService.updateInningData(
            this.teamPlayerScores,
            this.currentInning,
            this.generateScoreCard()
          ); */
          this.inningThreshold = 0;
          if (this.currentInning == 1) {
            this.currentInning = 2;
          }
        }

        this.swapBattingTeam(true);
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
                this.updateBackEnd();
              });
          } else {
            this.addToTeamScores(structuredClone(this.nonStriker)); // Add this strikers personal score to object containing batter scores
            //If all batters are not out then prompt to pick the next batsman
            this.playerChangeService
              .changeStriker('Select Next Non-Striker')
              .subscribe((p) => {
                this.changeNonStriker(p);
                this.updateBackEnd();
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
              this.updateBackEnd();
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
            this.updateBackEnd();
          });
      }

      // Swap Batting Team when All out
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
          // #NANDUN : need to uncomment
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

        this.swapBattingTeam(true);
      }
    }

    // #NANDUN : need to uncomment
     this.testMatchService.updateInningData(
      this.teamPlayerScores,
      this.currentInning,
      this.generateScoreCard(),
      this.notSwapped
    ); 

    this.sendResumeCard(this.generateResumeCard());
  }

  sendResumeCard(resumeCard: ScoreCard) {
    this.postGameService.postScorecardToApi(resumeCard).subscribe((s) => {
      // console.log(s);
    });
  }

  endInnings() {
    // #NANDUN : This method is called when the user press END INNING button
    // DO NOT CHANGE
    this.isResuming = false;
    /*RESET OVERS AND BALLS*/
    /*     this.ballLeftForOver = 6; //Update Number of balls for new Over
    this.currentOverNumber = 1; //Update current over number to next over
    this.ballsForThisOver = new Array<Ball>(); //Replace Balls Array with Empty array

 */
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
      this.inningThreshold = 0;
      if (this.currentInning == 1) {
        this.currentInning = 2;
      }
    }
    // this.sendResumeCard(this.generateResumeCard());
    this.playerChangeService.askForTeamChange().subscribe((ans) => {
      // #NANDUN : This asks the user if he needs to switch teams after ending inning
      // DO NOT CHANGE THIS
      this.notSwapped = ans.switch;
      console.log(ans);
      if (ans.switch) {
        console.log('ENDING INNING : SWITCHING TEAM');
        this.swapBattingTeam(true);
      } else {
        console.log('ENDING INNING : NOT S');
        this.swapBattingTeam(false);
      }
    });
  }

  //runs-panel
  selectOpeningPlayers() {
    if (!this.isResuming) {
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
                  this.updateBackEnd();
                });
            });
        });
    }
  }

  addToTeamScores(b: BatterScore) {
    if (this.scoreTeamIndex) {
      this.teamPlayerScores[0].batting.push(b);
    } else {
      this.teamPlayerScores[1].batting.push(b);
    }
  }

  /* addToTeamScoresBowler(b: BowlerScore) {
    if (this.scoreTeamIndex) {
      this.teamPlayerScores[1].bowling.forEach((s) => {
        if ((s.player.id = b.player.id)) {
          s.overs += b.overs;
          s.maidenOvers += b.maidenOvers;
          s.wickets += b.wickets;
          s.runs += b.runs;
          s.economyRate += Math.round((s.runs / s.overs) * 100) / 100;
        } else {
          this.teamPlayerScores[1].bowling.push(b);
        }
      });
    } else {
      this.teamPlayerScores[0].bowling.forEach((s) => {
        if ((s.player.id = b.player.id)) {
          s.overs += b.overs;
          s.maidenOvers += b.maidenOvers;
          s.wickets += b.wickets;
          s.runs += b.runs;
          s.economyRate += Math.round((s.runs / s.overs) * 100) / 100;
        } else {
          this.teamPlayerScores[0].bowling.push(b);
        }
      });
    }
  } */

  addToTeamScoresBowler(b: BowlerScore) {
    if (this.scoreTeamIndex) {
      // this.teamPlayerScores[1].bowling.push(b);
      this.insertBowlerScore(this.teamPlayerScores[1].bowling, b);
    } else {
      // this.teamPlayerScores[0].bowling.push(b);
      this.insertBowlerScore(this.teamPlayerScores[0].bowling, b);
    }
  }

  insertBowlerScore(scores: BowlerScore[], newScore: BowlerScore) {
    // Find the index of the existing BowlerScore object with the same player_id
    const index = scores.findIndex(
      (score) => score.player.id === newScore.player.id
    );

    if (index !== -1) {
      // If a BowlerScore object with the same player_id already exists in the array, add the scores

      scores[index].overs += newScore.overs;
      scores[index].maidenOvers += newScore.maidenOvers;
      scores[index].wickets += newScore.wickets;
      scores[index].runs += newScore.runs;
      scores[index].economyRate +=
        Math.round((scores[index].runs / scores[index].overs) * 100) / 100;
    } else {
      // Otherwise, insert the new BowlerScore object into the array
      scores.push(newScore);
    }
  }

  updateBackEnd() {
    // #NANDUN : uncomment this
    this.testMatchService.updateInningData( 
      structuredClone(this.teamPlayerScores),
      this.currentInning,
      this.generateScoreCard(),
      this.notSwapped
    ); 

    // DO NOT REMOVE THE FOLLOWING LINE
    this.sendResumeCard(this.generateResumeCard());
  }
}
