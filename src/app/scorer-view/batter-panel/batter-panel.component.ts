import { Component, OnInit } from '@angular/core';
import { ChangeBatsmanComponent } from '../change-batsman/change-batsman.component';
import { Player } from '../i/player';
import { BatterScore } from '../i/player-score';
import { MatchDataServiceService } from '../services/match-data-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'crx-batter-panel',
  templateUrl: './batter-panel.component.html',
  styleUrls: ['./batter-panel.component.scss'],
})
export class BatterPanelComponent implements OnInit {
  selectedBatsman?: Player;
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

  shotVals: string[] = [
    'Defensive shot',
    'Drive',
    'Flick',
    'Cut',
    'Square drive',
    'Pull and hook',
    'Sweep',
    'Reverse sweep',
  ];
  selectedShot = this.shotVals[1];

  constructor(
    private matchDataService: MatchDataServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updatePlayers();
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

  updatePlayers() {
    this.getStriker();
    this.getNonStriker();
    this.batTableData = [this.striker, this.nonStriker];
  }

  changeStriker() {
    const dialogRef = this.dialog.open(ChangeBatsmanComponent, {
      width: '300px',
      data: { selectedPlayer: this.selectedBatsman },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.selectedBatsman = result;
      if (result) {
        this.matchDataService.changeStriker(result);
        this.updatePlayers();
      }
    });

    /*     this.matchDataService.changeStriker();
    this.updatePlayers(); */
  }

  swapSides() {
    this.matchDataService.swapBatsman();
    this.updatePlayers();
  }

  updateLastShot() {
    this.matchDataService.changeLastShotType(this.selectedShot);
  }
}
