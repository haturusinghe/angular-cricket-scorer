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
    this.getLiveMatches();
    this.getPastMatches();
    console.log(this.liveMatchList);
  }

  liveMatchList: MatchSummary[] = [];
  pastMatchList: MatchSummary[] = [];

  newMatch(match_id: string) {
    this.start = 0;
    this.liveGameTsService.setScorecard(match_id);
    localStorage.setItem('match_id', match_id);
    this.liveGameTsService.resumeScoringSession();

    this.router.navigate(['live-scores/live']);
  }

  getLiveMatches() {
    this.scoringService
      .getLiveMatchList()
      .subscribe((s) => (this.liveMatchList = s));
  }
  getPastMatches() {
    this.scoringService
      .getPastMatchList()
      .subscribe((s) => (this.pastMatchList = s));
  }
}
