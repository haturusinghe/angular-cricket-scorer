import { Scorecard } from './../i/score-card';
import { TeamDataService } from './team-data.service';
import { ResumeCard, CurrentPlayers } from './resume-scoring.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostScore } from '../i/post-scores';
import { PostGameService } from './post-game.service';
import { ScoreCard } from './score-card';
import { Over } from '../i/over';
import { Ball } from '../i/ball';
import { BatterScore } from '../i/player-score';
import { BowlerScore } from '../i/bowler-score';

@Injectable({
  providedIn: 'root',
})
export class TestMatchScorerService {
  constructor(
    private postGameService: PostGameService,
    private teamDataService: TeamDataService
  ) {}
  innings: Inning = {
    a_1: {
      teamName: 'a',
      batting: [],
      bowling: [],
      totalScore: 0,
      extras: 0,
      allOvers: [],
    },
    b_1: {
      teamName: 'a',
      batting: [],
      bowling: [],
      totalScore: 0,
      extras: 0,
      allOvers: [],
    },
    a_2: {
      teamName: 'a',
      batting: [],
      bowling: [],
      totalScore: 0,
      extras: 0,
      allOvers: [],
    },
    b_2: {
      teamName: 'a',
      batting: [],
      bowling: [],
      totalScore: 0,
      extras: 0,
      allOvers: [],
    },
  };

  calculateExtras(allOvers: Over[]) {
    let extras = 0;

    allOvers.forEach((over) => {
      over.balls.forEach((ball: Ball) => {
        if (ball.extras.length > 0) {
          if (ball.runs == 0) {
            extras += 1;
          } else {
            extras += ball.runs;
          }
        }
      });
    });

    return extras;
  }

  updateInningData(
    scoreObj: InningScore[],
    inning: number,
    scorecard: ScoreCard,
    resumeCard: ScoreCard,

    x: boolean = false,
    notSwapped: boolean = false
    //after the end of the ending , did the teams switch ?
  ) {
    console.log('Resume', resumeCard);
    console.log('svvvvvs', this.innings);

    const totalRuns = resumeCard.score_card.battingTeamScore.totalScore;

    const extras = this.calculateExtras(
      resumeCard.score_card.over_data.allOvers
    );

    console.log('extras', extras);

    if (inning == 1) {
      if (
        scoreObj[1].teamName == resumeCard.score_card.battingTeamScore.teamName
      ) {
        const overdata1 = resumeCard.score_card.over_data.allOvers;
        const current_players = resumeCard.score_card.current_players;
        scoreObj[1].current_players = current_players;
        scoreObj[1].allOvers = overdata1;
        scoreObj[1].totalScore = totalRuns;
        scoreObj[1].extras = extras;

        this.innings.b_1 = scoreObj[1];

        this.innings.a_1.teamName = scoreObj[0].teamName;
        this.innings.a_1.batting = scoreObj[0].batting;
        this.innings.a_1.bowling = scoreObj[0].bowling;
        console.log('hi from 2');
      } else if (
        scoreObj[0].teamName == resumeCard.score_card.battingTeamScore.teamName
      ) {
        const overdata = resumeCard.score_card.over_data.allOvers;
        const current_players = resumeCard.score_card.current_players;
        scoreObj[0].current_players = current_players;
        scoreObj[0].allOvers = overdata;
        scoreObj[0].totalScore = totalRuns;
        scoreObj[0].extras = extras;
        this.innings.a_1 = scoreObj[0];
        this.innings.b_1.bowling = scoreObj[1].bowling;
        this.innings.b_1.batting = scoreObj[1].batting;
        this.innings.b_1.teamName = scoreObj[1].teamName;
      }
    } else if (inning == 2) {
      if (!notSwapped) {
        if (
          scoreObj[1].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata1 = resumeCard.score_card.over_data.allOvers;
          const current_players = resumeCard.score_card.current_players;
          scoreObj[1].current_players = current_players;
          scoreObj[1].allOvers = overdata1;
          scoreObj[1].totalScore = totalRuns;
          scoreObj[1].extras = extras;

          this.innings.b_2 = scoreObj[1];
          this.innings.a_2.bowling = scoreObj[0].bowling;
        } else if (
          scoreObj[0].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata = resumeCard.score_card.over_data.allOvers;
          const current_players = resumeCard.score_card.current_players;
          scoreObj[0].current_players = current_players;
          scoreObj[0].allOvers = overdata;
          scoreObj[0].totalScore = totalRuns;
          scoreObj[0].extras = extras;
          this.innings.a_2 = scoreObj[0];

          this.innings.b_2.bowling = scoreObj[1].bowling;
          this.innings.b_2.batting = scoreObj[1].batting;
          this.innings.b_2.teamName = scoreObj[1].teamName;
        }
      } else {
        if (
          scoreObj[0].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata1 = resumeCard.score_card.over_data.allOvers;
          const current_players = resumeCard.score_card.current_players;
          scoreObj[0].current_players = current_players;
          scoreObj[0].allOvers = overdata1;
          scoreObj[0].totalScore = totalRuns;
          scoreObj[0].extras = extras;

          this.innings.b_2 = scoreObj[0];
          this.innings.a_2.bowling = scoreObj[1].bowling;
        } else if (
          scoreObj[1].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata = resumeCard.score_card.over_data.allOvers;
          const current_players = resumeCard.score_card.current_players;
          scoreObj[1].current_players = current_players;
          scoreObj[1].allOvers = overdata;
          scoreObj[1].totalScore = totalRuns;
          scoreObj[1].extras = extras;
          this.innings.a_2 = scoreObj[1];

          this.innings.b_2.bowling = scoreObj[1].bowling;
          this.innings.b_2.batting = scoreObj[1].batting;
          this.innings.b_2.teamName = scoreObj[1].teamName;
        }
      }
    }
    scorecard.score_card['innings'] = this.innings;
    console.log(scorecard);
    this.sendScores(scorecard);
  }

  getInnings(): Observable<any> {
    const innings = of(this.innings);
    return innings;
  }

  sendScores(scoreCard: ScoreCard) {
    console.log('HELLO FROM UPDATED SCORER SERVICE');
    this.postGameService.postScorecardToApi(scoreCard).subscribe((s) => {
      // console.log(s);
    });
  }

  getScores(matchId: string) {
    this.teamDataService.getSingleMatchData(matchId).subscribe((s) => {
      let scorecard = JSON.parse(s.scorecard);
      console.log('Post card', s);
      this.innings = scorecard.innings;
      //   if (scorecard.innings.a_1) {
      //     this.innings.a_1 = scorecard.innings.a_1;
      //   } else if (s.scorecard.innings.b_1) {
      //     this.innings.b_1 = scorecard.innings.b_1;
      //   } else if (s.scorecard.innings.a_2) {
      //     this.innings.a_2 = scorecard.innings.a_2;
      //   } else if (s.scorecard.innings.b_2) {
      //     this.innings.b_2 = scorecard.innings.b_2;
      //   }
    });
  }
}

export interface InningScore {
  teamName: string;
  batting: BatterScore[];
  bowling: BowlerScore[];
  totalScore?: number;
  extras?: number;
  allOvers?: Over[];
  currentOver?: Over;
  current_players?: CurrentPlayers;
}
export interface Inning {
  a_1: InningScore;
  b_1: InningScore;
  a_2: InningScore;
  b_2: InningScore;
}
