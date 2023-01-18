import { map } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BowlerScore } from '../../i/i/bowler-score';
import { BatterScore } from '../../i/i/player-score';
import { ScoreCard } from '../../i/i/score-card';
import { GetLiveScoresService } from '../../services/get-live-scores.service';
import { LiveGameTsService } from '../../services/live-game.ts.service';

@Component({
  selector: 'crx-batting-panel',
  templateUrl: './batting-panel.component.html',
  styleUrls: ['./batting-panel.component.scss'],
})
export class BattingPanelComponent implements OnInit {
  displayColumns: string[] = [
    'player',
    'runs',
    'ballsFaced',
    'sixes',
    'fours',
    'strikeRate',
  ];

  scores: BatterScore[] = [];
  bowlingfig: BowlerScore[] = [];
  teamsNames = { batters: '', bowlers: '' };
  inning: string = '1';

  scoreCard: ScoreCard[] = [];

  constructor(
    private liveDataService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService,
    private activatedRoute: ActivatedRoute
  ) {
    // this.getTeamNames();
  }

  ngOnInit(): void {
    // this.updateData();

    this.updateDs();
  }
  // getTeamNames() {
  //   this.teamsNames = {
  //     batters: this.scorecard.summary.teamName,
  //     bowlers: this.scorecard.summary.bowlingTeam,
  //   };
  // }

  updateDs() {
    this.getLiveScoresService
      .getScoreCard(localStorage.getItem('match_id') || '')
      .subscribe((s) => {
        this.teamsNames.batters = this.scoreCard[0].summary.teamName;
        this.teamsNames.bowlers = this.scoreCard[0].summary.bowlingTeam;
        this.inning = this.scoreCard[0].summary.inning;

        console.log('Score', this.scoreCard[0]);
      });
  }
}
