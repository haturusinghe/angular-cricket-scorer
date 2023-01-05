import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreCard } from '../../i/i/score-card';
import { TeamScore } from '../../i/i/team-score';
import { GetLiveScoresService } from '../../services/get-live-scores.service';
import { LiveGameTsService } from '../../services/live-game.ts.service';

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
    this.liveGameTsService.setScorecard('test_match_x');

    this.getLiveScoresService.getScoreCard().subscribe((scoreCard) => {
      let score_card: ScoreCard = JSON.parse(scoreCard.scorecard);

      this.summary.teamName = score_card.summary.teamName;
      this.summary.bowlingTeam = score_card.summary.bowlingTeam;
      this.summary.totalScore = score_card.summary.totalScore;
      this.summary.wickets = score_card.summary.wickets;
      this.summary.inning = score_card.summary.inning;
      this.summary.currentOver = score_card.current_over.currentOver - 1;
      this.summary.overBallsBowled = 6 - score_card.current_over.ballsLeft;
      this.summary.totalOvers = score_card.meta.totalOvers;
      this.summary.date = scoreCard.date;
      this.summary.tournamentName = score_card.meta.tName;
    });
  }

  constructor(
    private liveGameTsService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.liveGameTsService.setScorecard('test_match_x');
    this.getSummary();
  }

  dash() {
    this.router.navigate(['dashboard']);
  }
}
