import { ResumeCard } from './resume-scoring.service';
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
  constructor(private postGameService: PostGameService) {}
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
    console.log(scoreObj);

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
        scoreObj[1].allOvers = overdata1;
        scoreObj[1].totalScore = totalRuns;
        scoreObj[1].extras = extras;

        this.innings.b_1 = scoreObj[1];
        this.innings.a_1.bowling = scoreObj[0].bowling;
        console.log('hi from 2');
      } else if (
        scoreObj[0].teamName == resumeCard.score_card.battingTeamScore.teamName
      ) {
        const overdata = resumeCard.score_card.over_data.allOvers;
        scoreObj[0].allOvers = overdata;
        scoreObj[0].totalScore = totalRuns;
        scoreObj[0].extras = extras;
        this.innings.a_1 = scoreObj[0];
        this.innings.b_1 = scoreObj[1];
        console.log('hi');
      }

      console.log('a_1', this.innings.a_1);
      console.log('b_1', this.innings.b_1);
    } else if (inning == 2) {
      if (!notSwapped) {
        if (
          scoreObj[1].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata1 = resumeCard.score_card.over_data.allOvers;
          scoreObj[1].allOvers = overdata1;
          scoreObj[1].totalScore = totalRuns;
          scoreObj[1].extras = extras;

          this.innings.b_2 = scoreObj[1];
          this.innings.a_2.bowling = scoreObj[0].bowling;
          console.log('hi from 2');
        } else if (
          scoreObj[0].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata = resumeCard.score_card.over_data.allOvers;
          scoreObj[0].allOvers = overdata;
          scoreObj[0].totalScore = totalRuns;
          scoreObj[0].extras = extras;
          this.innings.a_2 = scoreObj[0];
          this.innings.b_2 = scoreObj[1];
          console.log('hi');
        }
      } else {
        if (
          scoreObj[0].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata1 = resumeCard.score_card.over_data.allOvers;
          scoreObj[0].allOvers = overdata1;
          scoreObj[0].totalScore = totalRuns;
          scoreObj[0].extras = extras;

          this.innings.b_2 = scoreObj[0];
          this.innings.a_2.bowling = scoreObj[1].bowling;
          console.log('hi from 2');
        } else if (
          scoreObj[1].teamName ==
          resumeCard.score_card.battingTeamScore.teamName
        ) {
          const overdata = resumeCard.score_card.over_data.allOvers;
          scoreObj[1].allOvers = overdata;
          scoreObj[1].totalScore = totalRuns;
          scoreObj[1].extras = extras;
          this.innings.a_2 = scoreObj[1];
          this.innings.b_2 = scoreObj[0];
          console.log('hi');
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
}

export interface InningScore {
  teamName: string;
  batting: BatterScore[];
  bowling: BowlerScore[];
  totalScore?: number;
  extras?: number;
  allOvers?: Over[];
  currentOver?: Over;
}
export interface Inning {
  a_1: InningScore;
  b_1: InningScore;
  a_2: InningScore;
  b_2: InningScore;
}
