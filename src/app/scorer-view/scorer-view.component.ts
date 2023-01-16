import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatchMetaDataService } from '../shared/services/match-meta-data.service';
import { MatchDataServiceService } from './services/match-data-service.service';
import { PreGameDataService } from './services/pre-game-data.service';
@Component({
  selector: 'crx-scorer-view',
  templateUrl: './scorer-view.component.html',
  styleUrls: ['./scorer-view.component.scss'],
})
export class ScorerViewComponent implements OnInit {
  currentStrikerControl = new FormControl('');
  player?: string;

  showPreGameComp: boolean = true;

  constructor(private matchDataService: MatchDataServiceService) {}

  ngOnInit(): void {
    this.checkStartingStatus();
    // this.isPreGameDataValid();
    // this.matchDataService.selectOpeningPlayers();
  }

  /* isPreGameDataValid() {
    this.preGameService
      .isPreGameComponentClosed()
      .subscribe((s) => (this.stepperClosed = s));
  } */

  handlePreGameEvent(data: boolean) {
    console.log('Data From Child:' + data);
    this.showPreGameComp = data;
  }

  checkStartingStatus() {
    const local_data = sessionStorage.getItem('match_starting_status');
    let status: StartingStatus;
    if (local_data) {
      status = JSON.parse(local_data);
      this.showPreGameComp = status.startingNewMatch;
    }
    if (this.showPreGameComp == false) {
      this.matchDataService.resumeScoringSession();
    }
  }
}

export interface StartingStatus {
  startingNewMatch: boolean;
}
