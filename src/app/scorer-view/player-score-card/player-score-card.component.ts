import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BatterScore } from '../i/player-score';
import { PostScore } from '../i/post-scores';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-player-score-card',
  templateUrl: './player-score-card.component.html',
  styleUrls: ['./player-score-card.component.scss'],
})
export class PlayerScoreCardComponent implements OnInit {
  displayColumns: string[] = [
    'player',
    'runs',
    'ballsFaced',
    'sixes',
    'fours',
    'strikeRate',
  ];

  scores: BatterScore[] = [];
  allScores: PostScore[] = [];
  teamsNames = { batters: '', bowlers: '' };

  constructor(private matchDataService: MatchDataServiceService) {
    this.getTeamNames();
  }

  ngOnInit(): void {
    this.updateDs();
    this.updateData();
  }
  getTeamNames() {
    this.teamsNames = this.matchDataService.getTeamNames();
  }

  updateDs() {
    this.matchDataService.getPlayerTeamScores().subscribe((s) => {
      this.scores = s;
    });
  }

  updateData() {
    this.matchDataService.getAllPlayerTeamScores().subscribe((s) => {
      this.allScores = s;
    });
  }
}

/* export class UserDataSource extends DataSource<any> {
  constructor(private matchDataService: MatchDataServiceService) {
    super();
  }
  connect(): Observable<BatterScore[]> {
    return this.matchDataService.getPlayerTeamScores();
  }
  disconnect() {}
}
 */
