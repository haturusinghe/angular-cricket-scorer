import { GetLiveScoresService } from './../../services/get-live-scores.service';
import { ScoringService } from './../../services/scoring.service';
import { ScoreCard } from './../../../../scorer-view/services/score-card';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LiveGameTsService } from '../../services/live-game.ts.service';
import { Subject, switchMap, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'crx-live-score-home',
  templateUrl: './live-score-home.component.html',
  styleUrls: ['./live-score-home.component.scss'],
})
export class LiveScoreHomeComponent implements OnInit, OnDestroy {
  // scoreCard = this.liveGameTsService.getMatch('test_1999');

  constructor(
    private liveGameTsService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private scoringService: ScoringService
  ) {}
  id = 0;
  getScorecard() {
    this.liveGameTsService.resumeScoringSession();
    // this.getLiveScoresService.getSingleMatchData(
    //   localStorage.getItem('match_id') || ''
    // );
    this.scoringService.initResumeCard();
    this.liveGameTsService.getOverDetails();
    this.liveGameTsService.getCurrentOver();
  }

  ngOnInit(): void {
    window.setInterval(() => {
      window.location.reload();
    }, 60000);
    this.getScorecard();
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
