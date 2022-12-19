import { BowlerPanelComponent } from './../../../../scorer-view/bowler-panel/bowler-panel.component';
import { TeamScore } from './../../../../scorer-view/i/team-score';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crx-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.scss'],
})
export class MatchSummaryComponent implements OnInit {
  summary: TeamScore = {
    teamName: 'SL',
    bowlingTeam: 'NZ',
    inning: '1st',
    totalScore: 12,
    wickets: 3,
    currentOver: 2,
    overBallsBowled: 4,
    totalOvers: 5,
    date: '2020.12.20',
    tournamentName: 'Tour of india',
  };

  getSummary(): void {
    this.liveGameTsService
      .getSummary('test_match_1')
      .subscribe((s) => (this.summary = s));
  }

  constructor(private liveGameTsService: LiveGameTsService) {}

  ngOnInit(): void {
    this.getSummary();
  }
}
