import { ScoreCard } from 'src/app/scorer-view/i/score-card';
import { GetLiveScoresService } from './../../services/get-live-scores.service';
import { Summary, Scorecard } from './../../../../scorer-view/i/score-card';
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
    this.liveGameTsService.setScorecard('test_match_1');

    this.getLiveScoresService.getScoreCard().subscribe((scoreCard) => {
      let score_card: ScoreCard = JSON.parse(scoreCard.scorecard);

      this.summary.teamName = score_card.summary.teamName;
      this.summary.bowlingTeam = score_card.summary.bowlingTeam;
      this.summary.totalScore = score_card.summary.totalScore;
      this.summary.wickets = score_card.summary.wickets;
      this.summary.inning = score_card.summary.inning;
      this.summary.currentOver = score_card.current_over.currentOver;
      this.summary.overBallsBowled = 6 - score_card.current_over.ballsLeft;
      this.summary.totalOvers = score_card.meta.totalOvers;
      this.summary.date = scoreCard.date;
      this.summary.tournamentName = score_card.meta.tName;
    });
  }

  constructor(
    private liveGameTsService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService
  ) {}

  ngOnInit(): void {
    this.liveGameTsService.setScorecard('test_match_1');
    this.getSummary();
  }
}
