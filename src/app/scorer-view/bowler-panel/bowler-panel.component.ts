import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crx-bowler-panel',
  templateUrl: './bowler-panel.component.html',
  styleUrls: ['./bowler-panel.component.scss'],
})
export class BowlerPanelComponent implements OnInit {
  displayedColumns: string[] = ['name', 'o', 'm', 'r', 'w', 'er'];

  dataSource = BALL_DATA;

  constructor() {}

  ngOnInit(): void {}
}

export interface BallerTableRow {
  name: string;
  o: number;
  m: number;
  r: number;
  w: number;
  er: number;
}

const BALL_DATA: BallerTableRow[] = [
  { name: 'Jane Doe*', o: 4, m: 3, r: 1, w: 0, er: 15.5 },
];
