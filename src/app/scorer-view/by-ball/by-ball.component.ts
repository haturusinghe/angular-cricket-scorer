import { Component, OnInit } from '@angular/core';
import { Over } from '../i/over';
import { OverData } from '../i/over-data';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-by-ball',
  templateUrl: './by-ball.component.html',
  styleUrls: ['./by-ball.component.scss'],
})
export class ByBallComponent implements OnInit {
  allOvers: Over[] = [];
  currentOver: OverData = { currentOver: -1, ballsLeft: -1 };

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.getAllOvers();
    this.getCurrentOver();
  }

  getAllOvers(): void {
    this.matchDataService
      .getOverDetails()
      .subscribe((overs) => (this.allOvers = overs));
  }

  getCurrentOver(): void {
    this.matchDataService
      .getCurrentOver()
      .subscribe((current) => (this.currentOver = current));
  }
}
