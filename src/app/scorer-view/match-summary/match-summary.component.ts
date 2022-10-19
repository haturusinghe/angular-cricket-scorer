import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crx-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.scss'],
})
export class MatchSummaryComponent implements OnInit {
  tournamentName: string = 'Sri Lanka Tour of England';
  batting: string = 'England';
  currentOver: number = 2;
  totalOvers: number = 50;

  constructor() {}

  ngOnInit(): void {}
}
