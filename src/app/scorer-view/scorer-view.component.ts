import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  stepperClosed = { isOn: false };

  constructor(
    private matchDataService: MatchDataServiceService,
    private preGameService: PreGameDataService
  ) {}

  ngOnInit(): void {
    this.isPreGameDataValid();
    // this.matchDataService.selectOpeningPlayers();
  }

  isPreGameDataValid() {
    this.preGameService
      .isPreGameComponentClosed()
      .subscribe((s) => (this.stepperClosed = s));
  }
}
