import { Component, OnInit } from '@angular/core';
import { BatterScore } from '../i/player-score';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-batter-panel',
  templateUrl: './batter-panel.component.html',
  styleUrls: ['./batter-panel.component.scss'],
})
export class BatterPanelComponent implements OnInit {
  displayColumns: string[] = [
    'player',
    'runs',
    'ballsFaced',
    'sixes',
    'fours',
    'strikeRate',
  ];

  striker: BatterScore = {
    player: { id: 99, first_name: 'Axl', last_name: 'Rose' },
    ballsFaced: -1,
    runs: -1,
    sixes: -1,
    fours: -1,
    strikeRate: -1,
  };
  nonStriker: BatterScore = {
    player: { id: 69, first_name: 'Bon', last_name: 'Jovi' },
    ballsFaced: -1,
    runs: -1,
    sixes: -1,
    fours: -1,
    strikeRate: -1,
  };

  batTableData = [this.striker, this.nonStriker];

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.getStriker();
    this.getNonStriker();
    this.batTableData = [this.striker, this.nonStriker];
  }

  getStriker(): void {
    this.matchDataService
      .getStrikerDetails()
      .subscribe((s) => (this.striker = s));
  }

  getNonStriker(): void {
    this.matchDataService
      .getNonStrikerDetails()
      .subscribe((n) => (this.nonStriker = n));
  }

  displayTest() {
    console.log(this.striker);
    console.log(this.nonStriker);
  }
}
