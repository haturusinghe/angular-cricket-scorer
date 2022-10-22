import { Component, OnInit } from '@angular/core';
import { Over } from '../i/over';
import { MatchDataServiceService } from '../services/match-data-service.service';

@Component({
  selector: 'crx-by-ball',
  templateUrl: './by-ball.component.html',
  styleUrls: ['./by-ball.component.scss'],
})
export class ByBallComponent implements OnInit {
  allOvers: Over[] = [];

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.getAllOvers();
  }

  getAllOvers(): void {
    this.matchDataService
      .getOverDetails()
      .subscribe((overs) => (this.allOvers = overs));
  }
}
