import { ScoringService } from './../../services/scoring.service';
import { GetLiveScoresService } from './../../services/get-live-scores.service';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OverData } from '../../i/i/over-data';
import { Over } from '../../i/i/over';
import { ScoreCard } from '../../i/i/score-card';

@Component({
  selector: 'crx-by-ball',
  templateUrl: './by-ball.component.html',
  styleUrls: ['./by-ball.component.scss'],
})
export class ByBallComponent implements OnInit, OnChanges {
  constructor(
    private liveGameTsService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private scoringService: ScoringService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllOvers();
  }
  ngOnInit(): void {
    this.getAllOvers();
  }
  scoreCard: ScoreCard[] = [];
  currentOver: OverData = { currentOver: 1, ballsLeft: -1 };

  getAllOvers(): void {
    this.getLiveScoresService
      .getScoreCard(localStorage.getItem('match_id') || '')
      .subscribe((s) => {
        this.scoreCard[0] = JSON.parse(s.scorecard);

        // this.currentOver = scorecard.over_data.currentOver;
      });
  }

  // getCurrentOver(): void {
  //   this.scoringService
  //     .getResumeCardArr0()
  //     .subscribe((s) => (this.currentOver = s[0].over_data.currentOver));
  // }
}
