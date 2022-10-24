import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatchDataServiceService } from './services/match-data-service.service';
@Component({
  selector: 'crx-scorer-view',
  templateUrl: './scorer-view.component.html',
  styleUrls: ['./scorer-view.component.scss'],
})
export class ScorerViewComponent implements OnInit {
  currentStrikerControl = new FormControl('');
  player?: string;

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    // this.matchDataService.selectOpeningPlayers();
  }
}
