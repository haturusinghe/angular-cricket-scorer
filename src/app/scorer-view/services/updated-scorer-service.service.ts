import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostScore } from '../i/post-scores';

@Injectable({
  providedIn: 'root',
})
export class TestMatchScorerService {
  constructor() {}
  innings = {
    a_1: {},
    b_1: {},
    a_2: {},
    b_2: {},
  };

  updateInningData(scoreObj: PostScore[], inning: number) {
    if (inning == 1) {
      this.innings.a_1 = scoreObj[0];
      this.innings.b_1 = scoreObj[1];
    } else if (inning == 2) {
      this.innings.a_2 = scoreObj[0];
      this.innings.b_2 = scoreObj[1];
    }
  }

  getInnings(): Observable<any> {
    const innings = of(this.innings);
    return innings;
  }
}
