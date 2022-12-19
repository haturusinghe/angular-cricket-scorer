import { GetLiveScoresService } from './../../services/get-live-scores.service';
import {
  NonStriker,
  ScoreCard,
  Scorecard,
  Summary,
} from './../../../../scorer-view/i/score-card';
import { BowlerScore } from './../../../../scorer-view/i/bowler-score';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';
import { BatterScore } from 'src/app/scorer-view/i/player-score';
import { PostScore } from 'src/app/scorer-view/i/post-scores';
import { MatchDataServiceService } from 'src/app/scorer-view/services/match-data-service.service';

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
  scorecard: ScoreCard[] = [];
  bowlingfig: BowlerScore[] = [];
  teamsNames = { batters: '', bowlers: '' };

  constructor(
    private liveDataService: LiveGameTsService,
    private getLiveScoresService: GetLiveScoresService
  ) {
    // this.getTeamNames();
  }

  ngOnInit(): void {
    // this.updateData();
    this.updateDs();

    this.getBattingDetails();
    console.log(this.bowlingfig);
  }
  // getTeamNames() {
  //   this.teamsNames = {
  //     batters: this.scorecard.summary.teamName,
  //     bowlers: this.scorecard.summary.bowlingTeam,
  //   };
  // }

  updateDs() {
    this.getLiveScoresService.getScoreCard().subscribe((s) => {
      this.scorecard = [];
      this.scorecard.push(JSON.parse(s.scorecard));
      this.teamsNames.batters = this.scorecard[0].summary.teamName;
      this.teamsNames.bowlers = this.scorecard[0].summary.bowlingTeam;
    });
  }

  getBattingDetails() {
    if (this.scorecard[0].summary.inning.trim() == '1st') {
      if (
        this.scorecard[0].meta.batting.trim() ==
        this.scorecard[0].innings.a_1.teamName.trim()
      ) {
        this.bowlingfig = this.scorecard[0].innings.b_1.bowling;
        this.scores = this.scorecard[0].innings.a_1.batting;
      } else {
        this.scores = this.scorecard[0].innings.b_1.batting;
        this.bowlingfig = this.scorecard[0].innings.a_1.bowling;
      }
    } else if (this.scorecard[0].summary.inning.trim() == '2nd') {
      if (
        this.scorecard[0].meta.batting.trim() ==
        this.scorecard[0].innings.a_2.teamName.trim()
      ) {
        this.scores = this.scorecard[0].innings.a_2.batting;
        this.bowlingfig = this.scorecard[0].innings.b_2.bowling;
      } else {
        this.scores = this.scorecard[0].innings.b_2.batting;
        this.bowlingfig = this.scorecard[0].innings.a_2.bowling;
      }
    }
  }
}
