import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostScore } from '../i/post-scores';
import { PostGameService } from './post-game.service';
import { ScoreCard } from './score-card';

@Injectable({
  providedIn: 'root',
})
export class TestMatchScorerService {
  constructor(private postGameService: PostGameService) {}
  innings = {
    a_1: {},
    b_1: {},
    a_2: {},
    b_2: {},
  };

  updateInningData(
    scoreObj: PostScore[],
    inning: number,
    scorecard: ScoreCard,
    notSwapped: boolean = false //after the end of the ending , did the teams switch ?
  ) {
    console.log(scoreObj);

    if (inning == 1) {
      this.innings.a_1 = scoreObj[0];
      this.innings.b_1 = scoreObj[1];
    } else if (inning == 2) {
      if (!notSwapped) {
        this.innings.a_2 = scoreObj[0];
        this.innings.b_2 = scoreObj[1];
      } else {
        this.innings.a_2 = scoreObj[1];
        this.innings.b_2 = scoreObj[0];
      }
    }
    scorecard.score_card['innings'] = this.innings;
    // console.log(scorecard);
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
