import { Component, OnInit } from '@angular/core';
import { BatterScore } from '../i/player-score';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-batter-panel',
  templateUrl: './batter-panel.component.html',
  styleUrls: ['./batter-panel.component.scss'],
})
export class BatterPanelComponent implements OnInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['name', 'r', 'b', '_4s', '_6s', 'sr'];

  displayColumns: string[] = [
    'player',
    'runs',
    'ballsFaced',
    'sixes',
    'fours',
    'strikeRate',
  ];

  striker?: BatterScore;
  nonStriker?: BatterScore;

  dataSource = BAT_DATA;

  batTableData = [this.striker, this.nonStriker];

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.getStriker();
    this.getNonStriker();
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

export interface BatterTableRow {
  name: string;
  r: number;
  b: number;
  _4s: number;
  _6s: number;
  sr: number;
}

const BAT_DATA: BatterTableRow[] = [
  { name: 'Jon Doe*', r: 4, b: 3, _4s: 1, _6s: 0, sr: 15.5 },
  { name: 'Foo Bar', r: 20, b: 30, _4s: 1, _6s: 1, sr: 55.6 },
];
