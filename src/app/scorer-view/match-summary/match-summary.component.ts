import { Component, OnInit } from '@angular/core';
import { OverData } from '../i/over-data';
import { BatterScore } from '../i/player-score';
import { TeamScore } from '../i/team-score';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.scss'],
})
export class MatchSummaryComponent implements OnInit {
  tournamentName: string = '';
  batting: string = '';
  currentOver: OverData = { currentOver: -1, ballsLeft: -1 };
  totalOvers: number = -1;
  battingTeamScore?: TeamScore;

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.getMatchMeta();
    this.getCurrentOver();
    this.getBattingTeamScore();
  }

  getMatchMeta(): void {
    const meta = this.matchDataService.getMatchMetaDetails();
    this.tournamentName = meta.tName;
    this.batting = meta.batting;
    this.totalOvers = meta.totalOvers;
  }

  getCurrentOver(): void {
    this.matchDataService
      .getCurrentOver()
      .subscribe((cOver) => (this.currentOver = cOver));
  }

  getBattingTeamScore(): void {
    this.matchDataService
      .getBattingTeamScore()
      .subscribe((bts) => (this.battingTeamScore = bts));
  }
  getBattingTeam() {
    if (this.battingTeamScore) {
      return this.battingTeamScore.teamName;
    } else {
      return 'Hello';
    }
  }
}
