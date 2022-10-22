import { Component, OnInit } from '@angular/core';
import { BowlerScore } from '../i/bowler-score';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-bowler-panel',
  templateUrl: './bowler-panel.component.html',
  styleUrls: ['./bowler-panel.component.scss'],
})
export class BowlerPanelComponent implements OnInit {
  displayColumns: string[] = [
    'player',
    'runs',
    'maidenOvers',
    'overs',
    'wickets',
    'economyRate',
  ];

  bowler: BowlerScore = {
    player: { id: 99, first_name: 'Axl', last_name: 'Rose' },
    runs: -1,
    maidenOvers: -1,
    overs: -1,
    wickets: -1,
    economyRate: -1,
  };

  bowlerTableData = [this.bowler];

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.updatePlayers();
  }

  getBowler(): void {
    this.matchDataService
      .getBowlerDetails()
      .subscribe((b) => (this.bowler = b));
  }

  updatePlayers() {
    this.getBowler();
    this.bowlerTableData = [this.bowler];
  }

  changeBowler() {
    this.matchDataService.changeBowler();
    this.updatePlayers();
  }
}


