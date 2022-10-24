import { Component, OnInit } from '@angular/core';
import { BowlerScore } from '../i/bowler-score';
import { MatchDataServiceService } from '../services/match-data-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangeBowlerComponent } from '../change-bowler/change-bowler.component';
import { Player } from '../i/player';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'crx-bowler-panel',
  templateUrl: './bowler-panel.component.html',
  styleUrls: ['./bowler-panel.component.scss'],
})
export class BowlerPanelComponent implements OnInit {
  selectedBowler?: Player;

  displayColumns: string[] = [
    'player',
    'runs',
    'maidenOvers',
    'overs',
    'wickets',
    'economyRate',
  ];

  bowler: BowlerScore = {
    player: { id: 99, first_name: 'Axl', last_name: 'Rose' },
    runs: -1,
    maidenOvers: -1,
    overs: -1,
    wickets: -1,
    economyRate: -1,
  };

  bowlerTableData = [this.bowler];

  bowlVals: string[] = [
    'Bouncer',
    'Outswinger',
    'Inswingers',
    'Reverse Swing',
    'Leg and Off Cutter',
    'Yorker',
    'Slower Ball',
  ];
  selectedBowl = this.bowlVals[0];
  bowlSpeed: number = 10;

  constructor(
    private matchDataService: MatchDataServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBowler();
    this.updateBowlInfo();
  }

  getBowler(): void {
    this.matchDataService.getBowlerDetails().subscribe((b) => {
      this.bowler = b;
      this.bowlerTableData = [this.bowler];
    });
  }

  changeBowler() {
    const dialogRef = this.dialog.open(ChangeBowlerComponent, {
      width: '300px',
      data: { selectedPlayer: this.selectedBowler },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.selectedBowler = result;
      if (result) {
        this.matchDataService.changeBowler(result);
        this.getBowler();
      }
    });
  }

  updateBowlInfo() {
    console.log(this.selectedBowl, this.bowlSpeed);
    this.matchDataService.changeLastBowlInfo(this.selectedBowl, this.bowlSpeed);
  }
}
