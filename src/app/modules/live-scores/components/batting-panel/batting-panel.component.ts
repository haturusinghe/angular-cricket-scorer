import { NonStriker } from './../../../../scorer-view/i/score-card';
import { BowlerScore } from './../../../../scorer-view/i/bowler-score';
import { LiveGameTsService } from './../../services/live-game.ts.service';
import { Component, OnInit } from '@angular/core';
import { BatterScore } from 'src/app/scorer-view/i/player-score';
import { PostScore } from 'src/app/scorer-view/i/post-scores';
import { MatchDataServiceService } from 'src/app/scorer-view/services/match-data-service.service';
import { ScoreCard } from 'src/app/scorer-view/i/score-card';

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
  scorecard!: ScoreCard;
  bowlingfig: BowlerScore[] = [];
  teamsNames = { batters: '', bowlers: '' };

  constructor(private liveDataService: LiveGameTsService) {
    // this.getTeamNames();
  }

  ngOnInit(): void {
    // this.updateData();
    this.updateDs();
    this.getTeamNames();
    this.getBattingDetails();
    console.log(this.bowlingfig);
    console.log(this.scorecard.innings.a_2.batting);
    console.log(this.scorecard.innings.b_2.batting);
  }
  getTeamNames() {
    this.teamsNames = {
      batters: this.scorecard.summary.teamName,
      bowlers: this.scorecard.summary.bowlingTeam,
    };
  }

  updateDs() {
    this.liveDataService.getIningDetails().subscribe((s) => {
      this.scorecard = s;
    });
  }

  getBattingDetails() {
    if (this.scorecard.summary.inning.trim() == '1st') {
      if (
        this.scorecard.meta.batting.trim() ==
        this.scorecard.innings.a_1.teamName.trim()
      ) {
        this.bowlingfig = this.scorecard.innings.b_1.bowling;
        this.scores = this.scorecard.innings.a_1.batting;
      } else {
        this.scores = this.scorecard.innings.b_1.batting;
        this.bowlingfig = this.scorecard.innings.a_1.bowling;
      }
    } else if (this.scorecard.summary.inning.trim() == '2nd') {
      if (
        this.scorecard.meta.batting.trim() ==
        this.scorecard.innings.a_2.teamName.trim()
      ) {
        this.scores = this.scorecard.innings.a_2.batting;
        this.bowlingfig = this.scorecard.innings.b_2.bowling;
      } else {
        this.scores = this.scorecard.innings.b_2.batting;
        this.bowlingfig = this.scorecard.innings.a_2.bowling;
      }
    }
  }
}
