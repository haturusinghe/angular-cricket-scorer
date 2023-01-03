import { GetLiveScoresService } from './../../services/get-live-scores.service';
import { ScoringService } from './../../services/scoring.service';
import { ScoreCard } from './../../../../scorer-view/services/score-card';
import { Component, OnInit } from '@angular/core';
import { LiveGameTsService } from '../../services/live-game.ts.service';

@Component({
  selector: 'crx-live-score-home',
  templateUrl: './live-score-home.component.html',
  styleUrls: ['./live-score-home.component.scss'],
})
export class LiveScoreHomeComponent implements OnInit {
  // scoreCard = this.liveGameTsService.getMatch('test_1999');

  constructor(
    private liveGameTsService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private scoringService: ScoringService
  ) {}

  getScorecard() {
    this.liveGameTsService.resumeScoringSession();
    this.getLiveScoresService.getSingleMatchData('resume_test_match_2');
    this.scoringService.initResumeCard();
    this.liveGameTsService.getOverDetails();
    this.liveGameTsService.getCurrentOver();
  }

  ngOnInit(): void {
    this.getScorecard();
  }
}
