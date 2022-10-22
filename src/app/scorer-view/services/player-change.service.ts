import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ChangeBatsmanComponent } from '../change-batsman/change-batsman.component';
import { ChangeBowlerComponent } from '../change-bowler/change-bowler.component';
import { Player } from '../i/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerChangeService {
  selectedBowler: Player = { id: -1, first_name: '', last_name: '' };
  selectedBatsman: Player = { id: -1, first_name: '', last_name: '' };

  constructor(public dialog: MatDialog) {}

  changeBowler() {
    const dialogRef = this.dialog.open(ChangeBowlerComponent, {
      width: '300px',
      data: { selectedPlayer: this.selectedBowler },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selectedBowler = result;
      }
    });
  }

  changeStriker() {
    const dialogRef = this.dialog.open(ChangeBatsmanComponent, {
      width: '300px',
      data: { selectedPlayer: this.selectedBatsman },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selectedBatsman = result;
      }
    });
  }

  getStrikerDetails(): Observable<Player> {
    const striker = of(this.selectedBatsman);
    return striker;
  }

  getBowlerDetails(): Observable<Player> {
    const bowler = of(this.selectedBowler);
    return bowler;
  }
}
