import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { ChangeBatsmanComponent } from '../change-batsman/change-batsman.component';
import { ChangeBowlerComponent } from '../change-bowler/change-bowler.component';
import { Player } from '../i/player';
import { MatchDataServiceService } from './match-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerChangeService {
  selectedBowler: Player = {
    id: -1,
    first_name: '',
    last_name: '',
  };
  selectedBatsman: Player = {
    id: -1,
    first_name: '',
    last_name: '',
  };

  constructor(public dialog: MatDialog) {}

  changeBowler(title: string): Observable<Player> {
    const dialogRef = this.dialog.open(ChangeBowlerComponent, {
      width: '300px',
      disableClose: true,
      data: { selectedPlayer: this.selectedBowler, title: title },
    });

    return dialogRef.afterClosed(); /* .subscribe((result) => {
      if (result) {
        this.selectedBowler = result;
        console.log(result);
      }
    }); */
  }

  changeStriker(title: string): Observable<Player> {
    const dialogRef = this.dialog.open(ChangeBatsmanComponent, {
      width: '300px',
      disableClose: true,
      data: { selectedPlayer: this.selectedBatsman, title: title },
    });

    return dialogRef.afterClosed(); /* .subscribe((result) => {
      if (result) {
        this.selectedBatsman = result;
      }
    }); */
  }

  /*   getStrikerDetails(): Observable<Player> {
    this.changeStriker();
    const striker = of(this.selectedBatsman);
    return striker;
  }

  getBowlerDetails(): Observable<Player> {
    this.changeBowler();
    const bowler = of(this.selectedBowler);
    return bowler;
  } */
}
