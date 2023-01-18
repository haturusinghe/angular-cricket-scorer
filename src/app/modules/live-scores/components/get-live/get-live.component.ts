import { ScoringService } from './../../services/scoring.service';
import { Router } from '@angular/router';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';
import { MatchSummary } from '../../services/scoring.service';

@Component({
  selector: 'crx-get-live',
  templateUrl: './get-live.component.html',
  styleUrls: ['./get-live.component.scss'],
})
export class GetLiveComponent implements OnInit {
  start = 1;
  constructor(
    private liveGameTsService: LiveGameTsService,
    private scoringService: ScoringService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMatches();
    console.log(this.summaryList);
  }

  summaryList: MatchSummary[] = [];
  newMatch() {
    this.start = 0;
    this.liveGameTsService.setScorecard('test_match_x');
    this.liveGameTsService.resumeScoringSession();

    this.router.navigate(['live-scores/live']);
  }

  getMatches() {
    this.scoringService
      .getMatchSummaryList()
      .subscribe((s) => (this.summaryList = s));
  }
}
